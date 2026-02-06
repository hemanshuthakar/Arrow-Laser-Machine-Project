import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import catCutting from '../assets/images/cat-cutting.png';
import catMarking from '../assets/images/cat-marking.png';
import catWelding from '../assets/images/cat-welding.png';
import indAutomotive from '../assets/images/industries/ind_automotive.png';
import indElectronics from '../assets/images/industries/ind_electronics.png';
import indFood from '../assets/images/industries/ind_food.png';
import indGlass from '../assets/images/industries/ind_glass.png';
import indJewelry from '../assets/images/industries/ind_jewelry.png';
import indMedical from '../assets/images/industries/ind_medical.png';
import indPackaging from '../assets/images/industries/ind_packaging.png';
import indTextile from '../assets/images/industries/ind_textile.png';
import indWood from '../assets/images/industries/ind_wood.png';
import prodFiberMarking from '../assets/images/product-fiber-marking.jpg';
import prodFlyMarking from '../assets/images/product-fly-marking.jpg';
import prodUvMarking from '../assets/images/product-uv-marking.jpg';
import precisionEng from '../assets/images/precision-engineering.png';

const Industries = () => {
    const industries = [
        { name: 'Acrylic & Laminates', image: catCutting },
        { name: 'Advertising and Signage', image: indWood },
        { name: 'Agricultural Equipment', image: prodFiberMarking },
        { name: 'Automotive Industry', image: indAutomotive },
        { name: 'Bottles & Beverage', image: indGlass },
        { name: 'Brass & Copper Parts', image: catMarking },
        { name: 'Cable & Wires', image: indElectronics },
        { name: 'Cosmetics & Novelty', image: indPackaging },
        { name: 'Cutting Tools & Dies', image: catWelding },
        { name: 'Defence & Aerospace', image: precisionEng },
        { name: 'Electrical & Electronics', image: prodUvMarking },
        { name: 'Elevator & Escalator', image: catMarking },
        { name: 'Food & FMCG', image: indFood },
        { name: 'Furniture & Fabrication', image: indWood },
        { name: 'Gems & Jewellery', image: indJewelry },
        { name: 'Gift & Article', image: indJewelry },
        { name: 'Glass & Optical', image: indGlass },
        { name: 'Gold & Silver', image: indJewelry },
        { name: 'Hardware & Bathware', image: catWelding },
        { name: 'Kitchen & Home Appliances', image: catMarking },
        { name: 'Leather & Rubber', image: indTextile },
        { name: 'LED Bulb & Switches', image: indElectronics },
        { name: 'Machine Tools & Equipments', image: prodFiberMarking },
        { name: 'Metals & Non Metals', image: indAutomotive },
        { name: 'Mobile Accessories & Gadgets', image: indElectronics },
        { name: 'Motor & Bearing', image: prodFiberMarking },
        { name: 'Pharma & Medical', image: indMedical },
        { name: 'Pipes & Fittings', image: catMarking },
        { name: 'Ply & Woods', image: indWood },
        { name: 'Print & Packaging', image: prodFlyMarking },
        { name: 'Pumps & Valves', image: catMarking },
        { name: 'Steel Utensils', image: catWelding },
        { name: 'Kitchenware & Homeware', image: catMarking },
        { name: 'Textile & Fabric', image: indTextile },
        { name: 'Watch & Optics', image: indGlass }
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
