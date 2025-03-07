import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    "/images/join-us-1.jpeg",
    "/images/join-us-2.avif",
    "/images/join-us-3.jpg",
    "/images/join-us-4.webp",
    "/images/join-us-5.jpg",
];

const JoinSection = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentImage(images[index]);
        }, 4000); // Change every 4s

        return () => clearInterval(interval);
    }, []);

    const nextImage = images[(images.indexOf(currentImage) + 1) % images.length];

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-center bg-cover">
            {/* Old Image (Zoom Out and Fade Out) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${currentImage})` }}
                key={`old-${currentImage}`} // Unique key for the old image
                initial={{ opacity: 1, scale: 1 }} // Old image starts visible and normal
                animate={{ opacity: 0, scale: 0.9 }} // Fade out and zoom out
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* New Image (Zoom In and Fade In) */}
            <motion.div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${nextImage})` }}
                key={`new-${nextImage}`} // Unique key for the new image
                initial={{ opacity: 0, scale: 1.1 }} // Start slightly zoomed in and invisible
                animate={{ opacity: 1, scale: 1 }} // Fade in and zoom in
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl p-8 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold text-white">
                    Transform Your Business with AI & Tech
                </h2>
                <p className="mb-6 text-lg">
                    Leverage cutting-edge AI, SaaS, and tech solutions to scale your business, automate processes, and enhance efficiency.
                    Our expertise ensures innovative solutions tailored to your needs.
                </p>
                <button className="px-8 py-4 mt-6 text-xl font-semibold text-white transition duration-300 ease-in-out transform scale-95 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 animate-pulse hover:scale-105 hover:shadow-xl focus:outline-none">
                    Get Started
                </button>
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default JoinSection;
