import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, Trophy } from 'lucide-react';
import PageHero from '../components/PageHero';

const Awards = () => {
    const awards = [
        {
            title: 'Innovation Excellence',
            year: '2023',
            org: 'Tech Expo Ahmedabad',
            desc: 'Recognized for pioneering fiber laser technology in the industrial sector.',
            icon: Award
        },
        {
            title: 'Best Laser Supplier',
            year: '2024',
            org: 'Industrial Awards India',
            desc: 'Awarded for consistent quality and volume in laser machine manufacturing.',
            icon: Trophy
        },
        {
            title: 'Eco-Friendly Solution',
            year: '2023',
            org: 'Green Tech Forum',
            desc: 'Acknowledged for energy-efficient laser cleaning and rust removal systems.',
            icon: ShieldCheck
        },
        {
            title: 'Quality Benchmark',
            year: '2024',
            org: 'Manufacturing Summit',
            desc: 'Setting new industry standards for precision in laser engraving.',
            icon: Star
        }
    ];

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

                {/* Exhibition Section */}
                <div className="mt-32">
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
                                src="/assets/images/precision-engineering.png"
                                alt="Exhibition Hall"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Awards;
