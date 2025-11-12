import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import logo from '../../assets/logo.svg';
import AppStore from '../../assets/app-store.jpg';
import PlayStore from '../../assets/google-play.jpg';
import PaymentMethod from '../../assets/payment-method.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700">
            {/* Top Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* Company Info */}
                <div className="flex flex-col">
                    <img src={logo} alt="Nest Logo" className="w-36 sm:w-44 mb-3" />
                    <p className="text-sm mb-4">Awesome grocery store website template</p>
                    <ul className="text-sm space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FiMapPin className="text-green-600 mt-1" />
                            <span><strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiPhoneCall className="text-green-600 mt-1" />
                            <span><strong>Call Us:</strong> (+91) - 540-025-124553</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiMail className="text-green-600 mt-1" />
                            <span><strong>Email:</strong> sale@Nest.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiClock className="text-green-600 mt-1" />
                            <span><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</span>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-bold mb-3 text-[#253D4E]">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-bold mb-3 text-[#253D4E]">Account</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Track My Order</li>
                        <li>Help Ticket</li>
                        <li>Compare Products</li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="font-bold mb-3 text-[#253D4E]">Corporate</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Farm Business</li>
                        <li>Our Suppliers</li>
                        <li>Accessibility</li>
                        <li>Promotions</li>
                    </ul>
                </div>

                {/* Install App */}
                <div>
                    <h3 className="font-bold mb-3 text-[#253D4E]">Install App</h3>
                    <p className="text-sm mb-3">From App Store or Google Play</p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <img src={AppStore} alt="App Store" className="w-24 sm:w-28" />
                        <img src={PlayStore} alt="Play Store" className="w-24 sm:w-28" />
                    </div>
                    <p className="text-sm mb-2">Secured Payment Gateways</p>
                    <img src={PaymentMethod} alt="Payment Methods" className="w-32 sm:w-40" />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 py-4 text-sm text-gray-500">
                <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    {/* Left Text */}
                    <p className="text-center md:text-left">
                        © 2024 <span className="font-bold text-green-600">Nest</span> - HTML Ecommerce Template. All rights reserved.
                    </p>

                    {/* Phone Numbers */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-2">
                            <FiPhoneCall className="text-green-600 text-xl" />
                            <div>
                                <p className="text-green-600 font-bold">1900 - 6666</p>
                                <p className="text-xs text-gray-500">Working 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiPhoneCall className="text-green-600 text-xl" />
                            <div>
                                <p className="text-green-600 font-bold">1900 - 8888</p>
                                <p className="text-xs text-gray-500">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-3 md:mt-0">
                        <p>Follow Us</p>
                        <FaFacebookF className="text-green-600 hover:text-green-700 cursor-pointer" />
                        <FaTwitter className="text-green-600 hover:text-green-700 cursor-pointer" />
                        <FaInstagram className="text-green-600 hover:text-green-700 cursor-pointer" />
                        <FaPinterest className="text-green-600 hover:text-green-700 cursor-pointer" />
                        <FaYoutube className="text-green-600 hover:text-green-700 cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
