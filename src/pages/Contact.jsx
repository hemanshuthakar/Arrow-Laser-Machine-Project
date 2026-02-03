import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactInfo = () => {
    const contactDetails = [
        { icon: MapPin, title: 'Headquarters', content: '123 Industrial Park, Sector 4, Manufacturing Hub, India - 380001' },
        { icon: Phone, title: 'Business Inquiries', content: '+91 98765 43210 / +91 76543 21098' },
        { icon: Mail, title: 'Email Address', content: 'sales@arrowlaser.com / support@arrowlaser.com' },
        { icon: Clock, title: 'Operation Hours', content: 'Mon - Sat: 09:00 AM - 07:00 PM (IST)' },
        { icon: Globe, title: 'Global Presence', content: 'Offices in USA, Germany, Dubai, and Vietnam' },
    ];

    return (
        <div className="space-y-12">
            <div>
                <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Reach Us</span>
                <h2 className="text-4xl md:text-5xl mb-8">Contact Our Global <br /> Sales Department</h2>
                <p className="text-text-muted leading-relaxed max-w-lg mb-10">
                    Whether you need a technical quote, a machine demonstration, or after-sales support, our team is here to help you 24/7.
                </p>
            </div>

            <div className="space-y-8">
                {contactDetails.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-6"
                    >
                        <div className="w-12 h-12 bg-dark-800 border border-dark-700 rounded-sm flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                            <item.icon className="text-primary" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">{item.title}</h4>
                            <p className="text-text-muted leading-relaxed">{item.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-dark-700 p-8 md:p-12 rounded-sm relative overflow-hidden"
        >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 pointer-events-none" />

            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Industry Email</label>
                        <input
                            type="email"
                            className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                            placeholder="company@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Phone Number</label>
                        <input
                            type="text"
                            className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                            placeholder="+91"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Machine Category</label>
                        <select className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-text-muted focus:outline-none focus:border-primary transition-colors text-sm appearance-none">
                            <option>Select Machinery</option>
                            <option>Laser 3D Cutting</option>
                            <option>Laser Marking Systems</option>
                            <option>Laser Cleaning Systems</option>
                            <option>Handheld Laser Welding</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-muted">Project Details</label>
                    <textarea
                        rows="4"
                        className="w-full bg-dark-900 border border-dark-700 py-4 px-5 text-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                        placeholder="Tell us about your production requirements..."
                    ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-3 group py-4">
                    <span className="uppercase tracking-[0.2em] font-bold">SEND INQUIRY</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-[10px] text-text-muted text-center pt-4 tracking-widest uppercase">
                    Guaranteed response within 12 business hours.
                </p>
            </form>
        </motion.div>
    );
};

const GoogleMap = () => {
    return (
        <section className="h-[500px] w-full bg-dark-800 border-t border-dark-700 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all">
                        <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Global HQ Location</h3>
                    <p className="text-text-muted font-mono text-xs">Lat: 23.0225° N, Long: 72.5714° E</p>
                </div>

                {/* Mock Map Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none filter grayscale invert contrast-125">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(11, 15, 20, 0.8), rgba(11, 15, 20, 0.8)), url("https://www.google.com/maps/vt/pb=!1m4!1m3!1i10!2i545!3i385!2m3!1e0!2sm!3i407105151!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1f2!2m1!1e44?key=YOUR_API_KEY")' }} />
                </div>
            </div>

            {/* Laser frames */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/20" />
        </section>
    );
};

const Contact = () => {
    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Connect With Us"
                subtitle="Global offices and technical support units ready to assist your industrial journey."
                breadcrumb="Contact"
            />

            <div className="section-padding container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

            <GoogleMap />
        </div>
    );
};

export default Contact;
