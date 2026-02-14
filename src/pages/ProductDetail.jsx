import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    ChevronLeft,
    ChevronRight,
    Zap,
    Shield,
    Award,
    CheckCircle2,
    X,
    Maximize2,
    Cpu,
    Activity,
    Layers,
    Settings,
    Download
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { products } from '../data/products';
import { galleryItems } from '../data/gallery';
import InquiryModal from '../components/InquiryModal';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const [activeTab, setActiveTab] = useState('details');
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
            setActiveImage(0);
        }
    }, [id]);

    useEffect(() => {
        let interval;
        if (!isAutoScrollPaused) {
            interval = setInterval(() => {
                if (scrollContainerRef.current) {
                    const { current } = scrollContainerRef;
                    const maxScrollLeft = current.scrollWidth - current.clientWidth;

                    if (current.scrollLeft >= maxScrollLeft - 10) {
                        current.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        current.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                }
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoScrollPaused, product]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-4">Product Not Found</h2>
                    <Link to="/products" className="btn-primary px-8 py-3">Back to Products</Link>
                </div>
            </div>
        );
    }

    const contactActions = [
        { icon: FaWhatsapp, label: 'WhatsApp', link: `https://wa.me/919909913488?text=Hi, I am interested in ${product.name}`, color: 'bg-[#25D366] hover:bg-[#20bd5a]' },
        { icon: Mail, label: 'Email', link: `mailto:arrowlasermachine@gmail.com?subject=Inquiry for ${product.name}`, color: 'bg-blue-600 hover:bg-blue-700' },
        { icon: Phone, label: 'Call', link: 'tel:+919909913488', color: 'bg-orange-600 hover:bg-orange-700' }
    ];

    const activeSpecs = product.details.map(d => {
        const parts = d.split(':');
        return {
            label: parts[0]?.trim(),
            value: parts.slice(1).join(':').trim() || ''
        };
    });

    const highlightImages = product.applicationHighlights && product.applicationHighlights.length > 0
        ? product.applicationHighlights
        : [...product.images, ...galleryItems.filter(g => g.type === 'photo').map(g => g.url)].slice(0, 12);

    return (
        <div className="bg-dark-900 min-h-screen pt-24 pb-20 overflow-x-hidden">
            <section className="container-custom mb-20 mt-12">
                <div className="fixed top-[72px] left-0 w-full z-40 pointer-events-none">
                    <div className="container-custom py-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="pointer-events-auto inline-flex items-center bg-dark-800 border border-primary/30 px-5 py-2.5 rounded-full text-white hover:bg-dark-700 hover:border-primary hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 shadow-xl shadow-black/50 text-xs md:text-sm font-bold font-mono uppercase tracking-widest"
                        >
                            <ChevronLeft size={16} className="mr-2 text-primary" />
                            Back to Inventory
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <div
                            className="relative aspect-square flex items-center justify-center bg-dark-800 rounded-sm border border-dark-700 overflow-hidden cursor-pointer group"
                            onClick={() => { setModalImage(product.images[activeImage]); setIsImageModalOpen(true); }}
                        >
                            <img
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-900/80 p-2 rounded-sm text-primary">
                                <Maximize2 size={20} />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary ring-2 ring-primary/20 scale-95' : 'border-dark-700 opacity-70 hover:opacity-100 hover:border-dark-500'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => setIsInquiryOpen(true)}
                                className="flex-1 btn-primary py-4 text-center text-sm tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
                            >
                                PRODUCT INQUIRY
                            </button>
                            <div className="flex gap-2 justify-center sm:justify-start">
                                {contactActions.map((action, i) => (
                                    <a
                                        key={i}
                                        href={action.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 flex items-center justify-center rounded-sm text-white shadow-lg transform hover:scale-110 transition-all duration-300 ${action.color}`}
                                        title={action.label}
                                    >
                                        <action.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-2 block">
                                {product.category} Series
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                                {product.name}
                            </h1>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex border-b border-dark-700 overflow-x-auto scrollbar-hide">
                            {['details', 'benefits', 'applications', 'Technical Specification'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all relative whitespace-nowrap shrink-0 ${activeTab === tab
                                        ? 'text-primary'
                                        : 'text-text-muted hover:text-white'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[400px]">
                            {activeTab === 'details' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-sm md:text-base font-bold text-text-muted uppercase tracking-widest flex items-center gap-2 mb-6">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        High Precision • Industrial Grade • {product.category === 'Marking' ? 'EZCAD Compatible' : 'Industrial Standard'}
                                    </p>
                                    <div className="space-y-4 mb-6">
                                        {product.description.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-text-body text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags && product.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1 rounded-full bg-dark-800 border border-dark-700 text-xs font-mono uppercase tracking-widest text-primary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Technical Specification' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                        {activeSpecs.map((spec, i) => (
                                            <div key={i} className="flex flex-col border-b border-dark-700/50 pb-2">
                                                <span className="text-text-muted font-mono text-xs uppercase tracking-wider mb-1">{spec.label}</span>
                                                <span className="text-white font-bold text-sm">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'benefits' && product.features && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 gap-4"
                                >
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="p-4 bg-dark-800 border border-dark-700 rounded-sm flex items-center justify-start gap-4">
                                            <div className="text-primary opacity-80 shrink-0">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <p className="text-white font-medium leading-relaxed text-left">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'applications' && product.applications && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {product.applicationDescription && (
                                        <p className="text-text-muted mb-6 leading-relaxed">
                                            {product.applicationDescription}
                                        </p>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {product.applications.map((app, i) => {
                                            const match = app.match(/ [–-] /);
                                            const separatorIndex = match ? match.index : -1;

                                            return (
                                                <div key={i} className="flex items-start space-x-3 p-3 bg-dark-800 border border-dark-700 rounded-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                    <span className="text-text-muted text-sm font-medium leading-relaxed">
                                                        {separatorIndex !== -1 ? (
                                                            <>
                                                                <strong className="text-white">{app.substring(0, separatorIndex)}</strong>
                                                                <span className="mx-1">{match[0].trim()}</span>
                                                                {app.substring(separatorIndex + match[0].length)}
                                                            </>
                                                        ) : (
                                                            app
                                                        )}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {highlightImages.length > 0 && (
                <section className="container-custom mb-24 overflow-hidden">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-primary">
                            <Award size={28} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-center">
                            Application Highlights
                        </h3>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-dark-900/90 backdrop-blur-sm p-4 rounded-full text-white hover:text-primary border border-dark-700 hover:border-primary transition-all shadow-2xl opacity-0 group-hover:opacity-100 -translate-x-1/2"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-dark-900/90 backdrop-blur-sm p-4 rounded-full text-white hover:text-primary border border-dark-700 hover:border-primary transition-all shadow-2xl opacity-0 group-hover:opacity-100 translate-x-1/2"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar scroll-smooth"
                            onMouseEnter={() => setIsAutoScrollPaused(true)}
                            onMouseLeave={() => setIsAutoScrollPaused(false)}
                            onTouchStart={() => setIsAutoScrollPaused(true)}
                            onTouchEnd={() => setIsAutoScrollPaused(false)}
                        >
                            {highlightImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="w-[85%] sm:w-[45%] md:w-[32%] aspect-[16/9] bg-dark-800 rounded-sm overflow-hidden border border-dark-700 relative flex-shrink-0 group/item cursor-pointer"
                                    onClick={() => { setModalImage(img); setIsImageModalOpen(true); }}
                                >
                                    <img src={img} alt="Application" className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-950 to-transparent opacity-80" />
                                    <div className="absolute bottom-3 left-3">
                                        <p className="text-white text-xs font-bold uppercase tracking-widest">
                                            {product.applicationHighlights ? `Highlight ${idx + 1}` : `Demo ${idx + 1}`}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="container-custom">
                <div className="glass-card p-12 md:p-20 text-center rounded-sm relative overflow-hidden border border-primary/20">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="absolute inset-0 opacity-[0.05]"
                        style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Ready to Optimize Your Production?
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Get a detailed quote and free consultation for your specific manufacturing requirements. Our engineers are ready to assist you.
                    </p>

                    <button
                        onClick={() => setIsInquiryOpen(true)}
                        className="btn-primary px-12 py-5 text-lg font-bold tracking-[0.2em] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    >
                        REQUEST A QUOTE
                    </button>
                </div>
            </section>

            <AnimatePresence>
                {isImageModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-dark-950/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setIsImageModalOpen(false)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[110]">
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-[90vh] w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={modalImage || product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <InquiryModal
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;
