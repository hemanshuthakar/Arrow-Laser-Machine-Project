import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

const Industries = () => {
    const industries = [
        { name: 'Acrylic & Laminates', image: '/assets/images/cat-cutting.png' },
        { name: 'Advertising and Signage', image: '/assets/images/industries/ind_wood.png' },
        { name: 'Agricultural Equipment', image: '/assets/images/products/prod_fiber_marking.png' },
        { name: 'Automotive Industry', image: '/assets/images/industries/ind_automotive.png' },
        { name: 'Bottles & Beverage', image: '/assets/images/industries/ind_glass.png' },
        { name: 'Brass & Copper Parts', image: '/assets/images/cat-marking.png' },
        { name: 'Cable & Wires', image: '/assets/images/industries/ind_electronics.png' },
        { name: 'Cosmetics & Novelty', image: '/assets/images/industries/ind_packaging.png' },
        { name: 'Cutting Tools & Dies', image: '/assets/images/cat-welding.png' },
        { name: 'Defence & Aerospace', image: '/assets/images/precision-engineering.png' },
        { name: 'Electrical & Electronics', image: '/assets/images/products/prod_uv_marking.png' },
        { name: 'Elevator & Escalator', image: '/assets/images/cat-marking.png' },
        { name: 'Food & FMCG', image: '/assets/images/industries/ind_food.png' },
        { name: 'Furniture & Fabrication', image: '/assets/images/industries/ind_wood.png' },
        { name: 'Gems & Jewellery', image: '/assets/images/industries/ind_jewelry.png' },
        { name: 'Gift & Article', image: '/assets/images/industries/ind_jewelry.png' },
        { name: 'Glass & Optical', image: '/assets/images/industries/ind_glass.png' },
        { name: 'Gold & Silver', image: '/assets/images/industries/ind_jewelry.png' },
        { name: 'Hardware & Bathware', image: '/assets/images/cat-welding.png' },
        { name: 'Kitchen & Home Appliances', image: '/assets/images/cat-marking.png' },
        { name: 'Leather & Rubber', image: '/assets/images/industries/ind_textile.png' },
        { name: 'LED Bulb & Switches', image: '/assets/images/industries/ind_electronics.png' },
        { name: 'Machine Tools & Equipments', image: '/assets/images/products/prod_fiber_marking.png' },
        { name: 'Metals & Non Metals', image: '/assets/images/industries/ind_automotive.png' },
        { name: 'Mobile Accessories & Gadgets', image: '/assets/images/industries/ind_electronics.png' },
        { name: 'Motor & Bearing', image: '/assets/images/products/prod_fiber_marking.png' },
        { name: 'Pharma & Medical', image: '/assets/images/industries/ind_medical.png' },
        { name: 'Pipes & Fittings', image: '/assets/images/cat-marking.png' },
        { name: 'Ply & Woods', image: '/assets/images/industries/ind_wood.png' },
        { name: 'Print & Packaging', image: '/assets/images/products/prod_fly_marking.png' },
        { name: 'Pumps & Valves', image: '/assets/images/cat-marking.png' },
        { name: 'Steel Utensils', image: '/assets/images/cat-welding.png' },
        { name: 'Kitchenware & Homeware', image: '/assets/images/cat-marking.png' },
        { name: 'Textile & Fabric', image: '/assets/images/industries/ind_textile.png' },
        { name: 'Watch & Optics', image: '/assets/images/industries/ind_glass.png' }
    ];

    return (
        <div className="bg-dark-900 min-h-screen">
            <PageHero
                title="Industries We Serve"
                subtitle="High-performance laser solutions tailored for diverse industrial sectors."
                breadcrumb="Industries"
            />

            <section className="section-padding container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8">Global Impact</span>
                    <h2 className="text-4xl md:text-6xl mb-8">Empowering Diverse Sectors</h2>
                    <p className="text-text-muted text-lg max-w-3xl mx-auto">
                        Arrow Laser Machine solutions are engineered to meet the unique challenges of various industries, delivering precision and efficiency where it matters most.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="group bg-dark-800/60 rounded-xl overflow-hidden border border-dark-700/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-dark-900">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-[1px] bg-primary/60" />
                                    <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Industry</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 min-h-[3.5rem] flex items-center">
                                    {industry.name}
                                </h3>

                                <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center justify-between text-text-muted">
                                    <span className="text-[10px] uppercase tracking-widest font-semibold">Precision Solutions</span>
                                    <CheckCircle2 size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Industries;
