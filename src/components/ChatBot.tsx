import React, { useState } from "react";

type ChatMessage = {
    id: string;
    text: string;
    sender: "bot" | "user";
};

interface ChatBotProps {
    onClose: () => void; // Prop to handle closing the modal
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: "1", text: "Welcome! How can I assist you?", sender: "bot" },
    ]);
    const [inputText, setInputText] = useState<string>("");

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const newMessage: ChatMessage = {
                id: String(messages.length + 1),
                text: inputText,
                sender: "user",
            };
            setMessages([...messages, newMessage]);
            setInputText("");

            // Simulate bot response
            setTimeout(() => {
                const botResponse: ChatMessage = {
                    id: String(messages.length + 2),
                    text: "Thank you for your message!",
                    sender: "bot",
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    return (
        <div
            className="fixed bottom-16 right-16 bg-gray-800 rounded-lg shadow-lg z-1000 w-96 h-[400px] max-w-full overflow-hidden font-sans"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
            <div className="flex flex-col h-full">
                {/* Close button */}
                <span
                    className="absolute text-3xl text-gray-100 cursor-pointer top-2 right-2 hover:text-gray-300"
                    onClick={onClose} // Use the onClose prop
                >
                    &times;
                </span>

                {/* Chat header */}
                <div className="flex items-center p-4 bg-blue-900 rounded-t-lg">
                    <img
                        src="http://smartclassic.ae/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-04-at-11.38.43-AM.jpeg"
                        alt="Profile"
                        className="w-10 h-10 mr-3 rounded-full"
                    />
                    <div className="text-white">
                        <h4 className="text-lg font-semibold">Ayisha</h4>
                        <span className="text-sm opacity-70">
                            SR Customer happiness advisor
                        </span>
                    </div>
                </div>

                {/* Chat body */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-950">
                    <div className="flex flex-col gap-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`p-3 rounded-lg max-w-[80%] ${message.sender === "bot"
                                    ? "bg-blue-100 self-start rounded-bl-none text-blue-800"
                                    : "bg-green-100 self-end rounded-br-none text-green-800"
                                    }`}
                            >
                                <p className="text-sm">{message.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat input area */}
                <div className="flex gap-2 p-4 border-t border-red-900">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;