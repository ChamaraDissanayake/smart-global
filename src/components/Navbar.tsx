import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../utils/constants/company-details';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [scrolling, setScrolling] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBgColor = scrolling || isMobileMenuOpen ? 'bg-custom-gray bg-opacity-90' : 'bg-transparent';

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const translateToArabic = () => {
        setTimeout(() => {
            const selectElement = document.querySelector<HTMLSelectElement>('.goog-te-combo');
            if (selectElement) {
                if (selectElement.value !== 'ar') {
                    selectElement.value = 'ar';
                    selectElement.dispatchEvent(new Event('change'));
                    console.log('Language changed to Arabic');
                } else {
                    console.log('Language already converted');
                }
            }
        }, 100); // Ensures Google Translate has loaded
    };

    return (
        <nav className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${navBgColor} z-50`}>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center flex-1 sm:justify-start">
                        <div className="flex items-center text-2xl font-semibold text-white md:text-3xl whitespace-nowrap">
                            <img src={"icons/company-logo.png"} alt="icon" className="w-8 h-8 mr-2 md:w-10 md:h-10" />
                            <Link to="/" className="text-white">{COMPANY_NAME}</Link>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden sm:block sm:ml-6 h-[40px]">
                        <div className="flex items-center space-x-2 md:space-x-4">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/insights', label: 'Insights' },
                                { path: '/about', label: 'About' },
                                { path: '/services', label: 'Services' },
                                { path: '/careers', label: 'Careers' },
                                { path: '/contact', label: 'Contact' }
                            ].map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`relative px-2 py-2 text-sm font-semibold transition-all transform md:px-3 md:text-base hover:scale-105 button-border ${location.pathname === path ? 'active-tab' : 'text-gray-300'}`}
                                >
                                    {label}
                                </Link>
                            ))}
                            {/* Add Translate to Arabic Button */}
                            <motion.button
                                onClick={translateToArabic}
                                className="px-4 py-2 text-white border-4 border-transparent rounded-md"
                                initial={{ scale: 1, borderColor: "transparent" }} // Default: No border
                                whileHover={{
                                    scale: [1, 1.1, 1], // Scale up and down while hovering
                                    borderColor: ["#ef4444", "#000000"], // Blink between red and black
                                    transition: {
                                        scale: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }, // Smooth text scaling effect
                                        borderColor: { repeat: Infinity, duration: 0.8, ease: "easeInOut" }, // Blinking border
                                    },
                                }}
                                animate={{ borderColor: "transparent" }} // Reset border when mouse leaves
                            >
                                يترجم
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/insights', label: 'Insights' },
                            { path: '/about', label: 'About' },
                            { path: '/services', label: 'Services' },
                            { path: '/contact', label: 'Contact' }
                        ].map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === path ? 'bg-gray-700' : 'text-white'}`}
                                onClick={handleLinkClick}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;