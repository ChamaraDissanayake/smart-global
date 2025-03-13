import React, { useState } from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import ChatIcon from "../assets/icons/chat.png";
import ChatBot from "./ChatBot"; // Import the ChatBot component

const ChatFAB: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatBotOpen, setIsChatBotOpen] = useState(false); // State for ChatBot visibility

    return (
        <div className="fixed z-50 bottom-5 right-5">
            {/* Floating Action Button */}
            <button
                className="p-2 bg-transparent rounded-full hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={ChatIcon} alt="Chat" className="w-12 h-12" />
            </button>

            {/* Chat Options */}
            {isOpen && (
                <div className="absolute right-0 flex flex-col gap-2 p-3 bg-white rounded-lg shadow-lg bottom-16">
                    <button
                        onClick={() => {
                            window.open("https://wa.me/97142399266", "_blank");
                            setIsOpen(false); // Close the popup when an option is clicked
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded hover:bg-gray-100"
                    >
                        <FaWhatsapp className="text-green-600" /> WhatsApp
                    </button>

                    <button
                        onClick={() => {
                            setIsChatBotOpen(true); // Open ChatBot modal
                            setIsOpen(false); // Close the popup when an option is clicked
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 rounded hover:bg-gray-100"
                    >
                        <FaComments className="text-yellow-600" /> Chat
                    </button>
                </div>
            )}

            {/* ChatBot Modal */}
            {isChatBotOpen && <ChatBot onClose={() => setIsChatBotOpen(false)} />}
        </div>
    );
};

export default ChatFAB;
