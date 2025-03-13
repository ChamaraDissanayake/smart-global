// Define the type for an insight/article
export type Insight = {
    id: string;
    category: string;
    video?: {
        title: string;
        thumbnail: string;
        url: string;
    };
    article?: {
        title: string;
        description: string;
        url: string;
        time: number;
    };
};

// Mock data for insights (replace with your actual data or API call)
export const insights: Insight[] = [
    {
        id: "1",
        category: "Technology",
        article: {
            title: "The Future of AI in Business",
            description: "Learn how AI is transforming businesses and what to expect in the future.",
            url: "https://www.home.sandvik/en/stories/articles/2023/09/future-proofing-sandvik/",
            time: 6
        }
    },
    {
        id: "2",
        category: "Mobile",
        article: {
            title: "Top Mobile App Development Trends in 2023",
            description: "Discover the latest trends in mobile app development for the year 2023.",
            url: "https://example.com/article-2",
            time: 5
        }
    },
    {
        id: "3",
        category: "Cloud",
        article: {
            title: "Cloud Computing: Benefits and Challenges",
            description: "Explore the benefits and challenges of cloud computing for businesses.",
            url: "https://example.com/article-3",
            time: 14
        }
    },
    {
        id: "4",
        category: "Technology",
        article: {
            title: "The Role of AI in Healthcare",
            description: "Discover how AI is revolutionizing the healthcare industry and improving patient care.",
            url: "https://example.com/article-4",
            time: 6
        }
    },
    {
        id: "5",
        category: "Mobile",
        video: {
            title: "The Rise of 5G and Its Impact on Mobile",
            thumbnail: "./images/intro-5.jpg",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "The Rise of 5G and Its Impact on Mobile",
            description: "Learn about the latest 5G technology and its impact on mobile devices and applications.",
            url: "https://example.com/article-5",
            time: 7
        }
    },
    {
        id: "6",
        category: "Cloud",
        video: {
            title: "Cloud Security: Best Practices for 2023",
            thumbnail: "./images/intro-7.webp",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "Cloud Security: Best Practices for 2023",
            description: "Find out the best practices for securing your cloud infrastructure in 2023.",
            url: "https://example.com/article-6",
            time: 10
        }
    },
    {
        id: "7",
        category: "Technology",
        article: {
            title: "AI-Powered Automation in Manufacturing",
            description: "Discover how AI is transforming manufacturing processes and increasing efficiency.",
            url: "https://example.com/article-7",
            time: 16
        }
    },
    {
        id: "8",
        category: "Mobile",
        video: {
            title: "Cross-Platform Mobile Development Trends",
            thumbnail: "./images/intro-5.jpg",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "Cross-Platform Mobile Development Trends",
            description: "Explore the latest trends in cross-platform mobile app development.",
            url: "https://example.com/article-8",
            time: 3
        }
    },
    {
        id: "9",
        category: "Cloud",
        video: {
            title: "The Future of Cloud-Native Applications",
            thumbnail: "./images/intro-7.webp",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "The Future of Cloud-Native Applications",
            description: "Learn about the future of cloud-native applications and their benefits.",
            url: "https://example.com/article-9",
            time: 5
        }
    },
    {
        id: "10",
        category: "Technology",
        article: {
            title: "AI Ethics: Challenges and Opportunities",
            description: "Understand the ethical challenges and opportunities in AI development and deployment.",
            url: "https://example.com/article-10",
            time: 4
        }
    },
    {
        id: "11",
        category: "Cloud",
        video: {
            title: "The Evolution of Mobile User Interfaces",
            thumbnail: "./images/intro-7.webp",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "The Evolution of Mobile User Interfaces",
            description: "Explore the evolution of mobile user interfaces and design trends.",
            url: "https://example.com/article-11",
            time: 9
        }
    },
    {
        id: "12",
        category: "Cloud",
        video: {
            title: "Hybrid Cloud Solutions for Enterprises",
            thumbnail: "./images/intro-7.webp",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
        article: {
            title: "Hybrid Cloud Solutions for Enterprises",
            description: "Learn about hybrid cloud solutions and their benefits for enterprises.",
            url: "https://example.com/article-12",
            time: 8
        }
    },
    {
        id: "13",
        category: "Cloud",
        video: {
            title: "Hybrid Cloud Solutions",
            thumbnail: "./images/intro-7.webp",
            url: "https://www.youtube.com/embed/7ARBJQn6QkM"
        },
    },
    {
        id: "14",
        category: "Mobile",
        article: {
            title: "Hybrid Mobile Solutions for Enterprises",
            description: "Learn about hybrid cloud solutions and their benefits for enterprises.",
            url: "https://example.com/article-12",
            time: 3
        }
    },
];