import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-dark-900 flex flex-col items-center justify-center">
            <div className="relative w-64 h-32 flex flex-col items-center justify-center">
                {/* Logo Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold tracking-tighter text-white">
                        ARROW<span className="text-primary italic">LASER</span>
                    </h1>
                </motion.div>

                {/* Laser Line Animation */}
                <div className="relative w-full h-1 bg-dark-700 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full w-24 bg-primary shadow-[0_0_15px_rgba(245,158,11,1)]"
                        animate={{
                            left: ['-20%', '120%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 text-text-muted font-mono text-xs uppercase tracking-[0.3em]"
                >
                    Initializing Precision...
                </motion.p>
            </div>
        </div>
    );
};

export default Preloader;
