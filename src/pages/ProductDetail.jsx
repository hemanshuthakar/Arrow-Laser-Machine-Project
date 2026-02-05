
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MessageSquare,
    ChevronLeft,
    Zap,
    Shield,
    Award,
    CheckCircle2
} from 'lucide-react';
import { products } from '../data/products';
import InquiryModal from '../components/InquiryModal';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
        }
    }, [id]);

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
        {
            icon: MessageSquare,
            label: 'WhatsApp',
            link: `https://wa.me/919909913488?text=Hi, I am interested in ${product.name}`,
            color: 'bg-green-600 hover:bg-green-700'
        },
        {
            icon: Mail,
            label: 'Email',
            link: `mailto:arrowlasermachine@gmail.com?subject=Inquiry for ${product.name}`,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            icon: Phone,
            label: 'Call',
            link: 'tel:+919909913488',
            color: 'bg-orange-600 hover:bg-orange-700'
        }
    ];

    return (
        <div className="bg-dark-900 min-h-screen pt-28 pb-20">
            <div className="container-custom">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-text-muted hover:text-primary transition-colors text-sm font-mono uppercase tracking-widest"
                    >
                        <ChevronLeft size={16} className="mr-2" />
                        Back to Inventory
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Image Gallery */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="aspect-square bg-dark-800 border border-dark-700 rounded-sm overflow-hidden flex items-center justify-center relative group"
                        >
                            <img
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-dark-900/10 pointer-events-none" />

                            {/* Tags */}
                            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                {product.tags.map(tag => (
                                    <span key={tag} className="bg-primary text-dark-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-square border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-dark-700 opacity-50 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Actions moved to left side */}
                        <div className="pt-8 space-y-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-primary w-full py-5 text-base tracking-[0.2em] font-bold shadow-lg"
                            >
                                PRODUCT INQUIRY
                            </button>

                            <div className="grid grid-cols-3 gap-4">
                                {contactActions.map((action, i) => (
                                    <a
                                        key={i}
                                        href={action.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center p-5 rounded-sm transition-all duration-300 ${action.color} text-white shadow-md hover:scale-105`}
                                        title={action.label}
                                    >
                                        <action.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">
                                {product.category} Series
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                {product.name}
                            </h1>
                            <p className="text-xl font-mono text-primary font-bold mb-8 italic">
                                {product.price}
                            </p>
                            <p className="text-text-muted leading-relaxed text-lg mb-10 border-l-2 border-primary/30 pl-6">
                                {product.description}
                            </p>
                        </div>

                        {/* Features & Applications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {product.features && (
                                <div>
                                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-primary/20 pb-2">Key Features</h4>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="text-text-muted text-sm flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {product.applications && (
                                <div>
                                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-primary/20 pb-2">Common Applications</h4>
                                    <ul className="space-y-3">
                                        {product.applications.map((app, i) => (
                                            <li key={i} className="text-text-muted text-sm flex items-start">
                                                <CheckCircle2 size={14} className="text-primary mr-2 mt-1 shrink-0" />
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Tech Specs */}
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center">
                                <Award className="mr-3 text-primary" size={20} />
                                Technical Specifications
                            </h3>
                            <div className="bg-dark-800 border border-dark-700 rounded-sm p-6 overflow-hidden">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                                    {product.details.map((detail, i) => (
                                        <li key={i} className="flex items-center text-text-muted text-xs border-b border-dark-700/50 pb-2 font-mono">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;
