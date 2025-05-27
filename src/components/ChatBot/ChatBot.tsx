import React, { useState, useEffect, useRef, useMemo } from "react";
import ChatService, { ChatMessage } from "../../services/ChatService";
import { v4 as uuidv4 } from "uuid";

interface ChatBotProps {
    onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
    const WELCOME_MESSAGE = useMemo<ChatMessage>(() => ({
        id: "0",
        text: "Welcome! How can I assist you?",
        sender: "assistant",
    }), []);

    const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);

    const [inputText, setInputText] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);
    const [threadId, setThreadId] = useState<string | null>(null); // track threadId
    const [showForm, setShowForm] = useState<boolean>(true); // show form by default

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const typingGif = "https://media.tenor.com/mT5Timqns1sAAAAi/loading-dots-bouncing-dots.gif";

    // Check if threadId exists
    useEffect(() => {
        const storedThreadId = localStorage.getItem("threadId");
        if (storedThreadId) {
            setThreadId(storedThreadId);
            setShowForm(false);
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Submit customer info
    const handleFormSubmit = async () => {
        const newCustomerId = uuidv4();
        try {
            const threadId = await ChatService.createCustomerThread(newCustomerId, name, email, phone);
            localStorage.setItem("threadId", threadId);
            setThreadId(threadId);
            setShowForm(false);
        } catch (error) {
            console.error("Failed to create customer:", error);
        }
    };

    const handleSendMessage = async () => {
        if (inputText.trim() === "" || isSending || !threadId) return;

        const newMessage: ChatMessage = {
            id: String(messages.length + 1),
            text: inputText.trim(),
            sender: "user",
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInputText("");
        setIsSending(true);

        setTimeout(() => {
            const typingMessage: ChatMessage = {
                id: String(messages.length + 2),
                text: typingGif,
                sender: "assistant",
            };

            setMessages((prevMessages) => [...prevMessages, typingMessage]);
        }, 3000);

        try {
            const response = await ChatService.sendChatMessage(threadId, inputText.trim());

            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.text === typingGif
                        ? { id: String(messages.length + 2), text: response.botResponse, sender: "assistant" }
                        : msg
                )
            );
        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            setIsSending(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSendMessage();
        }
    };

    useEffect(() => {
        const storedThreadId = localStorage.getItem("threadId");
        if (storedThreadId) {
            setThreadId(storedThreadId);
            setShowForm(false);
        }
    }, []);

    useEffect(() => {
        const loadChatHistory = async () => {
            if (threadId) {
                try {
                    const history = await ChatService.getChatHistory(threadId);
                    setMessages([WELCOME_MESSAGE, ...history.reverse()]);

                } catch (error) {
                    console.error("Failed to load chat history:", error);
                }
            }
        };

        loadChatHistory();
    }, [WELCOME_MESSAGE, threadId]);



    return (
        <div
            className="fixed bottom-0 right-0 bg-gray-800 rounded-tl-lg shadow-lg z-1000 w-[calc(100%-1rem)] mx-2 sm:mx-0 sm:w-96 h-[calc(100vh-4rem)] sm:h-[400px] sm:bottom-4 sm:right-4 overflow-hidden font-sans"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
            <div className="flex flex-col h-full">
                <span
                    className="absolute text-3xl text-gray-100 cursor-pointer top-2 right-5 hover:text-gray-300"
                    onClick={onClose}
                >
                    &times;
                </span>

                {/* Chat header */}
                <div className="flex items-center p-4 bg-blue-900 rounded-t-lg">
                    <img
                        src="./images/team/bot.jpg"
                        alt="Profile"
                        className="w-10 h-10 mr-3 rounded-full"
                    />
                    <div className="text-white">
                        <h4 className="text-lg font-semibold">Ayisha</h4>
                        <span className="text-sm opacity-70">SR Customer Happiness Advisor</span>
                    </div>
                </div>

                {/* Show form or chat */}
                {showForm ? (
                    <div className="flex flex-col items-center justify-center flex-1 gap-3 p-4 text-white bg-gray-900">
                        <p className="text-sm text-center">
                            To give you a better experience, please tell us a bit about yourself.
                        </p>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 bg-gray-800 border border-blue-500 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-2 bg-gray-800 border border-blue-500 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            className="w-full p-2 bg-gray-800 border border-blue-500 rounded"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button
                            onClick={handleFormSubmit}
                            className="px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Start Chat
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Chat body */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-950">
                            <div className="flex flex-col gap-3">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`p-3 rounded-lg max-w-[80%] sm:max-w-[70%] ${message.sender === "assistant"
                                            ? "bg-blue-100 self-start rounded-bl-none text-blue-800"
                                            : "bg-green-100 self-end rounded-br-none text-green-800"
                                            }`}
                                    >
                                        {message.text === typingGif ? (
                                            <img src={typingGif} alt="Typing..." className="w-12 h-6" />
                                        ) : (
                                            <p className="text-sm">{message.text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat input area */}
                        <div className="flex gap-2 p-4 border-t border-red-900">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a message..."
                                className="flex-1 p-2 bg-gray-900 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isSending}
                                className={`px-4 py-2 text-white rounded-lg ${isSending
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                            >
                                Send
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
