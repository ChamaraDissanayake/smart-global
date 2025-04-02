import React from "react";

type ArticleModalProps = {
    article: {
        thumbnail?: string;
        title: string;
        description: string;
        content: string;
        time: number;
    };
    onClose: () => void;
};

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            {/* Outer positioning container (transparent) */}
            <div className="relative w-full max-w-4xl mx-8">
                {/* Close button in overlay but positioned relative to content container */}
                <button
                    onClick={onClose}
                    className="absolute text-4xl text-gray-300 -top-8 -right-6 hover:text-red-500"
                >
                    &times;
                </button>

                {/* Inner content container with scroll */}
                <div className="max-h-[90vh] overflow-y-auto bg-gray-800 rounded-lg p-8">
                    {article.thumbnail && (
                        <img
                            src={article.thumbnail}
                            alt={article.title}
                            className="object-cover w-full h-64 mb-6 rounded-lg"
                        />
                    )}
                    <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </div>
        </div>
    );
};

export default ArticleModal;