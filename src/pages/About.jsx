import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldAlert, Award, ShieldCheck, CheckCircle, FileCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const MissionVision = () => {
    const values = [
        {
            title: 'Our Mission',
            icon: Target,
            desc: 'To empower global manufacturing with the most precise, reliable, and energy-efficient laser solutions that drive industrial growth and innovation.',
            color: 'bg-primary/5'
        },
        {
            title: 'Our Vision',
            icon: Eye,
            desc: 'To become the global benchmark for laser technology excellence, setting new standards in engineering precision and customer-centric support.',
            color: 'bg-secondary/5'
        },
        {
            title: 'Core Values',
            icon: ShieldAlert,
            desc: 'Integrity in engineering, transparency in business, and an unwavering commitment to the safety and success of our clients.',
            color: 'bg-dark-700/50'
        }
    ];

    return (
        <section className="section-padding bg-dark-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${item.color} p-12 rounded-sm border border-dark-700 hover:border-primary/50 transition-all duration-500 group`}
                        >
                            <div className="w-16 h-16 border border-dark-700 flex items-center justify-center rounded-sm mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                <item.icon className="text-primary group-hover:text-dark-900" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Timeline = () => {
    const events = [
        { year: '2005', title: 'Foundation', desc: 'Arrow Laser established its first R&D facility in India.' },
        { year: '2010', title: 'Global Export', desc: 'Expanded operations to Middle East and South East Asia.' },
        { year: '2015', title: 'Fiber Innovation', desc: 'Launched the first proprietary High-Power Fiber Laser Cutter.' },
        { year: '2020', title: 'AI Integration', desc: 'Introduced AI-driven surface profiling and diagnostic software.' },
        { year: '2024', title: 'Global Recognition', desc: 'Awarded as the leading industrial laser exporter in the region.' },
    ];

    return (
        <section className="section-padding bg-dark-800 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Our Journey</span>
                    <h2 className="text-4xl md:text-5xl">Milestones of Progress</h2>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dark-700 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-24 relative">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                                    <div className={`p-8 glass-card border-dark-700 border-l-4 ${i % 2 === 0 ? 'md:text-right border-l-0 md:border-r-4' : 'text-left border-primary'} border-primary`}>
                                        <span className="text-primary font-mono text-xl font-bold mb-2 block">{event.year}</span>
                                        <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                                        <p className="text-text-muted leading-relaxed">{event.desc}</p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="relative z-10 w-12 h-12 flex items-center justify-center my-8 md:my-0">
                                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(245,158,11,1)]" />
                                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                                </div>

                                {/* Spacer */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Team = () => {
    return (
        <section className="section-padding bg-dark-900 border-t border-dark-700">
            <div className="container-custom text-center">
                <h2 className="text-4xl font-bold mb-16">Leadership in Engineering</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div key={i} whileHover={{ y: -10 }} className="glass-card p-8 rounded-sm group">
                            <div className="w-full aspect-square bg-dark-800 rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all border border-dark-700 overflow-hidden">
                                <img
                                    src="/assets/images/precision-engineering.png"
                                    alt="Engineering Leadership"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Executive Director</h3>
                            <p className="text-primary font-mono text-xs uppercase tracking-widest">Board of Engineering</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Certifications = () => {
    const certs = [
        { title: 'ISO 9001:2015', label: 'Quality Management', icon: ShieldCheck },
        { title: 'CE Mark', label: 'Safety Compliance', icon: CheckCircle },
        { title: 'TUV Certified', label: 'Engineering Excellence', icon: Award },
        { title: 'SGS Audited', label: 'Factory Standard', icon: FileCheck },
    ];

    return (
        <section className="section-padding bg-dark-900">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-text-muted">Global Recognition & Standards</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 border border-dark-700 rounded-sm flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                                <cert.icon size={36} className="text-text-muted group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-white font-bold mb-1">{cert.title}</h4>
                            <p className="text-xs text-text-muted uppercase tracking-wider">{cert.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <div className="bg-dark-900">
            <PageHero
                title="Our Industrial Legacy"
                subtitle="Leading the way in laser technology innovation for over two decades."
                breadcrumb="About Us"
            />
            <MissionVision />
            <Timeline />
            <Team />
            <Certifications />
        </div>
    );
};

export default About;
