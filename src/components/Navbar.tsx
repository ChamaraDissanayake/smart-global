import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../utils/constants/company-details';
import icon from '../assets/images/icon.png';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // Mobile menu state
    const [scrolling, setScrolling] = useState<boolean>(false); // State to track scrolling

    // Scroll event listener to change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true); // Change navbar to blue when scrolling
            } else {
                setScrolling(false); // Reset to transparent when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${scrolling ? 'bg-custom-gray bg-opacity-90' : 'bg-transparent'} z-50`}
        >
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center flex-1 sm:justify-start">
                        <div className="flex items-center text-3xl font-semibold text-white">
                            <img src={icon} alt="icon" className="w-10 h-10 mr-2" />
                            <Link to="/" className="text-white">{COMPANY_NAME}</Link>
                        </div>
                    </div>


                    {/* Desktop Links */}
                    <div className="hidden sm:block sm:ml-6 h-[40px]">
                        <div className="flex space-x-4">
                            <Link
                                to="/"
                                className="relative px-3 py-2 font-semibold text-white transition-all transform hover:scale-105 button-border"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="relative px-3 py-2 font-semibold text-white transition-all transform hover:scale-105 button-border"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="relative px-3 py-2 font-semibold text-white transition-all transform hover:scale-105 button-border"
                            >
                                Services
                            </Link>
                            <Link
                                to="/contact"
                                className="relative px-3 py-2 font-semibold text-white transition-all transform hover:scale-105 button-border"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 text-base font-medium text-white rounded-md"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
