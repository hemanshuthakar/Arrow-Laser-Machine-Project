import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, Globe, ArrowRight, CheckCircle2, Layers, Scissors, Settings, Search, Shield, Timer, Award, Activity, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Counter from '../components/Counter';
import InquiryModal from '../components/InquiryModal';
import { products } from '../data/products';
import indWood from '../assets/images/industries/ind_wood.png';
import catWelding from '../assets/images/gallary/1.jpg';
import catCleaning from '../assets/images/gallary/2.jpg';
// Banner Images from Hero Section
import heroBanner1 from '../assets/images/BANNER IMAGE/1.png';
import heroBanner2 from '../assets/images/BANNER IMAGE/2.png';
import heroBanner3 from '../assets/images/BANNER IMAGE/3.png';
import heroBanner4 from '../assets/images/BANNER IMAGE/4.png';
import prodFiberMarking from '../assets/images/home_desc_image.png';

const Hero = ({ onInquiry }) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: heroBanner1,

        },
        {
            id: 2,
            image: heroBanner2
        },
        {
            id: 3,
            image: heroBanner3
        },
        {
            id: 4,
            image: heroBanner4
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
        <section className="relative flex justify-center hero-pt-responsive pb-20 overflow-hidden bg-[#0a0a0a]">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] 3xl:h-[820px] 4xl:h-[900px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full h-full flex items-center justify-center p-2"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Full Banner Image Slide - Perfectly Contained */}
                            <img
                                src={slides[currentSlide].image}
                                alt={`Arrow Laser Banner ${slides[currentSlide].id}`}
                                className="max-w-full max-h-full object-contain block"
                            />
                            {/* Suble bottom wash */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Scroll Down Indicator - Fixed Position independent of slides */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 opacity-50 z-20"
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
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

const TechnicalStats = () => {
    return (
        <section className="relative py-8 md:py-12 bg-dark-950 border-y border-dark-700 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container-custom relative z-10 w-full px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-4 md:gap-8 lg:gap-16">
                    {[
                        { label: 'Precision', icon: Cpu, value: 0.1, suffix: 'mm', decimals: 1 },
                        { label: 'Speed', icon: Zap, value: 80, suffix: 'm/min' },
                        { label: 'Reliability', icon: ShieldCheck, value: 24, suffix: '/7' },
                        { label: 'Presence', icon: Globe, value: 25, suffix: '+ Countries' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                            className="flex flex-col items-center text-center group w-full"
                        >
                            <div className="text-primary mb-3 md:mb-4 p-3 md:p-4 bg-dark-900 border border-dark-700/50 rounded-2xl group-hover:bg-primary group-hover:text-dark-900 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-1">
                                <stat.icon size={22} className="md:w-6 md:h-6" />
                            </div>
                            <div className="text-white font-mono text-xl xs:text-2xl md:text-3xl lg:text-5xl font-black flex items-baseline mb-1 whitespace-nowrap">
                                {stat.decimals ? (
                                    <span className="flex">
                                        0.<Counter value={stat.value * 10} duration={1.5} />
                                    </span>
                                ) : (
                                    <Counter value={stat.value} duration={1.5} />
                                )}
                                <span className="text-[10px] md:text-xs lg:text-base ml-1 text-primary italic font-bold shrink-0">{stat.suffix}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-text-muted text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black group-hover:text-primary transition-colors">
                                    {stat.label}
                                </span>
                                <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 mt-1" />
                            </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative px-4 sm:px-0"
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

                        {/* Experience Badge - Positioned safely for mobile */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-4 right-0 md:-bottom-10 md:-right-10 z-20 bg-primary p-4 sm:p-8 rounded-sm shadow-2xl min-w-[110px] sm:min-w-[160px]"
                        >
                            <h3 className="text-2xl sm:text-4xl font-bold text-dark-900 mb-1 leading-none">
                                <Counter value={5} />+
                            </h3>
                            <p className="text-[9px] sm:text-sm font-semibold text-dark-900/70 uppercase tracking-widest leading-none">Years Service</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 lg:mt-0 px-4 sm:px-0"
                    >
                        <span className="text-primary font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8 decoration-primary/30">Engineered Excellence</span>
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 leading-tight font-black uppercase tracking-tight">Redefining Industrial <br className="hidden md:block" /> Precision Standards</h2>

                        <p className="text-text-body mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                            Arrow Laser Machine designs and manufactures world-class laser systems for marking, engraving, cutting, welding, and cleaning applications across diverse industries. Established in 2022, we deliver precision laser technology for industrial, commercial, and customized applications.
                        </p>

                        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                            {[
                                'Global Standard Certifications (CE, ISO 9001)',
                                'Dedicated 24/7 Technical Support Unit',
                                'Proprietary Laser Control Software',
                                'Energy Efficient Manufacturing Systems'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-text-muted text-sm sm:text-base">
                                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => navigate('/about')}
                            className="flex items-center space-x-4 group text-white font-bold uppercase tracking-widest text-xs sm:text-sm"
                        >
                            <span>More About Our Legacy</span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-dark-700 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-dark-900 transition-all duration-300">
                                <ArrowRight size={16} />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-dark-700 hidden lg:block" />
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
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Our Products</span>
                    <h2 className="text-4xl md:text-5xl mb-6">Cutting-Edge Laser Solutions</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
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
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-secondary transition-colors font-heading leading-tight">{p.name}</h3>
                                </div>
                                <p className="text-xs md:text-sm font-mono text-secondary font-bold tracking-widest">{p.price === 'Contact for Quote' ? 'PREMIUM GRADE' : p.price}</p>
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
            image: heroBanner3,
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
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
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
                <div className="text-center mb-16 max-w-3xl mx-auto">
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

