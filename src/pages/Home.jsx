import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, Globe, ArrowRight, CheckCircle2, Layers, Scissors, Settings, Search, Shield, Timer, Award, Activity, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Counter from '../components/Counter';
import InquiryModal from '../components/InquiryModal';
import { products } from '../data/products';
import prodFiberMarking from '../assets/images/product-images/fiber-marking/ChatGPT Image Feb 11, 2026, 02_46_20 PM.png';
import indWood from '../assets/images/industries/ind_wood.png';
import prodUvMarking from '../assets/images/product-images/uv-marking/ChatGPT Image Feb 11, 2026, 02_50_49 PM.png';
import catWelding from '../assets/images/gallary/20250706_120020.jpg';
import catCleaning from '../assets/images/gallary/20250706_120027.jpg';
import heroBanner from '../assets/images/BANNER IMAGE/collage-2.png';

const Hero = ({ onInquiry }) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            badge: "Est. 2022 • Precision Engineering",
            titleFirst: "Pioneering the Future of",
            titleHighlight: "Laser Technology",
            desc: "Precision Engineering Since 2022. We design and manufacture high-performance laser machines for global industrial excellence.",
            image: heroBanner,
            btnPrimary: "EXPLORE MACHINES",
            btnSecondary: "ENQUIRE NOW"
        },
        {
            id: 2,
            badge: "Industrial Excellence",
            titleFirst: "Advanced Fiber Laser",
            titleHighlight: "Marking Systems",
            desc: "High-speed, permanent marking solutions for metals and plastics. Engineered for durability, precision, and efficiency in every pulse.",
            image: prodFiberMarking,
            btnPrimary: "VIEW FIBER SERIES",
            btnSecondary: "GET QUOTE"
        },
        {
            id: 3,
            badge: "Cold Laser Technology",
            titleFirst: "Ultra-Fine UV Laser",
            titleHighlight: "Marking Machines",
            desc: "Cold marking technology for delicate materials like glass, crystal, and plastics. Delivering minimal thermal impact with maximum clarity.",
            image: prodUvMarking,
            btnPrimary: "VIEW UV SERIES",
            btnSecondary: "CONTACT US"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const slideVariants = {
        enter: { x: '100%', opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-900">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative w-full h-screen"> {/* Container for absolute slides */}
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={currentSlide}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="container-custom relative z-10 w-full">
                            {/* Two Column Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                {/* Left Side - Text Content */}
                                <div className="text-left">
                                    <div
                                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-[0.3em] mb-10"
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        <span>{slides[currentSlide].badge}</span>
                                    </div>

                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 uppercase tracking-tight">
                                        {slides[currentSlide].titleFirst} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40">
                                            {slides[currentSlide].titleHighlight}
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed font-medium">
                                        {slides[currentSlide].desc}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                        <button
                                            onClick={() => navigate('/products')}
                                            className="btn-primary flex items-center justify-center space-x-3 px-10 py-5 group shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all"
                                        >
                                            <span className="font-bold tracking-[0.2em] text-sm">{slides[currentSlide].btnPrimary}</span>
                                            <Zap size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                        <button
                                            onClick={onInquiry}
                                            className="btn-outline flex items-center justify-center space-x-3 px-10 py-5 border-2"
                                        >
                                            <span className="font-bold tracking-[0.2em] text-sm">{slides[currentSlide].btnSecondary}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Side - Machine Image */}
                                <div className="relative flex justify-center lg:justify-end">
                                    <div
                                        className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(245,158,11,0.3)] border-4 border-primary/30 bg-gradient-to-br from-dark-800 to-dark-900 p-2"
                                        style={{
                                            transform: 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
                                            maxWidth: '550px',
                                            width: '100%'
                                        }}
                                    >
                                        <div className="relative rounded-xl overflow-hidden bg-white">
                                            <img
                                                src={slides[currentSlide].image}
                                                alt="Arrow Laser Machine"
                                                className="w-full h-auto object-contain"
                                                style={{ minHeight: '400px', maxHeight: '500px' }}
                                            />
                                        </div>
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none rounded-xl"></div>
                                    </div>

                                    {/* Decorative glow behind */}
                                    <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 scale-90"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Scroll Down Indicator - Fixed Position independent of slides */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 z-20"
            >
                <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white">SCROLL</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>

            {/* Carousel Indicators (Dots) */}
            <div className="absolute bottom-10 right-10 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-8' : 'bg-dark-700 hover:bg-primary/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section >
    );
};

const TechnicalStats = () => {
    return (
        <section className="relative py-12 bg-dark-950 border-y border-dark-700 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {[
                        { label: 'Precision', icon: Cpu, value: 0.1, suffix: 'mm', decimals: 1 },
                        { label: 'Speed', icon: Zap, value: 80, suffix: 'm/min' },
                        { label: 'Reliability', icon: ShieldCheck, value: 24, suffix: '/7' },
                        { label: 'Presence', icon: Globe, value: 25, suffix: '+ Countries' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="text-primary mb-5 p-4 bg-dark-900 border border-dark-700/50 rounded-full group-hover:bg-primary group-hover:text-dark-900 transition-all duration-500 shadow-xl">
                                <stat.icon size={28} />
                            </div>
                            <div className="text-white font-mono text-3xl md:text-4xl font-black flex items-baseline mb-2">
                                {stat.decimals ? (
                                    <span className="flex">
                                        0.<Counter value={stat.value * 10} duration={1.5} />
                                    </span>
                                ) : (
                                    <Counter value={stat.value} duration={1.5} />
                                )}
                                <span className="text-sm md:text-base ml-1 text-primary italic font-bold">{stat.suffix}</span>
                            </div>
                            <span className="text-text-muted text-[10px] md:text-xs uppercase tracking-[0.4em] font-black group-hover:text-primary transition-colors">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutPreview = () => {
    const navigate = useNavigate();
    return (
        <section className="section-padding bg-dark-800 relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 p-2 border border-dark-700 bg-dark-900 rounded-sm overflow-hidden group">
                            <div className="aspect-[4/3] bg-dark-800 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={prodFiberMarking}
                                    alt="Precision Engineering"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                {/* Overlay lines */}
                                <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-20">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="border-r border-dark-700" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-10 -right-10 z-20 bg-primary p-8 rounded-sm shadow-2xl min-w-[160px]"
                        >
                            <h3 className="text-4xl font-bold text-dark-900 mb-1 leading-none">
                                <Counter value={5} />+
                            </h3>
                            <p className="text-sm font-semibold text-dark-900/70 uppercase tracking-widest leading-none">Years Service</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Engineered Excellence</span>
                        <h2 className="text-4xl md:text-5xl mb-8">Redefining Industrial <br className="hidden md:block" /> Precision Standards</h2>

                        <p className="text-text-body mb-8 leading-relaxed">
                            Arrow Laser Machine designs and manufactures world-class laser systems for marking, engraving, cutting, welding, and cleaning applications across diverse industries. Established in 2022, we deliver precision laser technology for industrial, commercial, and customized applications.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                'Global Standard Certifications (CE, ISO 9001)',
                                'Dedicated 24/7 Technical Support Unit',
                                'Proprietary Laser Control Software',
                                'Energy Efficient Manufacturing Systems'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-text-muted">
                                    <CheckCircle2 size={20} className="text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => navigate('/about')}
                            className="flex items-center space-x-4 group text-white font-bold uppercase tracking-widest text-sm"
                        >
                            <span>More About Our Legacy</span>
                            <div className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-dark-900 transition-all duration-300">
                                <ArrowRight size={18} />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-dark-700" />
        </section>
    );
};

const FeaturedProducts = () => {
    const navigate = useNavigate();
    const featuredList = products.slice(0, 3);

    return (
        <section className="section-padding bg-dark-900 relative z-10 border-b border-dark-700">
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container-custom relative">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Our Products</span>
                    <h2 className="text-4xl md:text-5xl mb-6">Cutting-Edge Laser Solutions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                    {featuredList.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative card-metallic rounded-xl cursor-pointer"
                            onClick={() => navigate(`/product/${p.id}`)}
                        >
                            {/* Image Layer */}
                            <div className="aspect-[4/5] bg-dark-900 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={p.images[0]}
                                    alt={p.name}
                                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                                />

                                {/* Logo Overlay for All Featured Products */}
                                <div className="absolute top-4 right-4 z-20 w-12 h-12 pointer-events-none">
                                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

                                {/* Product Info Overlay */}
                                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform backdrop-blur-sm">
                                    <button className="btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white py-3 px-6 text-xs w-full tracking-widest uppercase">VIEW SOLUTIONS</button>
                                </div>

                                {/* Tag */}
                                <div className="absolute top-4 left-4 bg-dark-900/90 border border-secondary/30 text-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest leading-none shadow-lg backdrop-blur-md">
                                    {p.category} Series
                                </div>
                            </div>

                            {/* Basic Info Bar */}
                            <div className="p-6 border-t border-dark-700/50 bg-gradient-to-b from-dark-800 to-dark-900 absolute bottom-0 w-full">
                                <div className="w-12 h-1 bg-secondary/50 mb-4 rounded-full group-hover:w-full group-hover:bg-secondary transition-all duration-500" />
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors font-heading leading-tight">{p.name}</h3>
                                </div>
                                <p className="text-sm font-mono text-secondary font-bold tracking-widest">{p.price === 'Contact for Quote' ? 'PREMIUM GRADE' : p.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/products')}
                        className="btn-outline px-10 py-4 text-sm tracking-widest flex items-center space-x-2 group-hover:space-x-4 transition-all"
                    >
                        <span>MORE PRODUCTS</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

const Categories = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: 'Laser Marking',
            icon: Layers,
            desc: 'Permanent identification, branding, and tracing for industrial components.',
            image: prodUvMarking,
            color: 'from-blue-500/20'
        },
        {
            title: 'Laser Cutting',
            icon: Scissors,
            desc: 'High-speed precision cutting for metals, plastics, and composite materials.',
            image: indWood,
            color: 'from-orange-500/20'
        },
        {
            title: 'Laser Welding',
            icon: Settings,
            desc: 'Deep penetration welding with minimal heat distortion for complex structures.',
            image: catWelding,
            color: 'from-purple-500/20'
        },
        {
            title: 'Laser Cleaning',
            icon: Search,
            desc: 'Non-contact removal of rust, paint, and contaminants from surface layers.',
            image: catCleaning,
            color: 'from-emerald-500/20'
        }
    ];

    return (
        <section className="section-padding bg-dark-900 border-t border-dark-700">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Our Specialization</span>
                        <h2 className="text-4xl md:text-5xl">Manufacturing Excellence <br /> for Every Industry</h2>
                    </div>
                    <button
                        onClick={() => navigate('/products')}
                        className="btn-outline"
                    >
                        VIEW ALL PRODUCTS
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative glass-card p-8 rounded-sm overflow-hidden h-full flex flex-col cursor-pointer`}
                            onClick={() => navigate('/products')}
                        >
                            {/* Category Image Background */}
                            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Abstract Background Icon */}
                            <div className="absolute -bottom-10 -right-10 text-dark-700/50 group-hover:text-primary/10 transition-colors duration-500 z-10">
                                <cat.icon size={160} />
                            </div>

                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-dark-900/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-dark-700 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center rounded-sm mb-8">
                                    <cat.icon size={28} className="text-white group-hover:text-dark-900 transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{cat.title}</h3>
                                <p className="text-text-muted mb-8 leading-relaxed">
                                    {cat.desc}
                                </p>

                                <div className="mt-auto flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest pointer-events-none">
                                    <span>Explore Series</span>
                                    <div className="w-6 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
                                </div>
                            </div>
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
            title: 'Zero Downtime Support',
            icon: Timer,
            desc: 'Our global support network ensures your production line never stops for long.'
        },
        {
            title: 'Certified Quality',
            icon: Award,
            desc: 'TUV and CE certified machines, meeting the most stringent international safety standards.'
        }
    ];

    return (
        <section className="section-padding bg-dark-800 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8">Our Core Strengths</span>
                    <h2 className="text-4xl md:text-6xl mb-6">Why Industry Leaders <br /> Trust Arrow Laser</h2>
                    <p className="text-text-muted text-lg">We don't just sell machines; we provide precision manufacturing partnerships that last decades.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-700">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-dark-800 p-12 hover:bg-dark-900 transition-colors duration-500 group relative"
                        >
                            <div className="flex items-start space-x-8">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 border border-dark-700 flex items-center justify-center rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                                        <feature.icon className="text-primary" size={30} />
                                    </div>
                                </div>
                                <div className="p-0">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                                    <p className="text-text-muted leading-relaxed max-w-sm">{feature.desc}</p>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-primary/0 group-hover:border-primary/20 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    );
};



const CTA = ({ onInquiry }) => {
    return (
        <section className="section-padding bg-dark-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative glass-card p-12 lg:p-24 rounded-sm overflow-hidden text-center"
                >
                    {/* Decorative Laser Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/50 to-transparent" />
                        <div className="absolute inset-0 grid grid-cols-12">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="border-r border-dark-700 h-full" />
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Elevate Your <br /> <span className="text-primary">Production Line?</span></h2>
                        <p className="text-xl text-text-body mb-12 max-w-2xl mx-auto leading-relaxed">
                            Consult with our technology experts to find the perfect laser solution for your specific manufacturing needs today.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                            <button
                                onClick={onInquiry}
                                className="btn-primary w-full sm:w-auto px-12 py-5 text-lg"
                            >
                                GET A QUOTE
                            </button>
                            <a href="mailto:arrowlasermachine@gmail.com" className="flex items-center space-x-3 text-white font-bold group">
                                <Mail className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-widest text-sm">arrowlasermachine@gmail.com</span>
                                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Laser line sweep */}
                    <motion.div
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const Home = () => {
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);

    return (
        <div className="bg-dark-900">
            <Hero onInquiry={() => setIsInquiryOpen(true)} />
            <TechnicalStats />
            <AboutPreview />
            <FeaturedProducts />
            <Categories />
            <WhyChooseUs />
            <CTA onInquiry={() => setIsInquiryOpen(true)} />

            <InquiryModal
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
            />
        </div>
    );
};

export default Home;

