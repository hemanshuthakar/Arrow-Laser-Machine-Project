import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { products } from '../data/products';

const ProductFilters = ({ active, setActive }) => {
    const categories = ['All', 'Marking', 'Cutting', 'Welding', 'Cleaning'];

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 md:mb-20 px-4 mt-12 md:mt-0">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 md:px-8 py-3 rounded-sm font-semibold uppercase tracking-widest text-[10px] md:text-sm transition-all duration-300 border ${active === cat
                        ? 'bg-primary border-primary text-dark-900 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'border-dark-700 text-text-muted hover:border-primary/50 hover:text-white'
                        }`}
                >
                    {cat} <span className="hidden xs:inline">Machines</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode='popLayout'>
                {filteredProducts.map((p, i) => (
                    <motion.div
                        key={p.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
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
                            <div className="hidden lg:flex absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform backdrop-blur-sm">
                                <button className="btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white py-3 px-6 text-xs w-full tracking-widest">VIEW SPECIFICATIONS</button>
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
                            <p className="text-xs text-dark-400 font-mono mt-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{p.spec}</p>

                            <button className="btn-primary py-2 px-4 text-xs w-full mt-4 lg:hidden border border-secondary/20">VIEW DETAILS</button>
                        </div>
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

