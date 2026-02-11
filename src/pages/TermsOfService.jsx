import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, AlertTriangle, FileCheck, Hammer, Copyright } from 'lucide-react';
import PageHero from '../components/PageHero';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const terms = [
        {
            title: 'Acceptance of Terms',
            icon: Scale,
            content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules.'
        },
        {
            title: 'Use License',
            icon: FileCheck,
            content: 'Permission is granted to temporarily download one copy of the materials on Arrow Laser Machine\'s website for personal, non-commercial transitory viewing only.'
        },
        {
            title: 'Proprietary Rights',
            icon: Copyright,
            content: 'All contents within this website, including text, graphics, logos, and images, are the property of Arrow Laser Machine and protected by international copyright laws.'
        },
        {
            title: 'Disclaimer',
            icon: AlertTriangle,
            content: 'The materials on Arrow Laser Machine\'s website are provided on an \'as is\' basis. Arrow Laser Machine makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.'
        },
        {
            title: 'Machine Maintenance',
            icon: Hammer,
            content: 'Service and maintenance terms for specific machinery are governed by individual purchase agreements and warranty documents provided at the time of sale.'
        },
        {
            title: 'Liability Limitation',
            icon: ShieldCheck,
            content: 'In no event shall Arrow Laser Machine or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials.'
        }
    ];

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Terms of Service"
                subtitle="Rules and regulations for using Arrow Laser Machine services and website."
                breadcrumb="Terms of Service"
            />

            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-6 border-l-4 border-primary pl-6">
                                Legal Agreement
                            </h2>
                            <p className="text-text-body text-lg leading-relaxed">
                                Welcome to Arrow Laser Machine. These terms of service outline the rules and regulations for the use of Arrow Laser Machine\'s Website, located at Ahmedabad, Gujarat, India. By accessing this website we assume you accept these terms and conditions. Do not continue to use Arrow Laser Machine if you do not agree to take all of the terms and conditions stated on this page.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {terms.map((term, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-dark-800 border-l-2 border-primary/30 flex items-start space-x-6 group hover:bg-dark-900 transition-all"
                                >
                                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                                        <term.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-3">{term.title}</h3>
                                        <p className="text-text-muted leading-relaxed">{term.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 p-8 bg-primary/5 border border-primary/20 rounded-sm">
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Governing Law</h4>
                            <p className="text-text-body">
                                Any claim relating to Arrow Laser Machine\'s website shall be governed by the laws of India without regard to its conflict of law provisions. Individual disputes are subject to the jurisdiction of the courts in Ahmedabad, Gujarat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
