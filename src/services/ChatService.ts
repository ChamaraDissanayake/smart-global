import axios from "axios";
import socket from "./helpers/socket";

const CHAT_BASE_URL = import.meta.env.VITE_CHAT_BASE_URL;

export interface ChatMessage {
    id: string;
    text: string;
    sender: "assistant" | "user";
}

export interface ChatHistoryResponse {
    id: string;
    threadId: string;
    role: "assistant" | "user";
    content: string;
    createdAt: string;
}

function getCompanyId(): string {
    return '6624d7c0-ced8-4878-8644-bd5ceb6ef5d8';
}

const ChatService = {
    createCustomerThread: async (
        customerId: string,
        name: string,
        email: string,
        phone: string
    ): Promise<string> => {
        const companyId = getCompanyId();
        const response = await axios.post(`${CHAT_BASE_URL}/customer/create`, {
            customerId,
            companyId,
            name,
            email,
            phone,
        });
        return response.data.threadId;
    },

    sendChatMessage: async (
        threadId: string,
        message: string
    ): Promise<{ botResponse: string }> => {
        const companyId = getCompanyId();
        const response = await axios.post(`${CHAT_BASE_URL}/chat/chat-web`, {
            threadId,
            companyId,
            message,
        });
        return response.data;
    },

    getChatHistory: async (
        threadId: string,
        limit = 20,
        offset = 0
    ): Promise<ChatMessage[]> => {
        const response = await axios.get(`${CHAT_BASE_URL}/chat/chat-history`, {
            params: { threadId, limit, offset },
        });

        return response.data.map((msg: ChatHistoryResponse, index: number) => ({
            id: msg.id || String(index + 1),
            text: msg.content,
            sender: msg.role,
        }));
    },

    connectToThread: (
        threadId: string,
        onMessage: (msg: ChatMessage) => void
    ) => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.emit("join-thread", threadId);

        const handleNewMessage = (msg: ChatHistoryResponse) => {
            const message: ChatMessage = {
                id: msg.id,
                text: msg.content,
                sender: msg.role,
            };
            onMessage(message);
        };

        socket.on("new-message", handleNewMessage);

        return () => {
            socket.off("new-message", handleNewMessage);
        };
    },
};

export default ChatService;