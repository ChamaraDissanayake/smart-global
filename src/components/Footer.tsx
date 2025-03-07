import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-12 text-white bg-gray-800">
            <div className="container px-8 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Footer Section 1 */}
                    <div>
                        <h4 className="mb-4 text-xl font-semibold">Smart Global Hub</h4>
                        <p className="mb-4 text-lg">Alfutaim Office Tower Day to Day building</p>
                        <p className="mb-4 text-lg">1st floor - Office 102 Smart Hub HQ</p>
                        <p className="mb-4 text-lg">Phone: +971 50 440 6565</p>
                        <p className="text-lg">
                            Email: <a href="mailto:info@example.com" className="text-blue-400">info@example.com</a>
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
                </div>

                {/* Footer Social Icons */}
                <div className="mt-6 text-center">
                    <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-blue-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500">
                            <FaTimes size={24} />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-400">
                        Driven by innovation, we pioneer progress and serve as trusted partners in every client's digital journey. Based in Dubai, our dedication spearheads digital transformation locally and globally.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
