import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MessageSquare,
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
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
            // Reset active image when product changes
            setActiveImage(0);
        }
    }, [id]);

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
        { icon: MessageSquare, label: 'WhatsApp', link: `https://wa.me/919909913488?text=Hi, I am interested in ${product.name}`, color: 'bg-[#25D366] hover:bg-[#20bd5a]' },
        { icon: Mail, label: 'Email', link: `mailto:arrowlasermachine@gmail.com?subject=Inquiry for ${product.name}`, color: 'bg-blue-600 hover:bg-blue-700' },
        { icon: Phone, label: 'Call', link: 'tel:+919909913488', color: 'bg-orange-600 hover:bg-orange-700' }
    ];

    // Helper to parse specs (handling "Label: Value" format)
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

            {/* SECTION 1: HERO / PRODUCT OVERVIEW */}
            <section className="container-custom mb-20">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-text-muted hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest"
                    >
                        <ChevronLeft size={16} className="mr-2" />
                        Back to Inventory
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Gallery (Main Image + Thumbnails) */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div
                            className="relative aspect-square flex items-center justify-center bg-dark-800 rounded-sm border border-dark-700 overflow-hidden cursor-pointer group"
                            onClick={() => { setModalImage(product.images[activeImage]); setIsImageModalOpen(true); }}
                        >
                            <img
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Resize Icon Overlay */}
                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-900/80 p-2 rounded-sm text-primary">
                                <Maximize2 size={20} />
                            </div>
                        </div>

                        {/* Thumbnails */}
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
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-8">
                        {/* ... (Product Info content - copied implicitly by not changing lines unless needed, but here I'm replacing a large block to insert finding 'activeSpecs' logic if I replaced the whole file. 
                         Actually, I should restrict the replacement range to be safer. 
                         Let me cancel this thought and do a targeted MultiReplace.) */}


                        {/* Right: Product Info */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-2 block">
                                    {product.category} Series
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-sm md:text-base font-bold text-text-muted uppercase tracking-widest flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    High Precision • Industrial Grade • {product.category === 'Marking' ? 'EZCAD Compatible' : 'Industrial Standard'}
                                </p>
                                <p className="text-text-body text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
                                    {product.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {product.tags && product.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1 rounded-full bg-dark-800 border border-dark-700 text-xs font-mono uppercase tracking-widest text-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
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
                    </div>
                </div>
            </section>

            {/* SECTION 3: TECHNICAL SPECIFICATIONS */}
            <section className="container-custom mb-24">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-primary">
                        <Settings size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-center">
                        Technical Specifications
                    </h2>
                </div>

                <div className="bg-dark-800/50 backdrop-blur-md border border-dark-700 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {/* We will map the parsed specs here. 
                             Ideally these would be grouped by category in the data source, 
                             but here we render them in a clean grid for now. */}
                        {activeSpecs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-dark-700/50 pb-3 group hover:border-primary/30 transition-colors">
                                <span className="text-text-muted font-mono text-sm">{spec.label}</span>
                                <span className="text-white font-bold text-sm text-right group-hover:text-primary transition-colors">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: KEY FEATURES */}
            {product.features && (
                <section className="container-custom mb-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-primary">
                            <Zap size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-center">
                            Key Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-dark-800 border border-dark-700 rounded-sm hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 size={32} />
                                </div>
                                <p className="text-lg text-white font-medium leading-relaxed group-hover:text-primary-foreground transition-colors">
                                    {feature}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* SECTION 5: COMMON APPLICATIONS */}
            {product.applications && (
                <section className="container-custom mb-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="p-3 bg-dark-800 rounded-lg border border-dark-700 text-primary">
                            <Layers size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest text-center">
                            Common Applications
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {product.applications.map((app, i) => (
                            <div key={i} className="flex items-start space-x-3 p-4 bg-dark-900 border border-dark-800 rounded-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-text-muted text-sm font-semibold">{app}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* SECTION 6: APPLICATION HIGHLIGHTS */}
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
                    {/* Scroll Buttons */}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-3 left-3">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest truncate max-w-full">
                                        {product.applicationHighlights ? `Highlight ${idx + 1}` : `Demo ${idx + 1}`}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: PRODUCT INQUIRY CTA */}
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

            {/* FULL SCREEN IMAGE MODAL */}
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
                            {!modalImage && (
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <p className="text-white/80 font-mono text-sm tracking-widest uppercase">
                                        {activeImage + 1} / {product.images.length}
                                    </p>
                                </div>
                            )}
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
