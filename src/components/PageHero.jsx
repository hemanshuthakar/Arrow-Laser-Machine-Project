import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, breadcrumb }) => {
    return (
        <section className="relative pt-44 pb-32 bg-dark-900 overflow-hidden border-b border-dark-700">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] -skew-x-12 translate-x-32" />
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
