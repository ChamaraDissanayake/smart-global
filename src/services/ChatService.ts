import axios from "axios";
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

// This is the company ID for SmartGlobal AI Solutions 
const companyId = '6624d7c0-ced8-4878-8644-bd5ceb6ef5d8';

const ChatService = {
    createCustomerThread: async (customerId: string, name: string, email: string, phone: string): Promise<string> => {
        try {

            const data = await axios.post(`${CHAT_BASE_URL}/customer/create`, {
                customerId,
                companyId,
                name,
                email,
                phone,
            });

            return data.data.threadId;
        } catch (error) {
            console.error("Error creating customer:", error);
            throw error;
        }
    },

    sendChatMessage: async (threadId: string, message: string): Promise<{ botResponse: string }> => {
        try {
            const response = await axios.post<{ botResponse: string }>(`${CHAT_BASE_URL}/chat/chat-web`, { threadId, companyId, message });
            return response.data;
        } catch (error) {
            console.error("Error sending message:", error);
            throw error;
        }
    },

    getChatHistory: async (threadId: string, limit: number = 20, offset: number = 0): Promise<ChatMessage[]> => {
        try {
            const response = await axios.get(`${CHAT_BASE_URL}/chat/chat-history`, {
                params: { threadId, limit, offset },
            });

            return response.data.map((msg: ChatHistoryResponse, index: number) => ({
                id: msg.id || String(index + 1),
                text: msg.content,
                sender: msg.role === "assistant" ? "assistant" : "user",
            }));
        } catch (error) {
            console.error("Error fetching chat history:", error);
            return [];
        }
    },

};

export default ChatService;
