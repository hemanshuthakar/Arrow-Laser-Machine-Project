import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: 'Information Collection',
            icon: Eye,
            content: 'We collect information that you provide directly to us when you fill out an inquiry form, request technical support, or communicate with us. This may include your name, email address, phone number, and company details.'
        },
        {
            title: 'Use of Information',
            icon: Shield,
            content: 'The information we collect is used to provide, maintain, and improve our services, to process your inquiries, to send technical notices, updates, and support messages, and to communicate with you about products and services.'
        },
        {
            title: 'Data Security',
            icon: Lock,
            content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.'
        },
        {
            title: 'Cookies usage',
            icon: Globe,
            content: 'We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser that enables the site\'s systems to recognize your browser and capture certain information.'
        },
        {
            title: 'Third-Party Disclosure',
            icon: FileText,
            content: 'We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website.'
        },
        {
            title: 'Policy Updates',
            icon: Bell,
            content: 'Arrow Laser Machine reserves the right to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes.'
        }
    ];

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we handle and protect your data."
                breadcrumb="Privacy Policy"
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
                                Introduction
                            </h2>
                            <p className="text-text-body text-lg leading-relaxed">
                                At Arrow Laser Machine, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services. By using our website, you consent to the data practices described in this policy.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-dark-800 border border-dark-700 rounded-sm hover:border-primary/50 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-dark-900 transition-all">
                                        <section.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">{section.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{section.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-20 p-8 border-t border-dark-700 text-center"
                        >
                            <p className="text-text-muted italic">Last updated: February 11, 2026</p>
                            <p className="text-text-muted mt-4">
                                If you have any questions about this Privacy Policy, please contact us at <br />
                                <span className="text-primary font-bold">arrowlasermachine@gmail.com</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
