import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryItems } from '../data/gallery';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = filter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.type === (filter === 'Photos' ? 'photo' : 'video'));

    const filters = ['All', 'Photos', 'Videos'];

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Visual Showcase"
                subtitle="A detailed look at our machines, industrial operations, and the precision we deliver."
                breadcrumb="Gallery"
            />

            <div className="container-custom py-16">
                {/* Filters */}
                <div className="flex justify-center space-x-4 mb-16">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${filter === f
                                    ? 'bg-primary border-primary text-dark-900 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                                    : 'border-dark-700 text-text-muted hover:border-primary/50 hover:text-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[4/3] bg-dark-800 border border-dark-700 rounded-sm overflow-hidden cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center mb-4 bg-primary/10 text-primary">
                                        {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <Maximize2 size={20} />}
                                    </div>
                                    <p className="text-[10px] text-primary font-mono uppercase tracking-[0.3em] mb-2">{item.category}</p>
                                    <h3 className="text-white font-bold uppercase tracking-widest text-sm">{item.title}</h3>
                                </div>

                                {/* Type Tag */}
                                <div className="absolute top-4 right-4 z-10 p-2 bg-dark-900/80 backdrop-blur-sm border border-dark-700 rounded-sm text-primary">
                                    {item.type === 'video' ? <Play size={14} /> : <ImageIcon size={14} />}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-dark-950/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[110]"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full aspect-video bg-dark-900 shadow-2xl overflow-hidden border border-dark-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'photo' ? (
                                <img
                                    src={selectedItem.url}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-dark-800">
                                    <p className="text-text-muted font-mono">Video Player Mockup</p>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-950 to-transparent">
                                <p className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-2">{selectedItem.category}</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">{selectedItem.title}</h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
