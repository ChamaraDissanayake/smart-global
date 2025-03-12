import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define the type for an insight/article
type Insight = {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    image: string;
    url: string;
};

// Mock data for insights (replace with your actual data or API call)
const insights: Insight[] = [
    {
        id: "1",
        title: "The Future of AI in Business",
        description: "Explore how AI is transforming industries and what it means for your business.",
        category: "Technology",
        date: "2023-10-01",
        image: "./images/ai-future.jpg",
        url: "/insights/ai-future",
    },
    {
        id: "2",
        title: "Top Mobile App Development Trends in 2023",
        description: "Discover the latest trends in mobile app development and how to stay ahead.",
        category: "Mobile",
        date: "2023-09-25",
        image: "./images/mobile-trends.jpg",
        url: "/insights/mobile-trends",
    },
    {
        id: "3",
        title: "Cloud Computing: Benefits and Challenges",
        description: "Learn about the advantages and challenges of adopting cloud computing.",
        category: "Cloud",
        date: "2023-09-20",
        image: "./images/cloud-computing.jpg",
        url: "/insights/cloud-computing",
    },
    // Add more insights as needed
];

const Insights: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Filter insights by category
    const filteredInsights = selectedCategory
        ? insights.filter((insight) => insight.category === selectedCategory)
        : insights;

    // Get unique categories for filtering
    const categories = Array.from(new Set(insights.map((insight) => insight.category)));

    return (
        <section className="py-12 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Insights</h2>
                    <p className="mt-4 text-gray-600">
                        Stay updated with the latest trends, news, and insights from our experts.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex justify-center mb-8 space-x-4">
                    <button
                        className={`px-4 py-2 rounded-lg font-semibold ${!selectedCategory
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Insights Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredInsights.map((insight) => (
                        <Link
                            key={insight.id}
                            to={insight.url}
                            className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
                        >
                            <img
                                src={insight.image}
                                alt={insight.title}
                                className="object-cover w-full h-48"
                            />
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-800">{insight.title}</h3>
                                <p className="mb-4 text-gray-600">{insight.description}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{insight.category}</span>
                                    <span className="mx-2">•</span>
                                    <span>{insight.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More Button (Optional) */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Insights;