import React from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center p-6 transition-all duration-300 bg-[aliceblue] rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-[#a9a9e4]">
            <div className="mb-4 text-5xl text-green-500">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
