import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldAlert, Zap, Layers, ShieldCheck, Timer, BadgeIndianRupee, CheckCircle2, User } from 'lucide-react';
import PageHero from '../components/PageHero';

import indPackaging from '../assets/images/industries/ind_packaging.png';
import ownerImg from '../assets/Owner.jpeg';

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

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Advanced Laser Technology',
            icon: Zap,
            desc: 'High-speed, high-precision, and maintenance-free laser solutions.'
        },
        {
            title: 'Wide Range of Applications',
            icon: Layers,
            desc: 'Ideal for marking logos, brand names, serial numbers, barcodes, QR codes, and more on metals, plastics, ceramics, glass, wood, and other materials.'
        },
        {
            title: 'Unmatched Warranty & Benefits',
            icon: Timer,
            desc: 'One-year machine warranty, two-year laser source warranty, and exclusive add-ons such as Wi-Fi adapter, antivirus software, and accessories.'
        },
        {
            title: 'Instant Availability & Fast Delivery',
            icon: ShieldCheck,
            desc: 'Ready stock and same-day dispatch for urgent requirements.'
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
        <section className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Engineered Excellence</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Why Choose Arrow Laser Machine?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 border-dark-700 hover:border-primary/30 transition-all group"
                        >
                            <feature.icon className="text-primary mb-6" size={40} />
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section className="section-padding bg-dark-900 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">About Arrow Laser Machine</span>
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Leading Choice for Industrial Laser Solutions</h2>
                        <p className="text-text-body mb-6 leading-relaxed">
                            Welcome to Arrow Laser Machine, your trusted Manufacturer, Importer and Supplier of a wide range of Fiber Laser Marking Machines, Jewellery Laser Machines, Laser Engraving & Cutting Machines, Fiber Laser Sources, and Laser Marking Machine Parts. Established in 2022 in Ahmedabad, Gujarat, India, we specialize in precision laser marking, engraving, and etching solutions tailored for a wide range of industries.
                        </p>
                        <p className="text-text-body mb-8 leading-relaxed">
                            Our state-of-the-art laser machines are designed for precision marking and engraving on various materials, including metals, plastics, ceramics, glass, wood, and more. Leveraging cutting-edge laser technology, we deliver sharp, permanent, and high-quality results—whether you need to mark logos, serial numbers, barcodes, QR codes, or intricate designs.
                        </p>
                        <p className="text-text-body mb-8 leading-relaxed italic border-l-2 border-primary pl-6">
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
    return (
        <section className="section-padding bg-dark-800 border-t border-dark-700">
            <div className="container-custom text-center">
                <h2 className="text-4xl font-bold mb-16 uppercase tracking-widest text-white">Leadership</h2>
                <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-sm group border-primary/20 max-w-sm w-full"
                    >
                        <div className="w-full aspect-square bg-dark-900 rounded-sm mb-6 transition-all border border-dark-700 overflow-hidden relative flex items-center justify-center">
                            <img
                                src={ownerImg}
                                alt="Mr. Pankaj Diwkaar"
                                className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Mr. Pankaj Diwkaar</h3>
                        <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">Director</p>
                        <p className="text-text-muted mt-4 text-sm font-mono">+91 99099 13488</p>
                    </motion.div>
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
                <div className="text-center mb-16">
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

const Awards = () => {
    return (
        <section className="section-padding bg-dark-800 border-t border-dark-700">
            <div className="container-custom text-center">
                <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Global Recognition</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 uppercase tracking-widest">Awards & Exhibitions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Innovation Excellence', year: '2023', org: 'Tech Expo Ahmedabad' },
                        { title: 'Best Laser Supplier', year: '2024', org: 'Industrial Awards India' },
                        { title: 'Eco-Friendly Solution', year: '2023', org: 'Green Tech Forum' },
                        { title: 'Quality Benchmark', year: '2024', org: 'Manufacturing Summit' }
                    ].map((award, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-dark-900 p-8 border border-dark-700 rounded-sm group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -translate-y-8 translate-x-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                            <h4 className="text-primary font-bold mb-2 text-xl">{award.year}</h4>
                            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">{award.title}</h3>
                            <p className="text-text-muted text-xs font-mono">{award.org}</p>
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
                title="Innovation & Precision"
                subtitle="Manufacturer, Importer and Supplier of Fiber Laser Marking Machine, Jewellery Laser Machine, Laser Engraving & Cutting Machines, and more."
                breadcrumb="About Us"
            />
            <AboutSection />
            <MissionVision />
            <WhyChooseUs />
            <Industries />
            <Awards />
            <Leadership />
        </div>
    );
};

export default About;
