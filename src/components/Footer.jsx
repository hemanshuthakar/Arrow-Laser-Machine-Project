import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { products } from '../data/products';

const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-dark-700 pt-20 pb-10 overflow-hidden relative">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
                    {/* Brand section */}
                    <div>
                        <Link to="/" className="inline-block mb-8">
                            <img
                                src="/logo.png"
                                alt="Arrow Laser Machine"
                                className="h-14 w-auto object-contain rounded-sm px-2 py-1"
                            />
                        </Link>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            Arrow Laser Machine is a manufacturer, importer, and supplier of advanced laser marking, engraving, cutting, welding, and cleaning solutions. Established in 2022.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, url: 'https://www.facebook.com/arrowlaser/' },
                                { Icon: Instagram, url: 'https://www.instagram.com/arrow.laser/' },
                                { Icon: Youtube, url: 'https://www.youtube.com/@Arrowlasermachine' },
                                { Icon: FaWhatsapp, url: 'https://whatsapp.com/channel/0029VbAKVL55q08kxVMj890Z' }
                            ].map(({ Icon, url }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, textShadow: "0 0 8px rgba(245,158,11,0.8)" }}
                                    className="w-10 h-10 rounded-sm bg-dark-800 border border-dark-700 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors duration-300"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-8 uppercase tracking-widest border-l-2 border-primary pl-4">Company</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Products', 'Industries', 'Gallery', 'Awards', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '')}`}
                                        className="text-text-muted hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Machines */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-8 uppercase tracking-widest border-l-2 border-primary pl-4">Our Machines</h4>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.id}>
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="text-text-muted hover:text-white transition-colors flex items-center group text-sm leading-snug"
                                    >
                                        <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-8 uppercase tracking-widest border-l-2 border-primary pl-4">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span className="text-text-muted">38, Sardar Patel Industrial Estate, Odhav Ring Road, Ahmedabad – 382415</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span className="text-text-muted">+91 99099 13488 / +91 91044 01022</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <div className="flex flex-col">
                                    <span className="text-text-muted text-sm">arrowlasermachine@gmail.com</span>
                                    <span className="text-text-muted text-sm">info@arrowlasermachine.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-text-muted">
                    <p>© {new Date().getFullYear()} Arrow Laser Machine. All Rights Reserved.</p>
                    <div className="flex space-x-8">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Decorative Laser Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </footer>
    );
};

export default Footer;
