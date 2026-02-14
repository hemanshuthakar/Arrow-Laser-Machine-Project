import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const ContactInfo = () => {
    const infoItems = [
        {
            icon: Phone,
            title: 'Call Us',
            details: [
                { label: 'Mr. Pankaj Diwakar (Director)', value: '+91 99099 13488' },
                { label: 'Sales Manager', value: '+91 91044 01022' }
            ],
            link: 'tel:+919909913488'
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: [
                { label: 'Primary', value: 'arrowlasermachine@gmail.com' },
                { label: 'Inquiry', value: 'info@arrowlasermachine.com' }
            ],
            link: 'mailto:arrowlasermachine@gmail.com'
        },
        {
            icon: MapPin,
            title: 'Our Office',
            details: [
                { label: 'Address', value: '38, Sardar Patel Ind. Estate, Odhav Ring Road, Ahmedabad – 382415' }
            ],
            link: 'https://maps.app.goo.gl/wYFrznd9c3fDqJ1ZA'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {infoItems.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card p-6 sm:p-8 flex flex-col items-center text-center group h-full border-dark-700/50 hover:border-primary/40 relative ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark-900 transition-all duration-300">
                        <item.icon size={24} className="text-primary group-hover:text-dark-900" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-widest leading-tight">{item.title}</h3>
                    <div className="space-y-6 w-full flex-grow max-w-sm mx-auto">
                        {item.details.map((detail, idx) => (
                            <div key={idx} className="flex flex-col space-y-2">
                                <span className="text-[10px] text-primary/70 uppercase tracking-[0.2em] font-bold">{detail.label}</span>
                                <span className="text-text-muted text-xs sm:text-sm font-medium tracking-tight px-2 break-words">{detail.value}</span>
                            </div>
                        ))}
                    </div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-primary/30 pb-1">
                        Get in touch
                    </a>
                </motion.div>
            ))}
        </div>
    );
};

const SocialLinks = () => {
    const socials = [
        { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/arrowlaser/', color: 'hover:text-blue-500' },
        { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/arrow.laser/', color: 'hover:text-pink-500' },
        { icon: Youtube, name: 'YouTube', url: 'https://www.youtube.com/@Arrowlasermachine', color: 'hover:text-red-500' },
        { icon: FaWhatsapp, name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbAKVL55q08kxVMj890Z', color: 'hover:text-green-500' }
    ];

    return (
        <div className="mb-24 text-center px-4">
            <div className="inline-block relative mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">Follow Our Social Journey</h3>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-primary"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {socials.map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8, scale: 1.05 }}
                        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-dark-800 border border-dark-700 flex items-center justify-center rounded-sm transition-all duration-300 ${social.color} hover:border-primary group relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <social.icon size={24} className="relative z-10 group-hover:scale-110 transition-transform sm:size-[28px]" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <section className="py-8 sm:py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-dark-800 border border-dark-700 p-6 sm:p-10 md:p-12 lg:p-16 rounded-sm relative overflow-hidden max-w-4xl mx-auto shadow-2xl"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 pointer-events-none -rotate-45 translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 pointer-events-none -rotate-45 -translate-x-16 translate-y-16" />

                <div className="text-center mb-10 sm:mb-12 relative z-10">
                    <span className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Inquiry Form</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest">Send Us a Message</h2>
                    <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
                        Have a specific requirement? Fill out the form below and our technical experts will provide a customized solution within 12 business hours.
                    </p>
                </div>

                <form className="space-y-6 sm:space-y-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-dark-900/50 border border-dark-700 py-3 sm:py-4 px-5 sm:px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 text-sm focus:bg-dark-900"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-dark-900/50 border border-dark-700 py-3 sm:py-4 px-5 sm:px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 text-sm focus:bg-dark-900"
                                placeholder="email@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">Phone Number</label>
                            <input
                                type="text"
                                className="w-full bg-dark-900/50 border border-dark-700 py-3 sm:py-4 px-5 sm:px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 text-sm focus:bg-dark-900"
                                placeholder="+91"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">Subject</label>
                            <div className="relative">
                                <select className="w-full bg-dark-900/50 border border-dark-700 py-3 sm:py-4 px-5 sm:px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 text-sm focus:bg-dark-900 appearance-none">
                                    <option>Product Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Sales Question</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-t-4 border-l-4 border-r-4 border-t-primary border-l-transparent border-r-transparent w-0 h-0" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">Your Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-dark-900/50 border border-dark-700 py-3 sm:py-4 px-5 sm:px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 text-sm resize-none focus:bg-dark-900"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-4 group py-4 sm:py-5 shadow-lg shadow-primary/10 transition-all duration-500">
                        <span className="uppercase tracking-[0.3em] font-extrabold text-xs sm:text-sm text-dark-900">SEND MESSAGE</span>
                        <Send size={18} className="sm:size-[20px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

const GoogleMap = () => {
    return (
        <section className="w-full h-[350px] sm:h-[450px] md:h-[600px] bg-dark-800 border-t border-dark-700 mt-16 sm:mt-20 relative transition-all duration-1000 overflow-hidden">
            <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.552073472873!2d72.6534294!3d23.0278835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87240098ab420609%3A0x3991436ead352acb!2sArrow%20Laser!5e0!3m2!1sen!2sin!4v1770982847842!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
            ></iframe>
        </section>
    );
};

const Contact = () => {
    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Connect With Us"
                subtitle="Reach out to Arrow Laser Machine for expert advice and technical support."
                breadcrumb="Contact"
            />

            <div className="section-padding container-custom px-4 sm:px-6 lg:px-8">
                <ContactInfo />
                <SocialLinks />
                <ContactForm />
            </div>

            <GoogleMap />
        </div>
    );
};

export default Contact;
