import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../utils/constants/company-details";

// Define types for the technology items
type Technology = {
    name: string;
    icon: string;
};

// Define types for the tabs
type Tab = {
    id: string;
    label: string;
};

// Define the shape of the technologies object
type Technologies = {
    [key: string]: Technology[];
};

const TechnologiesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("mobile");

    // Define the tabs
    const tabs: Tab[] = [
        { id: "mobile", label: "Mobile App" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "devops", label: "Cloud & Devops" },
        { id: "payment", label: "Payment" },
    ];

    // Define the technologies data
    const technologies: Technologies = {
        mobile: [
            { name: "iOS", icon: "./icons/ios.svg" },
            { name: "Xamarin", icon: "./icons/xamarin.svg" },
            { name: "Swift", icon: "./icons/swift.svg" },
            { name: "Android", icon: "./icons/android.svg" },
            { name: "Kotlin", icon: "./icons/kotlin.svg" },
            { name: "Java", icon: "./icons/java.svg" },
            { name: "React Native", icon: "./icons/react.svg" },
            { name: "Flutter", icon: "./icons/flutter.svg" },
            { name: "Ionic", icon: "./icons/ionic.svg" },
            { name: "Capacitor", icon: "./icons/capacitor.svg" },
            { name: "Cordova", icon: "./icons/cordova.svg" }
        ],
        frontend: [
            { name: "HTML", icon: "./icons/html.svg" },
            { name: "CSS", icon: "./icons/css.svg" },
            { name: "Tailwind CSS", icon: "./icons/tailwind.svg" },
            { name: "Angular", icon: "./icons/angular.svg" },
            { name: "React JS", icon: "./icons/react.svg" },
            { name: "Next JS", icon: "./icons/next.svg" },
            { name: "Vite", icon: "./icons/vite.svg" },
            { name: "Vue JS", icon: "./icons/vue.svg" },
        ],
        backend: [
            { name: ".NET", icon: "./icons/dotnet.svg" },
            { name: "Java", icon: "./icons/java.svg" },
            { name: "Python", icon: "./icons/python.svg" },
            { name: "PHP", icon: "./icons/php.svg" },
            { name: "Node JS", icon: "./icons/node.svg" },
            { name: "GO", icon: "./icons/go.svg" }
        ],
        devops: [
            { name: "Docker", icon: "./icons/docker.svg" },
            { name: "Kubernet", icon: "./icons/kubernet.svg" },
            { name: "SQL Server", icon: "./icons/sql.svg" },
            { name: "Terraform", icon: "./icons/terraform.svg" },
            { name: "Google Cloud", icon: "./icons/google-cloud.svg" },
            { name: "AWS", icon: "./icons/aws.svg" },
            { name: "Azure", icon: "./icons/azure.svg" },
            { name: "Digital Ocean", icon: "./icons/ocean.svg" },
            { name: "Firebase", icon: "./icons/firebase.svg" },
        ],
        payment: [
            { name: "PayPal", icon: "./icons/paypal.svg" },
            { name: "Stripe", icon: "./icons/stripe.svg" },
            { name: "Apple Pay", icon: "./icons/apple.svg" },
            { name: "Google Pay", icon: "./icons/google-pay.svg" },
            { name: "Amazon Pay", icon: "./icons/amazon-pay.svg" },
            { name: "Safepay", icon: "./icons/safe-pay.png" },
            { name: "XPay", icon: "./icons/x-pay.png" },
            { name: "Telr", icon: "./icons/telr.png" },
            { name: "CASHU", icon: "./icons/cashu.png" },
            { name: "Crypto", icon: "./icons/crypto.svg" }
        ]
    };

    return (
        <section className="p-12">
            <div className="container px-4 mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Empowering Solutions with the Latest Technologies
                    </h2>
                    <p className="mt-4 text-gray-300">
                        <Link to="/">{COMPANY_NAME}</Link> leverages advanced technologies to deliver innovative and scalable solutions tailored to your business needs.
                    </p>
                </div>

                {/* Tab Navigation */}
                <ul className="flex justify-center mb-8 space-x-6 bg-gray-900 rounded-lg">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                className={`relative px-4 py-2 font-semibold button-border ${activeTab === tab.id
                                    ? "text-white"
                                    : "text-gray-400 hover:text-gray-200 hover:scale-105"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Tab Content */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {technologies[activeTab].map((tech) => (
                        <div
                            key={tech.name}
                            className="p-6 text-center transition-shadow bg-gray-900 rounded-lg shadow-md hover:shadow-lg"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-12 h-12 mx-auto mb-4"
                            />
                            <p className="font-medium text-gray-300">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default TechnologiesSection;