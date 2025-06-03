const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Logo & Tagline */}
                <div>
                    <h1 className="text-3xl font-bold text-orange-800">PrinVick</h1>
                    <p className="mt-2 text-sm text-gray-400">T-Shirts for the Modern Man</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
                        <li><a href="/shopnow" className="hover:text-orange-500 transition">Shop Now</a></li>
                        <li><a href="#categories" className="hover:text-orange-500 transition">Categories</a></li>
                        <li><a href="#itemlist" className="hover:text-orange-500 transition">Item List</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
                    <ul className="space-y-1 text-sm">
                        <li>Email: info@prinvick.com</li>
                        <li>Phone: +91 9876543210</li>
                        <li>Address: New Delhi, India</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-orange-500 transition">Facebook</a>
                        <a href="#" className="hover:text-orange-500 transition">Instagram</a>
                        <a href="#" className="hover:text-orange-500 transition">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} PrinVick. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
