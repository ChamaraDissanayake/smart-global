// src/pages/Insights.tsx
import React, { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import InsightsIntroVideo from "../assets/videos/insights-intro.mp4";
import VideoModal from "../components/shared/VideoModal";
import ArticleModal from "../components/shared/ArticleModal";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { Insight } from "../utils/modals/Insight";
import { fetchInsights } from "../services/InsightService";

const Insights: React.FC = () => {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
    const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<Insight['article'] | null>(null);
    const [showMoreVideos, setShowMoreVideos] = useState(false);
    const [showMoreArticles, setShowMoreArticles] = useState(false);

    useEffect(() => {
        const loadInsights = async () => {
            try {
                setIsLoading(true);
                const data = await fetchInsights();
                setInsights(data);
                setError(null);
            } catch (err) {
                setError('Failed to load insights. Please try again later.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        loadInsights();
    }, []);

    // Filter insights by category
    const filteredInsights = selectedCategory
        ? insights.filter((insight) => insight.category === selectedCategory)
        : insights;

    // Get unique categories for filtering
    const categories = Array.from(new Set(insights.map((insight) => insight.category)));

    // Filter videos and articles
    const filteredVideos = filteredInsights.filter((insight) => insight.video);
    const filteredArticles = filteredInsights.filter((insight) => insight.article);

    // Modal handlers
    const openVideoModal = (videoUrl: string) => {
        setSelectedVideoUrl(videoUrl);
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setSelectedVideoUrl(null);
    };

    const openArticleModal = (article: Insight['article']) => {
        setSelectedArticle(article);
        setIsArticleModalOpen(true);
    };

    const closeArticleModal = () => {
        setIsArticleModalOpen(false);
        setSelectedArticle(null);
    };

    const toggleShowMoreVideos = () => {
        setShowMoreVideos((prev) => !prev);
        if (showMoreVideos) {
            document.getElementById("videos-section")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleShowMoreArticles = () => {
        setShowMoreArticles((prev) => !prev);
        if (showMoreArticles) {
            document.getElementById("articles-section")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="relative h-[550px] overflow-hidden">
                <video autoPlay muted loop className="absolute top-0 left-0 object-cover w-full h-full">
                    <source src={InsightsIntroVideo} type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-transparent"></div>
                <div className="absolute top-0 left-0 flex items-center w-full h-full p-8 text-white">
                    <div className="max-w-2xl">
                        <h1 className="mb-4 text-4xl font-bold">What NVIDIA is trying to build next</h1>
                        <p className="text-lg">An interview with Jensen Huang, CEO at NVIDIA</p>
                        <button
                            onClick={() => openVideoModal("https://www.youtube.com/embed/7ARBJQn6QkM")}
                            className="flex items-center mt-16 text-lg text-blue-200 transition-all hover:text-red-500 hover:underline"
                        >
                            Watch interview <FaPlayCircle className="ml-2 text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isVideoModalOpen && selectedVideoUrl && (
                <VideoModal videoUrl={selectedVideoUrl} onClose={closeVideoModal} />
            )}
            {isArticleModalOpen && selectedArticle && (
                <ArticleModal article={selectedArticle} onClose={closeArticleModal} />
            )}

            {/* Insights Section */}
            <section className="py-12 bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-white">Insights</h2>
                        <p className="mt-4 text-gray-300">
                            Stay updated with the latest trends, news, and insights from our experts.
                        </p>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex justify-center py-12">
                            <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="p-4 my-8 text-center text-red-500 bg-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Success State */}
                    {!isLoading && !error && (
                        <>
                            {/* Category Filters */}
                            <ul className="flex justify-center mb-8 overflow-x-auto bg-gray-900 rounded-lg whitespace-nowrap scrollbar-hide h-[42px]">
                                <li className="flex-shrink-0">
                                    <button
                                        className={`relative px-3 py-2 text-sm font-semibold min-w-[100px] md:px-4 md:text-base ${!selectedCategory ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                                        onClick={() => setSelectedCategory(null)}
                                    >
                                        All
                                    </button>
                                </li>
                                {categories.map((category) => (
                                    <li key={category} className="flex-shrink-0">
                                        <button
                                            className={`relative px-3 py-2 text-sm font-semibold min-w-[100px] md:px-4 md:text-base ${selectedCategory === category ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Videos Section */}
                            {filteredVideos.length > 0 && (
                                <div id="videos-section" className="my-12">
                                    <div className="flex items-center justify-between mb-6 text-white">
                                        <h3 className="text-xl font-bold">Videos ({filteredVideos.length})</h3>
                                    </div>
                                    <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                        <AnimatePresence>
                                            {filteredVideos
                                                .slice(0, showMoreVideos ? filteredVideos.length : 4)
                                                .map((insight) => (
                                                    <motion.div
                                                        key={insight.id}
                                                        layout
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        onClick={() => insight.video?.url && openVideoModal(insight.video.url)}
                                                        className="relative overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-md cursor-pointer"
                                                    >
                                                        {insight.video?.thumbnail && (
                                                            <img
                                                                src={insight.video.thumbnail}
                                                                alt={insight.video.title}
                                                                className="object-cover w-full h-48"
                                                            />
                                                        )}
                                                        <motion.div
                                                            className="absolute inset-0 flex items-center justify-center mb-24 bg-black bg-opacity-50"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <motion.div
                                                                animate={{ scale: [1, 1.2, 1] }}
                                                                transition={{ duration: 1, repeat: Infinity }}
                                                            >
                                                                <FaPlayCircle className="text-6xl text-white opacity-75" />
                                                            </motion.div>
                                                        </motion.div>
                                                        <div className="p-4">
                                                            <div className="text-sm text-gray-300">{insight.category}</div>
                                                            <h3 className="my-2 text-xl font-bold text-white">{insight.video?.title}</h3>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                        </AnimatePresence>
                                    </motion.div>
                                    {filteredVideos.length > 4 && (
                                        <div className="flex justify-end mt-4 mr-4 text-xl">
                                            <button
                                                onClick={toggleShowMoreVideos}
                                                className="flex items-center text-blue-200 transition-all hover:text-red-500"
                                            >
                                                {showMoreVideos ? (
                                                    <>
                                                        Show Less
                                                        <CiCircleChevUp className="ml-2" />
                                                    </>
                                                ) : (
                                                    <>
                                                        See All
                                                        <CiCircleChevDown className="ml-2" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Articles Section */}
                            {filteredArticles.length > 0 && (
                                <div id="articles-section" className="my-12">
                                    <div className="flex items-center justify-between mb-6 text-white">
                                        <h3 className="text-xl font-bold">Articles ({filteredArticles.length})</h3>
                                    </div>
                                    <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                        <AnimatePresence>
                                            {filteredArticles
                                                .slice(0, showMoreArticles ? filteredArticles.length : 4)
                                                .map((insight) => (
                                                    <motion.div
                                                        key={insight.id}
                                                        layout
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        onClick={() => insight.article && openArticleModal(insight.article)}
                                                        className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-red-500/50"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <div className="p-4">
                                                            <div className="text-sm text-gray-300">{insight.category}</div>
                                                            <h3 className="my-2 text-xl font-bold text-white">{insight.article?.title}</h3>
                                                            <p className="text-gray-300">{insight.article?.description}</p>
                                                            <p className="flex justify-end pt-4 text-sm text-gray-400">Reading time: {insight.article?.time} minutes</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                        </AnimatePresence>
                                    </motion.div>
                                    {filteredArticles.length > 4 && (
                                        <div className="flex justify-end mt-4 mr-4 text-xl">
                                            <button
                                                onClick={toggleShowMoreArticles}
                                                className="flex items-center text-blue-200 transition-all hover:text-red-500"
                                            >
                                                {showMoreArticles ? (
                                                    <>
                                                        Show Less
                                                        <CiCircleChevUp className="ml-2" />
                                                    </>
                                                ) : (
                                                    <>
                                                        See All
                                                        <CiCircleChevDown className="ml-2" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Insights;