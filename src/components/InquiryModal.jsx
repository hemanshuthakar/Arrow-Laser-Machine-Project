
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, MessageSquare, Mail } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, product = null }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl bg-dark-800 border border-dark-700 rounded-sm overflow-hidden"
                >
                    <div className="flex justify-between items-center p-6 border-b border-dark-700 bg-dark-900/50">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                            Product Inquiry
                        </h3>
                        <button onClick={onClose} className="text-text-muted hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                        {product && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center space-x-6 mb-10 p-5 bg-gradient-to-r from-dark-900 to-dark-900/50 border border-dark-700 rounded-sm relative overflow-hidden group"
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-700" />

                                <div className="w-20 h-20 shrink-0 bg-dark-800 border border-dark-700 rounded-sm overflow-hidden relative z-10">
                                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10">
                                    <span className="block text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Inquiry for:</span>
                                    <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-1 leading-none">{product.name}</h4>
                                    <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold">{product.category} Series Machinery</p>
                                </div>
                            </motion.div>
                        )}

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                        placeholder="+91"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                    placeholder="email@example.com"
                                />
                            </div>

                            {!product && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Product of Interest</label>
                                        <input
                                            type="text"
                                            className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                            placeholder="Machine model name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Machine Category</label>
                                        <select
                                            className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-text-muted focus:outline-none focus:border-primary transition-colors text-sm appearance-none"
                                        >
                                            <option>Select Machinery</option>
                                            <option>Laser 3D Cutting Series</option>
                                            <option>Laser Marking Systems Series</option>
                                            <option>Laser Cleaning Systems Series</option>
                                            <option>Handheld Laser Welding Series</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Additional Information</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-3 group py-4">
                                <span className="uppercase tracking-[0.2em] font-bold">Submit Inquiry</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 pt-6 border-t border-dark-700">
                            <a href="tel:+919876543210" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
                                <Phone size={14} />
                                <span>+91 98765 43210</span>
                            </a>
                            <a href="https://wa.me/919876543210" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
                                <MessageSquare size={14} />
                                <span>WhatsApp</span>
                            </a>
                            <a href="mailto:info@arrowlaser.com" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
                                <Mail size={14} />
                                <span>Email Us</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default InquiryModal;
