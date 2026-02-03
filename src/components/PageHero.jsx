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

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center space-x-2 text-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                            <span>Home</span>
                            <span className="w-6 h-px bg-primary/30" />
                            <span className="text-white">{breadcrumb}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white uppercase">{title}</h1>
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl font-medium">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Right: Abstract Industrial Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square w-full max-w-md ml-auto border border-dark-700/50 bg-dark-800/20 rounded-sm overflow-hidden group">
                            {/* Technical Grid Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#F59E0B_1px,transparent_1px),linear-gradient(to_bottom,#F59E0B_1px,transparent_1px)] bg-[size:30px_30px]" />

                            {/* Inner Depth Panel */}
                            <div className="absolute inset-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-sm flex items-center justify-center">
                                {/* Rotating Tech Circles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-48 h-48 border border-primary/10 rounded-full border-dashed flex items-center justify-center"
                                >
                                    <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-16 h-16 border-2 border-primary/40 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Laser Points */}
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            opacity: [0.2, 0.6, 0.2],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                        className="absolute w-1 h-1 bg-primary blur-[2px] rounded-full"
                                        style={{
                                            top: `${25 + i * 15}%`,
                                            left: `${25 + i * 15}%`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Laser Sweep Animation */}
                            <motion.div
                                animate={{ top: ['-100%', '200%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#F59E0B] opacity-40 z-20"
                            />

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/20" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/20" />

                            {/* Soft Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Large Text Accent */}
            <div className="absolute -bottom-16 right-0 text-[12vw] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                {breadcrumb}
            </div>
        </section>
    );
};

export default PageHero;
