import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactInfo = () => {
    const infoItems = [
        {
            icon: Phone,
            title: 'Call Us',
            details: [
                'Mr. Pankaj Diwkaar (Director): +91 99099 13488',
                'Sales Manager: +91 91044 01022'
            ],
            link: 'tel:+919909913488'
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: ['arrowlasermachine@gmail.com', 'info@arrowlasermachine.com'],
            link: 'mailto:arrowlasermachine@gmail.com'
        },
        {
            icon: MapPin,
            title: 'Our Office',
            details: [
                'Arrow Laser Machine',
                '38, Sardar Patel Industrial Estate,',
                'Odhav Ring Road, Ahmedabad – 382415'
            ],
            link: 'https://goo.gl/maps/xyz' // User should provide actual map link
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {infoItems.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 text-center group"
                >
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-dark-900 transition-all duration-300">
                        <item.icon size={28} className="text-primary group-hover:text-dark-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                        <p key={idx} className="text-text-muted text-sm font-mono">{detail}</p>
                    ))}
                    <a href={item.link} className="mt-4 inline-block text-primary text-xs font-bold uppercase tracking-wider hover:underline">Get in touch</a>
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
        { icon: MessageCircle, name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbAKVL55q08kxVMj890Z', color: 'hover:text-green-500' }
    ];

    return (
        <div className="mb-20 text-center">
            <h3 className="text-2xl font-bold mb-10 uppercase tracking-widest text-white">Follow Our Social Journey</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className={`w-16 h-16 bg-dark-800 border border-dark-700 flex items-center justify-center rounded-sm transition-all duration-300 ${social.color} hover:border-primary group`}
                    >
                        <social.icon size={24} className="group-hover:animate-pulse" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-dark-700 p-8 md:p-12 rounded-sm relative overflow-hidden max-w-3xl mx-auto"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 pointer-events-none" />

            <div className="text-center mb-10">
                <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">Send Us a Message</h2>
                <p className="text-text-muted text-sm max-w-md mx-auto">
                    Fill out the form below and our technical team will get back to you within 12 business hours.
                </p>
            </div>

            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                            placeholder="email@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Phone Number</label>
                    <input
                        type="text"
                        className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="+91"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Message</label>
                    <textarea
                        rows="4"
                        className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-3 group py-4">
                    <span className="uppercase tracking-[0.2em] font-bold">SEND MESSAGE</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
};

const GoogleMap = () => {
    return (
        <section className="w-full h-[500px] bg-dark-800 border-t border-dark-700 mt-20 grayscale invert opacity-50 hover:opacity-100 transition-opacity duration-700">
            <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4635650116!2d72.6713!3d23.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a2df856991%3A0x8670564e9a089069!2sOdhav%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1706970000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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

            <div className="section-padding container-custom pb-0">
                <ContactInfo />
                <SocialLinks />
                <ContactForm />
            </div>

            <GoogleMap />
        </div>
    );
};

export default Contact;
