import React from 'react';
import chooseImage from '../assets/images/choose.jpg';
import expertiesImage from '../assets/images/experties.webp';
import VideoSection from '../components/VideoSection';
import { motion } from 'framer-motion';
import JoinUsSection from '../components/JoinUsSection';
import ContactSection from '../components/ContactSection';
import OurMissionSection from '../components/OurMissionSection';
import ServicesSection from '../components/ServicesSection';
import IntroductionSection from '../components/IntroductionSection';


const Home: React.FC = () => {
    return (
        <>
            {/* Introduction Section */}
            <section>
                <IntroductionSection />
            </section>

            {/* Services Section */}
            <section>
                <ServicesSection />
            </section>

            {/* YouTube Video Section */}
            <section>
                <VideoSection />
            </section>

            {/* Our Expertise Section */}
            <section className="py-10">
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
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10">
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
            </section>

            {/* Our Mission Section*/}
            <section>
                <OurMissionSection />
            </section>

            {/* Join us Section */}
            <section>
                <JoinUsSection />
            </section>

            {/* Contact Us Section */}
            <section>
                <ContactSection />
            </section>

        </>
    );
};

export default Home;
