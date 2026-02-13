import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, ShieldCheck, Trophy, Eye, X } from 'lucide-react';
import PageHero from '../components/PageHero';


// Import award images
import award1 from '../assets/images/Awards/award_01.png';
import award2 from '../assets/images/Awards/award_02.png';

const Awards = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const awards = [
        {
            title: 'Innovation Excellence',
            year: '2023',
            org: 'Vibrant India – Patna',
            desc: 'Recognized for pioneering fiber laser technology in the industrial sector.',
            icon: Award
        },
        {
            title: 'LASER MACHINE SUPPLIER',
            year: '2023',
            org: 'Vibrant India – New Delhi',
            desc: 'Awarded for consistent quality and volume in laser machine manufacturing.',
            icon: Trophy
        },
        {
            title: 'Eco-Friendly Solution',
            year: '2024',
            org: 'Vibrant India – New Delhi',
            desc: 'Awarded as best LASER MACHINE SUPPLIER',
            icon: ShieldCheck
        },
        {
            title: 'Quality Benchmark',
            year: '2025',
            org: 'Vibrant India – Chennai Edition',
            desc: 'Awarded as best LASER MACHINE SUPPLIER',
            icon: Star
        }
    ];

    const awardImages = [
        { src: award1, title: 'Award & Recognition', cert: 'Certificate 1' },
        { src: award2, title: 'Award & Recognition', cert: 'Certificate 2' }
    ];

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Awards & Exhibitions"
                subtitle="Industry participation, certifications, and global achievements."
                breadcrumb="Awards"
            />

            <section className="section-padding container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Global Recognition</span>
                    <h2 className="text-4xl md:text-6xl mb-8">Marking Our Success</h2>
                    <p className="text-text-muted text-lg max-w-3xl mx-auto">
                        Arrow Laser Machine participates in major global trade shows and exhibitions, showcasing our commitment to innovation and quality in the laser industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-dark-800 border border-dark-700 p-10 rounded-sm relative overflow-hidden group hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-16 translate-x-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />

                            <div className="flex items-start space-x-6 relative z-10">
                                <div className="p-4 bg-dark-900 border border-dark-700 rounded-sm group-hover:bg-primary group-hover:text-dark-900 transition-colors duration-500">
                                    <award.icon size={32} />
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 text-primary font-mono text-sm mb-2">
                                        <span>{award.year}</span>
                                        <span className="w-8 h-[1px] bg-primary/30" />
                                        <span>{award.org}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">{award.title}</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {award.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Awards & Certifications Gallery */}
                <div className="mt-20">
                    <div className="text-center mb-16">
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block">Certifications</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest">Awards & Certifications</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Recognized globally for excellence in laser technology and innovation
                        </p>
                    </div>

                    {/* Centered Award Images Grid */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                            {awardImages.map((award, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative bg-dark-900 border border-dark-700 rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage(award)}
                                >
                                    {/* Award Image */}
                                    <div className="aspect-[4/3] bg-dark-950 overflow-hidden relative flex items-center justify-center">
                                        <img
                                            src={award.src}
                                            alt={award.title}
                                            className="max-w-full max-h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        {/* Award number badge */}
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                                            <span className="text-dark-900 font-black text-lg">{i + 1}</span>
                                        </div>

                                        {/* Preview Icon - Shows on Hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-900/60 backdrop-blur-sm">
                                            <div className="bg-primary p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                                <Eye size={32} className="text-dark-900" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Award info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 via-dark-900/95 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-12 h-1 bg-primary mb-3 group-hover:w-full transition-all duration-500" />
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                                            {award.title}
                                        </h3>
                                        <p className="text-text-muted text-xs font-mono mt-1">{award.cert}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Exhibition Section */}
                {/* <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8">Exhibitions</span>
                            <h2 className="text-4xl font-bold text-white mb-8">Showcasing Innovation <br /> on the Global Stage</h2>
                            <p className="text-text-body mb-8 leading-relaxed">
                                Each year, Arrow Laser Machine exhibits at leading industrial trade shows across Ahmedabad and India. These events allow us to demonstrate our latest laser machines, interact with our valued clients, and stay at the forefront of laser technology trends.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 text-text-muted">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span>Vibrant Gujarat Global Summit</span>
                                </div>
                                <div className="flex items-center space-x-4 text-text-muted">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span>Engimach Industrial Exhibition</span>
                                </div>
                                <div className="flex items-center space-x-4 text-text-muted">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span>International Jewellery Expo</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-video bg-dark-800 border border-dark-700 rounded-sm overflow-hidden p-2"
                        >
                            <img
                                src={award1}
                                alt="Exhibition Hall"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div> */}
            </section>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full bg-dark-900 border-2 border-primary/30 rounded-sm overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-3 bg-dark-900/80 hover:bg-primary border border-dark-700 hover:border-primary rounded-full transition-all duration-300 group"
                            >
                                <X size={24} className="text-white group-hover:text-dark-900 transition-colors" />
                            </button>

                            {/* Modal Header */}
                            <div className="bg-dark-800 border-b border-dark-700 p-6">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-primary font-mono text-sm mt-1">{selectedImage.cert}</p>
                            </div>

                            {/* Modal Image */}
                            <div className="p-8 bg-dark-950">
                                <div className="relative">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-sm"
                                    />
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-dark-800 border-t border-dark-700 p-4 flex justify-center">
                                <div className="flex items-center space-x-2 text-text-muted text-sm">
                                    <Eye size={16} className="text-primary" />
                                    <span>Click outside or press ESC to close</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Awards;
