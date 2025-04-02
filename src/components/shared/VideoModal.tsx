import React from "react";

type VideoModalProps = {
    videoUrl: string;
    onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl p-8 overflow-hidden rounded-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 text-4xl text-gray-300 right-4 hover:text-red-500"
                >
                    &times;
                </button>

                {isYouTube ? (
                    <iframe
                        className="w-full h-96"
                        src={videoUrl}
                        title="Video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <video className="w-full bg-black h-96" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default VideoModal;
