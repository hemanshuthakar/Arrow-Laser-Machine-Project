import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Terminal } from 'lucide-react';
import PageHero from '../components/PageHero';

const faqs = [
    {
        question: 'How long does machine installation take?',
        answer: 'Standard installation typically takes 3-5 business days, which includes physical setup, wiring, laser calibration, and basic operator training.'
    },
    {
        question: 'What is the lifespan of a fiber laser source?',
        answer: 'Most industrial-grade fiber laser sources (Raycus/IPG) are rated for approximately 100,000 working hours of operation under standard maintenance conditions.'
    },
    {
        question: 'Do you provide on-site technical training?',
        answer: 'Yes, every machine purchase includes a 3-day on-site training session for your operators, covering safety, operation, and troubleshooting.'
    },
    {
        question: 'Can your machines cut reflective materials like copper?',
        answer: 'Absolutely. Our high-power fiber laser series with back-reflection protection modules are specifically designed to safely cut copper and brass.'
    },
    {
        question: 'What kind of after-sales support do you offer?',
        answer: 'We offer a 2-year comprehensive warranty, 24/7 remote diagnostics support, and on-site engineering assistance available within 24-48 hours.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Knowledge Base"
                subtitle="Common questions about our industrial laser machinery, technology, and support services."
                breadcrumb="FAQ"
            />

            <div className="container-custom py-24">
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`border border-dark-700 overflow-hidden rounded-sm transition-all duration-300 ${openIndex === i ? 'bg-dark-800 border-primary/30' : 'bg-transparent'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <div className="flex items-center space-x-4">
                                    <Terminal size={18} className={`${openIndex === i ? 'text-primary' : 'text-text-muted group-hover:text-white'}`} />
                                    <span className={`text-lg font-bold ${openIndex === i ? 'text-white' : 'text-text-muted group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : 'text-text-muted rotate-0'}`}
                                    size={20}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-16 pb-8 text-text-muted leading-relaxed relative">
                                            {/* Laser line side indicator */}
                                            <div className="absolute left-10 top-0 bottom-8 w-[1px] bg-primary/30" />
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative center icon */}
            <div className="flex justify-center pb-24 opacity-20">
                <HelpCircle size={80} className="text-dark-700" />
            </div>
        </div>
    );
};

export default FAQ;
