import React from 'react';
import backgroundImage from '../assets/images/background.jpg';
import chooseImage from '../assets/images/choose.jpg';
import expertiesImage from '../assets/images/experties.webp';
import ServiceCard from "../components/ServiceCard";
import VideoSection from '../components/VideoSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { OUR_MISSION } from '../utils/constants/company-details';
import JoinSection from '../components/JoinSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            {/* Introduction Section */}
            <div className="w-full h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="h-[220px]"></div> {/* Just use as a space gap */}

                <motion.div
                    className="flex items-start justify-start w-full h-full px-8 text-left"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div>
                        <h1 className="text-6xl font-bold text-white md:text-7xl">
                            The Future
                        </h1>
                        <h2 className="text-4xl font-bold text-white md:text-5xl">
                            of Your Business is Here
                        </h2>
                        <h3 className="text-xl text-white md:text-2xl mt-[36px] max-w-[600px] mx-auto">
                            Smart Global Hub offers cost-effective, customized technology and software solutions in the UAE and GCC, empowering businesses with scalable, secure, and AI-powered digital experiences.
                        </h3>
                    </div>
                </motion.div>
            </div>

            {/* Services Section */}
            <div className="container px-8 pb-8 mx-auto mt-[-4rem] max-w-full">
                <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        title="AI & ML"
                        description="Cutting-edge AI technologies to drive business growth."
                        icon="🤖"
                    />
                    <ServiceCard
                        title="Mobile App"
                        description="Create engaging and user-friendly apps for your business."
                        icon="📱"
                    />
                    <ServiceCard
                        title="Web Development"
                        description="We build modern, scalable, and responsive websites tailored to your business needs."
                        icon="🌐"
                    />
                    <ServiceCard
                        title="Custom Software"
                        description="Tailored solutions to meet your business requirements."
                        icon="🖥️"
                    />
                    <ServiceCard
                        title="Cloud Integration"
                        description="Scalable and secure cloud solutions for seamless operations."
                        icon="☁️"
                    />
                    <ServiceCard
                        title="Cybersecurity Services"
                        description="Protect your business with top-notch security frameworks."
                        icon="🛡️"
                    />
                </div>
            </div>

            {/* YouTube Video Section */}
            <div className="py-10">
                <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">Experience the Power of AI & Tech</h2>
                <VideoSection />
            </div>

            <div className="py-10">
                <div className="container grid items-center max-w-full grid-cols-1 px-8 mx-auto md:grid-cols-2">
                    <div className="w-full">
                        <img
                            src={expertiesImage}
                            alt="Our Expertise"
                            className="object-cover object-center w-full h-screen overflow-hidden rounded-lg shadow-lg max-h-[650px]"
                        />
                    </div>

                    <motion.div
                        className="pl-8 mb-8 md:mb-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }} // Trigger animation when the section is in view
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h1 className="mb-6 text-4xl font-bold text-white">
                            Our Expertise & Technical Skills
                        </h1>
                        <p className="mb-8 text-lg text-gray-300">
                            We pride ourselves on mastering a diverse range of technologies that empower businesses to grow. Our team is equipped with advanced skills to provide innovative solutions, always adapting to the latest trends.
                        </p>
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Frontend (UI/UX & Responsiveness)</h3>
                                    <p className="text-gray-300">
                                        We create visually stunning and highly responsive user interfaces.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Backend (Functionality & Security)</h3>
                                    <p className="text-gray-300">
                                        We ensure robust functionality and top-notch security for your applications.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">AI/Automation Features</h3>
                                    <p className="text-gray-300">
                                        We integrate cutting-edge AI and automation to streamline your processes.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Database Optimization</h3>
                                    <p className="text-gray-300">
                                        We optimize databases for performance, scalability, and reliability.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-10">
                <div className="container grid items-center max-w-full grid-cols-1 px-8 mx-auto md:grid-cols-2">
                    <motion.div
                        className="pr-8 mb-8 md:mb-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h1 className="mb-6 text-4xl font-bold text-white">
                            Why Choose Us?
                        </h1>
                        <p className="mb-8 text-lg text-gray-300">
                            We are committed to providing high-quality solutions with the following core values:
                        </p>
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Experienced Professionals</h3>
                                    <p className="text-gray-300">
                                        Our team consists of experts committed to delivering excellence in every project.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Innovative Solutions</h3>
                                    <p className="text-gray-300">
                                        We leverage the latest technologies to develop innovative solutions for your business.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Customer-Centric Approach</h3>
                                    <p className="text-gray-300">
                                        We prioritize understanding your business needs and delivering solutions aligned with your goals.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Proven Track Record</h3>
                                    <p className="text-gray-300">
                                        With successful projects across various industries, we have a proven track record in the UAE and GCC.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="w-full">
                        <img
                            src={chooseImage}
                            alt="Why Choose Us"
                            className="object-cover object-center w-full h-screen overflow-hidden rounded-lg shadow-lg max-h-[650px]"
                        />
                    </div>
                </div>
            </div>

            {/* Our Mission Section*/}
            <div className="py-10">
                <div className="container max-w-full gap-8 px-8 mx-auto">
                    <motion.div
                        className="p-8 bg-[aliceblue] shadow-lg rounded-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }} // Trigger animation when section is in view
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h2 className="mb-4 text-3xl font-bold text-black">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            <Link to="/">{OUR_MISSION}</Link>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Join us Section */}
            <div>
                <JoinSection />
            </div>

            {/* Contact Us Section */}
            <div>
                <ContactSection />
            </div>

            {/* Footer Section */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
