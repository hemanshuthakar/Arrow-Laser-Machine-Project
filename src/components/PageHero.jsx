import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroCarouselImages } from '../data/heroImages';

const PageHero = ({ title, subtitle, breadcrumb, images = heroCarouselImages }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);
    return (
        <section className="relative mt-24 pt-12 lg:pt-16 pb-20 lg:pb-28 bg-dark-900 overflow-hidden border-b border-dark-700">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {images && images.length > 0 ? (
                    <>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={images[currentImageIndex]}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 2, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${images[currentImageIndex]})`,
                                }}
                            />
                        </AnimatePresence>
                        {/* Overlay Gradient for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/60" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] -skew-x-12 translate-x-32" />
                    </>
                )}
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center space-x-2 text-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                        <span>Home</span>
                        <span className="w-6 h-px bg-primary/30" />
                        <span className="text-white">{breadcrumb}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white uppercase">{title}</h1>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mx-auto font-medium">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Background Large Text Accent */}
            <div className="absolute -bottom-16 right-0 text-[12vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                {breadcrumb}
            </div>
        </section>
    );
};

export default PageHero;
