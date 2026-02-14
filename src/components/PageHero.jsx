import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroCarouselImages } from '../data/heroImages';

const PageHero = ({ title, subtitle, breadcrumb, images = heroCarouselImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <section className="relative mt-16 sm:mt-20 pt-12 sm:pt-16 pb-20 sm:pb-24 lg:pt-28 lg:pb-36 bg-dark-900 overflow-hidden border-b border-dark-700">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.25, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                        style={{
                            backgroundImage: `url(${images[currentIndex]})`,
                        }}
                    />
                </AnimatePresence>

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900" />
                <div className="absolute inset-0 bg-dark-950/20" />

                {/* Branding Accent */}
                <div className="absolute left-1/2 bottom-0 w-[150px] sm:w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-1/2" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto px-4"
                >
                    <div className="inline-flex items-center space-x-2 sm:space-x-3 text-primary font-mono text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-6 sm:mb-8 bg-primary/5 px-3 sm:px-4 py-1 rounded-full border border-primary/10">
                        <span className="opacity-50">Home</span>
                        <span className="w-3 sm:w-4 h-[1px] bg-primary/30" />
                        <span className="text-white font-bold">{breadcrumb}</span>
                    </div>

                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-[1.1] text-white uppercase tracking-tight">
                        {title}
                    </h1>

                    <div className="w-10 sm:w-16 h-1 bg-primary mx-auto mb-8 sm:mb-10" />

                    <p className="text-xs xs:text-sm sm:text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Background Large Text Accent - Wrapped to ensure No Overflow */}
            <div className="absolute -bottom-8 sm:-bottom-16 right-0 w-full overflow-hidden pointer-events-none select-none">
                <div className="text-[18vw] sm:text-[12vw] font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap text-right pr-4 sm:pr-0">
                    {breadcrumb}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
