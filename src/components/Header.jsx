import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import InquiryModal from './InquiryModal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Industries', path: '/industries' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Awards', path: '/awards' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md py-4 border-b border-dark-700' : 'bg-transparent py-6'}`}>
                <div className="container-custom flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="block">
                        <img
                            src="/logo.png"
                            alt="Arrow Laser Machine"
                            className="h-12 w-auto object-contain rounded-sm px-2 py-1"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative text-sm font-medium uppercase tracking-wider text-text-body hover:text-white transition-colors group"
                            >
                                {link.name}
                                <motion.span
                                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    initial={false}
                                />
                                {/* Laser Underline Effect on Hover */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 overflow-hidden">
                                    <span className="absolute inset-0 bg-white/50 blur-[2px] animate-pulse" />
                                </span>
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsInquiryOpen(true)}
                            className="btn-primary py-2 px-6 text-sm uppercase tracking-widest leading-none"
                        >
                            Enquire Now
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-dark-800 border-b border-dark-700"
                        >
                            <div className="container-custom py-8 flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-semibold uppercase tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-text-body'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsInquiryOpen(true);
                                    }}
                                    className="btn-primary text-center"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <InquiryModal
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
            />
        </>
    );
};

export default Header;

