import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { products } from '../data/products';

const ProductFilters = ({ active, setActive }) => {
    const categories = ['All', 'Cutting', 'Marking', 'Welding', 'Cleaning'];

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-8 py-3 rounded-sm font-semibold uppercase tracking-widest text-sm transition-all duration-300 border ${active === cat
                        ? 'bg-primary border-primary text-dark-900 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'border-dark-700 text-text-muted hover:border-primary/50 hover:text-white'
                        }`}
                >
                    {cat} Machines
                </button>
            ))}
        </div>
    );
};

const ProductGrid = ({ activeCategory }) => {
    const navigate = useNavigate();
    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
                {filteredProducts.map((p, i) => (
                    <motion.div
                        key={p.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="group relative glass-card p-1 rounded-sm overflow-hidden cursor-pointer"
                        onClick={() => navigate(`/product/${p.id}`)}
                    >
                        {/* Image Layer */}
                        <div className="aspect-[4/5] bg-dark-800 flex items-center justify-center relative overflow-hidden">
                            <img
                                src={p.images[0]}
                                alt={p.name}
                                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/0 transition-colors" />

                            {/* Product Info Overlay */}
                            <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform">
                                <button className="btn-primary py-3 px-6 text-xs w-full">VIEW DETAILS</button>
                            </div>

                            {/* Tag */}
                            <div className="absolute top-4 left-4 bg-primary text-dark-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest leading-none shadow-xl">
                                {p.category} Series
                            </div>
                        </div>

                        {/* Basic Info Bar */}
                        <div className="p-6 border-t border-dark-700 bg-dark-900/50 backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{p.name}</h3>
                            </div>
                            <p className="text-sm font-mono text-primary font-bold tracking-widest">{p.price}</p>
                        </div>

                        {/* Hover Laser Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_#f59e0b]" />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Industrial Solutions"
                subtitle="Explore our comprehensive range of high-precision laser machines categorized for every industrial requirement."
                breadcrumb="Products"
            />

            <div className="container-custom py-12">
                <ProductFilters active={activeCategory} setActive={setActiveCategory} />
                <ProductGrid activeCategory={activeCategory} />
            </div>
        </div>
    );
};

export default Products;

