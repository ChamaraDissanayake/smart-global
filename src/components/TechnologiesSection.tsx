import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../utils/constants/company-details";

type Technology = {
    name: string;
    icon: string;
};

type Tab = {
    id: string;
    label: string;
};

type Technologies = {
    [key: string]: Technology[];
};

const TechnologiesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("mobile");

    const tabs: Tab[] = [
        { id: "mobile", label: "Mobile App" },
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "devops", label: "Cloud & Devops" },
        { id: "payment", label: "Payment" },
    ];

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
        <section className="p-6 md:p-12">
            <div className="container px-2 mx-auto md:px-4">
                <div className="mb-6 text-center md:mb-8">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Empowering Solutions with the Latest Technologies
                    </h2>
                    <p className="mt-3 text-gray-300 md:mt-4">
                        <Link to="/">{COMPANY_NAME}</Link> leverages advanced technologies to deliver innovative and scalable solutions tailored to your business needs.
                    </p>
                </div>

                <ul className="flex justify-center mb-6 overflow-x-auto bg-gray-900 rounded-lg whitespace-nowrap scrollbar-hide md:justify-center md:mb-8 h-[42px]">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="flex-shrink-0">
                            <button
                                className={`relative px-3 py-2 text-sm font-semibold min-w-[100px] md:px-4 md:text-base button-border 
                                    ${activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200 hover:scale-105"}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                    {technologies[activeTab].map((tech) => (
                        <div
                            key={tech.name}
                            className="p-4 text-center transition-shadow bg-gray-900 rounded-lg shadow-md hover:shadow-lg md:p-6"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-10 h-10 mx-auto mb-3 transition-transform duration-300 ease-in-out hover:scale-125 md:w-12 md:h-12 md:mb-4"
                            />
                            <p className="text-sm font-medium text-gray-300 md:text-base">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
