import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Cpu, Zap, Wind, Settings } from 'lucide-react';
import PageHero from '../components/PageHero';
import Counter from '../components/Counter';

const features = [
    {
        title: 'High-Speed Precision Gantry',
        desc: 'Our gantry systems are engineered from aerospace-grade aluminum, reducing inertia and allowing for accelerations up to 2.0G without compromising 0.01mm accuracy.',
        icon: Rocket,
        tag: 'DYNAMIC'
    },
    {
        title: 'Intelligent CNC Controller',
        desc: 'Integrated with proprietary ArrowOS, supporting real-time path optimization and automatic nesting to reduce material waste by up to 25%.',
        icon: Cpu,
        tag: 'BRAIN'
    },
    {
        title: 'Dynamic Focal Length',
        desc: 'Automated zoom head adjusts the laser focus dynamically during the cutting process, ensuring clean edges across varying material thicknesses.',
        icon: Zap,
        tag: 'OPTICS'
    },
    {
        title: 'Active Safety Enclosure',
        desc: 'Full OD6+ certified protective casing with synchronized emergency shut-off sensors, meeting the highest Class 4 laser safety standards.',
        icon: ShieldCheck,
        tag: 'SAFETY'
    }
];

const FeatureList = () => {
    return (
        <section className="section-padding bg-dark-900">
            <div className="container-custom">
                <div className="space-y-32">
                    {features.map((feature, i) => (
                        <div key={i} className={`flex flex-col lg:items-center gap-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1"
                            >
                                <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] tracking-[0.4em] uppercase mb-6">
                                    {feature.tag} Tech
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-white">{feature.title}</h3>
                                <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-xl">
                                    {feature.desc}
                                </p>
                                <div className="flex space-x-6">
                                    <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest">
                                        <Settings size={16} className="text-primary" />
                                        <span>Configurable</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest">
                                        <Wind size={16} className="text-primary" />
                                        <span>Aero-Tested</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="flex-1 aspect-video bg-dark-800 border border-dark-700 rounded-sm flex items-center justify-center relative overflow-hidden group"
                            >
                                <img
                                    src="/assets/images/precision-engineering.png"
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                    alt="Technical Detail"
                                />
                                <feature.icon size={100} className="relative z-10 text-primary/40 group-hover:text-primary transition-colors duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />

                                {/* Laser animation line */}
                                <motion.div
                                    animate={{ left: ['0%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    className="absolute top-0 w-[2px] h-full bg-primary/50 shadow-[0_0_15px_rgba(245,158,11,1)] z-20"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechnicalMetrics = () => {
    const metrics = [
        { label: 'Positioning Accuracy', value: 0.008, unit: 'mm', decimals: 3 },
        { label: 'Max Processing Speed', value: 120, unit: 'm/min' },
        { label: 'Laser Source Stability', value: 99.9, unit: '%', decimals: 1 },
        { label: 'Mean Time Between Failure', value: 50, unit: 'k Hrs' }
    ];

    return (
        <section className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-dark-700 border border-dark-700 rounded-sm overflow-hidden">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-dark-900 p-12 text-center group">
                            <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">{m.label}</span>
                            <div className="text-5xl font-black text-white mb-2 font-mono flex items-baseline justify-center">
                                <Counter value={m.value} decimals={m.decimals} duration={2} />
                                <span className="text-primary text-xl ml-2 uppercase">{m.unit}</span>
                            </div>
                            <div className="w-0 h-[1px] bg-primary mx-auto group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Engineering Mastery"
                subtitle="Uncompromising precision and speed delivered through aerospace-grade components and intelligent control systems."
                breadcrumb="Features"
            />
            <FeatureList />
            <TechnicalMetrics />
        </div>
    );
};

export default Features;
