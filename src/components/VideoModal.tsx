// src/components/VideoModal.tsx
import React from "react";

type VideoModalProps = {
    videoUrl: string;
    onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl p-8 overflow-hidden rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 text-4xl text-gray-300 hover:text-red-500 right-4"
                >
                    &times;
                </button>
                <iframe
                    className="w-full h-96"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoModal;
