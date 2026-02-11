import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const buttons = [
        { icon: FaWhatsapp, color: 'bg-[#25D366]', label: 'WhatsApp', href: 'https://wa.me/919909913488' },
        { icon: Phone, color: 'bg-primary', label: 'Call', href: 'tel:+919909913488' },
        { icon: Mail, color: 'bg-secondary', label: 'Email', href: 'mailto:arrowlasermachine@gmail.com' },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[40] flex flex-col items-center space-y-4">
            <React.Suspense fallback={null}>
                {/* Scroll to top */}
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="bg-dark-800 text-white p-3 rounded-full border border-dark-700 hover:border-primary hover:text-primary transition-all duration-300 shadow-2xl relative group"
                    style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
                >
                    <ChevronUp size={22} />
                    <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-dark-700 pointer-events-none uppercase tracking-widest">
                        Back to Top
                    </span>
                </motion.button>

                {buttons.map((btn, index) => (
                    <motion.a
                        key={index}
                        href={btn.href}
                        target={btn.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={btn.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, scale: 0, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4, type: 'spring' }}
                        whileHover={{ scale: 1.1, translateY: -2 }}
                        className={`${btn.color} text-white p-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-shadow duration-300 relative group flex items-center justify-center`}
                    >
                        <btn.icon size={22} />
                        {/* Label Tooltip */}
                        <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-dark-700 pointer-events-none uppercase tracking-widest">
                            {btn.label}
                        </span>
                    </motion.a>
                ))}
            </React.Suspense>
        </div>
    );
};

export default FloatingButtons;
