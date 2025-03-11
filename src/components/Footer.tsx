import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative z-10 py-6 text-white bg-gray-800">
            <div className="container px-8 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Footer Section 1 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Smart Global Hub</h4>
                        <p className="mb-4 text-lg">Alfutaim Office Tower Day to Day building</p>
                        <p className="mb-4 text-lg">1st floor - Office 102 Smart Hub HQ</p>
                        <p className="mb-4 text-lg">Phone: +971 50 440 6565</p>
                        <p className="text-lg">
                            Email: <a href="mailto:hello@smartclassic.ae" className="text-blue-400">hello@smartclassic.ae</a>
                        </p>
                    </div>

                    {/* Footer Section 2 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Useful Links</h4>
                        <ul>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Footer Section 3 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Our Services</h4>
                        <ul>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Web Design</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Web Development</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Product Management</a></li>
                            <li><a href="#" className="text-lg text-gray-400 hover:text-white">Marketing</a></li>
                        </ul>
                    </div>

                    {/* Footer Section 4 (Follow Us) */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
                        <div className="mb-4">
                            <p className="text-lg text-gray-400">
                                Driven by innovation, we pioneer progress and serve as trusted partners in every client's digital journey. Based in Dubai, our dedication spearheads digital transformation locally and globally.
                            </p>
                        </div>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.facebook.com/smartclassicdubai/" className="text-gray-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/smartclassicdubai/" className="text-gray-400 hover:text-pink-600" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/smartclassicdubai/posts/?feedView=all" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com/smartforglobal" className="text-gray-400 hover:text-red-500" target="_blank" rel="noopener noreferrer">
                                <FaTimes size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 pt-4 text-center text-white">
                <p>© 2025 Smart Global. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
