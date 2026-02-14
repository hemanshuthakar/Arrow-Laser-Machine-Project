import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldAlert, Zap, Layers, ShieldCheck, Timer, BadgeIndianRupee, CheckCircle2, User } from 'lucide-react';
import PageHero from '../components/PageHero';

import indPackaging from '../assets/images/about_us_banner1.png';
import ownerImg from '../assets/Owner-2.jpeg';

const MissionVision = () => {
    const values = [
        {
            title: 'Our Mission',
            icon: Target,
            desc: 'To deliver exceptional laser solutions that empower our clients, enhance their production capabilities, and elevate their brand presence through cutting-edge technology and unparalleled customer service.',
            color: 'bg-primary/5'
        },
        {
            title: 'Our Vision',
            icon: Eye,
            desc: 'We envision a future where our innovative laser technology sets the standard for quality and efficiency in marking and engraving solutions across the globe.',
            color: 'bg-secondary/5'
        },
        {
            title: 'Quality Assurance',
            icon: ShieldAlert,
            desc: 'Each machine undergoes strict quality checks to ensure accuracy, performance, and long-term reliability. We prioritize customer satisfaction with eco-friendly solutions that exceed industry standards.',
            color: 'bg-dark-700/50'
        }
    ];

    return (
        <section className="pt-8 lg:pt-12 pb-16 lg:pb-24 bg-dark-900 border-b border-dark-700/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${item.color} p-8 md:p-12 rounded-sm border border-dark-700 hover:border-primary/50 transition-all duration-500 group h-full`}
                        >
                            <div className="w-16 h-16 border border-dark-700 flex items-center justify-center rounded-sm mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300 mx-auto sm:mx-0">
                                <item.icon className="text-primary group-hover:text-dark-900" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors text-center sm:text-left">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed text-center sm:text-left">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Reliable Performance',
            icon: Shield,
            desc: 'Built with premium components from Germany and Japan for continuous industrial use.'
        },
        {
            title: 'Precision at Velocity',
            icon: Activity,
            desc: 'Ultra-stable gantry systems ensuring micron-level accuracy at high processing speeds.'
        },
        {
            title: 'Certified Quality',
            icon: Award,
            desc: 'TUV and CE certified machines, meeting the most stringent international safety standards.'
        },
        {
            title: '24/7 Support & Service',
            icon: ShieldCheck,
            desc: 'Dedicated technical assistance to ensure seamless operation.'
        },
        {
            title: 'Easy and Affordable',
            icon: BadgeIndianRupee,
            desc: 'The best combination of price and performance in the industry.'
        }
    ];

    return (
        <section className="section-padding bg-dark-800 relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12 px-4">
                    <span className="text-primary font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Engineered Excellence</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Choose Arrow Laser Machine?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 sm:p-10 border-dark-700 hover:border-primary/30 transition-all group lg:min-h-[280px]"
                        >
                            <feature.icon className="text-primary mb-6" size={32} sm={40} />
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-text-muted leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section className="section-padding bg-dark-900 overflow-hidden relative">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 sm:px-0"
                    >
                        <span className="text-primary font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">About Arrow Laser Machine</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 leading-tight">Leading Choice for Industrial Laser Solutions</h2>
                        <p className="text-text-body mb-6 text-sm sm:text-base leading-relaxed">
                            Welcome to Arrow Laser Machine, your trusted Manufacturer, Importer and Supplier of a wide range of Fiber Laser Marking Machines, Jewellery Laser Machines, Laser Engraving & Cutting Machines, Fiber Laser Sources, and Laser Marking Machine Parts. Established in 2022 in Ahmedabad, Gujarat, India, we specialize in precision laser marking, engraving, and etching solutions tailored for a wide range of industries.
                        </p>
                        <p className="text-text-body mb-6 text-sm sm:text-base leading-relaxed">
                            Our state-of-the-art laser machines are designed for precision marking and engraving on various materials, including metals, plastics, ceramics, glass, wood, and more. Leveraging cutting-edge laser technology, we deliver sharp, permanent, and high-quality results—whether you need to mark logos, serial numbers, barcodes, QR codes, or intricate designs.
                        </p>
                        <p className="text-text-body mb-6 text-sm sm:text-base leading-relaxed italic border-l-2 border-primary pl-4 sm:pl-6 bg-primary/2 py-2">
                            Customer satisfaction is at the core of our operations. We take pride in offering eco-friendly laser marking solutions that exceed industry standards. At Arrow Laser, we combine reliability and innovation to provide permanent marking solutions that you can trust.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'High-speed and precise marking',
                                'Long-lasting, maintenance-free',
                                'Works on metals, plastics, ceramics',
                                'Non-contact, non-damaging process',
                                'Low power consumption',
                                'High efficiency'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-text-muted">
                                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-dark-800 border border-dark-700 p-2 rounded-sm overflow-hidden group">
                            <img
                                src={indPackaging}
                                alt="Arrow Laser Machine Facility"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 border border-primary/20 backdrop-blur-sm -z-10 rounded-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Leadership = () => {
    const leaders = [
        {
            name: 'Mr. Pankaj Diwkaar',
            role: 'Director',
            phone: '+91 99099 13488',
            image: ownerImg
        },
        {
            name: 'Mr. Sales Manager',
            role: 'Sales Manager',
            phone: '+91 91044 01022',
            image: null
        }
    ];

    return (
        <section className="section-padding bg-dark-800 border-t border-dark-700">
            <div className="container-custom text-center">
                <h2 className="text-4xl font-bold mb-12 uppercase tracking-widest text-white">Leadership</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 rounded-sm group border-primary/20 max-w-sm w-full"
                        >
                            <div className="w-full aspect-square bg-dark-900 rounded-sm mb-6 transition-all border border-dark-700 overflow-hidden relative flex items-center justify-center">
                                {leader.image ? (
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User size={64} className="text-dark-700 group-hover:text-primary transition-colors duration-500" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-40" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                            <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">{leader.role}</p>
                            <p className="text-text-muted mt-4 text-sm font-mono">{leader.phone}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Industries = () => {
    const industries = [
        'Steel Utensils', 'Kitchenware', 'Kitchen Appliances', 'Jewellery', 'Acrylic & Laminates', 'Advertising', 'Agricultural', 'Automotive', 'Beverage',
        'Brass & Copper', 'Cable & Wires', 'Cosmetics', 'Cutting Tools', 'Defence',
        'Electronics', 'Elevators', 'Food & FMCG', 'Furniture', 'Gifts', 'Glass', 'Hardware',
        'Leather', 'LED & Switches', 'Machine Tools', 'Metals', 'Mobile Gadgets',
        'Motor & Bearing', 'Medical', 'Pipes', 'Woods', 'Packaging',
        'Pumps', 'Textile', 'Watch & Optics'
    ];

    return (
        <section className="section-padding bg-dark-900 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Our Impact</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Industries We Serve</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((industry, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="px-6 py-3 bg-dark-800 border border-dark-700 text-text-muted hover:text-primary hover:border-primary transition-all duration-300 rounded-full text-sm font-bold uppercase tracking-wider"
                        >
                            {industry}
                        </motion.span>
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
                title="Innovation & Precision"
                subtitle="Manufacturer, Importer and Supplier of Fiber Laser Marking Machine, Jewellery Laser Machine, Laser Engraving & Cutting Machines, and more."
                breadcrumb="About Us"
            />
            <AboutSection />
            <MissionVision />
            <WhyChooseUs />
            <Industries />
            <Leadership />
        </div>
    );
};

export default About;
