import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, BookOpen, Clock, ShieldCheck, Headset, Globe, Shield } from 'lucide-react';
import PageHero from '../components/PageHero';

const ServiceCards = () => {
    const services = [
        {
            title: 'Expert Installation',
            desc: 'On-site installation and calibration by certified engineers to ensure peak machine performance from day one.',
            icon: Wrench
        },
        {
            title: 'Operator Training',
            desc: 'Comprehensive onsite and remote training programs for your staff on machine operation and software optimization.',
            icon: BookOpen
        },
        {
            title: '24/7 Remote Diagnostics',
            desc: 'Instant remote troubleshooting via our ArrowConnect platform to minimize downtime and resolve issues fast.',
            icon: Clock
        },
        {
            title: 'Annual Maintenance',
            desc: 'Scheduled preventative maintenance programs including optical alignment, cooling system checks, and parts replacement.',
            icon: ShieldCheck
        }
    ];

    return (
        <section className="section-padding bg-dark-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card group p-10 rounded-sm border-l-4 border-l-dark-700 hover:border-l-primary transition-all duration-300"
                        >
                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-14 h-14 bg-dark-700 flex items-center justify-center rounded-sm text-primary group-hover:bg-primary group-hover:text-dark-900 transition-all duration-300">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            </div>
                            <p className="text-text-muted leading-relaxed text-lg">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SupportSection = () => {
    return (
        <section className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="bg-dark-900 border border-dark-700 p-12 lg:p-20 rounded-sm relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="lg:w-1/2">
                            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Global Support Network</span>
                            <h2 className="text-4xl font-bold mb-8">Ready to Support Your <br /> Factory 24 Hours a Day</h2>
                            <p className="text-text-muted text-lg leading-relaxed mb-10">
                                Our global network of service centers and authorized distributors ensures that your Arrow Laser machine maintains peak productivity over its entire lifecycle.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center space-x-3">
                                    <Headset className="text-primary" />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">Remote Desk</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Globe className="text-primary" />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">Global Field Units</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="text-primary" />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">Genuine Parts</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-dark-800 p-8 border border-dark-700 rounded-sm">
                                <h4 className="text-white font-bold mb-6 flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span>LIVE SERVICE CAPACITY</span>
                                </h4>
                                <div className="space-y-6">
                                    {['Technical Inquiry', 'Spare Parts Request', 'Training Schedule'].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-xs font-mono uppercase text-text-muted">
                                                <span>{item}</span>
                                                <span>98% Efficiency</span>
                                            </div>
                                            <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '98%' }}
                                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Laser Frame */}
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Industrial Support"
                subtitle="Uninterrupted production through expert technical support, real-time diagnostics, and global service availability."
                breadcrumb="Services"
            />
            <ServiceCards />
            <SupportSection />
        </div>
    );
};

export default Services;
