
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, MessageSquare, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const InquiryModal = ({ isOpen, onClose, product = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        productOfInterest: '',
        machineCategory: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    useEffect(() => {
        if (isOpen) {
            // Reset form when modal opens
            setFormData(prev => ({
                ...prev,
                productOfInterest: product ? product.name : '',
                machineCategory: product ? `${product.category} Series` : '',
                message: ''
            }));
            setStatus('idle');
        }
    }, [isOpen, product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = 'service_n41gnlr';
        const templateId = 'template_m42zf3f';
        const publicKey = '92E8uTooy6_ax10oV';

        // Construct template parameters
        const templateParams = {
            to_name: 'Arrow Laser Team',
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            product_name: formData.productOfInterest,
            product_category: formData.machineCategory,
            message: formData.message,
            // Include full product details if available
            product_details: product ? `
                ID: ${product.id}
                Name: ${product.name}
                Category: ${product.category}
                Tags: ${product.tags ? product.tags.join(', ') : 'N/A'}
            ` : 'General Inquiry'
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 3000);
            }, (err) => {
                console.log('FAILED...', err);
                setStatus('error');
            });
    };

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
                            {product ? 'Product Inquiry' : 'Contact Us'}
                        </h3>
                        <button onClick={onClose} className="text-text-muted hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                                >
                                    <CheckCircle size={40} className="text-green-500" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h3>
                                <p className="text-text-muted max-w-xs">Thank you for your interest. Our team will get back to you shortly.</p>
                            </div>
                        ) : (
                            <>
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
                                            <div className="absolute top-1 right-1 z-20 w-8 h-8 pointer-events-none">
                                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]" />
                                            </div>
                                        </div>
                                        <div className="relative z-10">
                                            <span className="block text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Inquiry for:</span>
                                            <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-1 leading-none">{product.name}</h4>
                                            <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold">{product.category} Series Machinery</p>
                                        </div>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
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
                                                    name="productOfInterest"
                                                    value={formData.productOfInterest}
                                                    onChange={handleChange}
                                                    className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                                                    placeholder="Machine model name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Machine Category</label>
                                                <select
                                                    name="machineCategory"
                                                    value={formData.machineCategory}
                                                    onChange={handleChange}
                                                    className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-text-muted focus:outline-none focus:border-primary transition-colors text-sm appearance-none"
                                                >
                                                    <option value="">Select Machinery</option>
                                                    <option value="Laser Marking Systems">Laser Marking Systems</option>
                                                    <option value="Laser Cutting & Engraving">Laser Cutting & Engraving</option>
                                                    <option value="Jewellery Laser Solutions">Jewellery Laser Solutions</option>
                                                    <option value="Laser Welding & Cleaning">Laser Welding & Cleaning Systems</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Additional Information</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-dark-900 border border-dark-700 py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center space-x-2 text-red-500 text-sm">
                                            <AlertCircle size={16} />
                                            <span>Something went wrong. Please try again.</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="btn-primary w-full flex items-center justify-center space-x-3 group py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                <span className="uppercase tracking-[0.2em] font-bold">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="uppercase tracking-[0.2em] font-bold">Submit Inquiry</span>
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}

                        <div className="mt-8 flex flex-wrap justify-center gap-6 pt-6 border-t border-dark-700">
                            <a href="tel:+919909913488" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
                                <Phone size={14} />
                                <span>+91 99099 13488</span>
                            </a>
                            <a href="https://wa.me/919909913488" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
                                <FaWhatsapp size={14} />
                                <span>WhatsApp</span>
                            </a>
                            <a href="mailto:arrowlasermachine@gmail.com" className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors text-xs font-mono">
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
