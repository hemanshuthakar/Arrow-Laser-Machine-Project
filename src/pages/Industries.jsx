import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

// Industry Images
import acrylicLaminates from '../assets/images/industries/Acrylic & Laminates.jpg';
import advertisingSignage from '../assets/images/industries/Advertising and Signage.jpeg';
import agriculturalEquipment from '../assets/images/industries/Agricultural Equipment.jpg';
import automotiveIndustry from '../assets/images/industries/Automotive Industry.jpg';
import bottlesBeverage from '../assets/images/industries/Bottles & Beverage.jpg';
import brassCopper from '../assets/images/industries/Brass & Copper Parts.jpg';
import cableWires from '../assets/images/industries/Cable & Wires.jpg';
import cosmeticsNovelty from '../assets/images/industries/Cosmetics & Novelty.jpg';
import cuttingTools from '../assets/images/industries/Cutting Tools & Dies.jpg';
import defenceAerospace from '../assets/images/industries/Defence & Aerospace.jpg';
import electricalElectronics from '../assets/images/industries/Electrical & Electronics.jpg';
import elevatorEscalator from '../assets/images/industries/Elevator & Escalator.jpeg';
import foodFMCG from '../assets/images/industries/Food & FMCG.png';
import furnitureFabrication from '../assets/images/industries/Furniture & Fabrication.jpg';
import gemsJewellery from '../assets/images/industries/ind_jewelry.png'; // No exact match name, keeping existing
import giftArticle from '../assets/images/industries/Gift & Article.jpeg';
import glassOptical from '../assets/images/industries/Glass & Optical.jpg';
import goldSilver from '../assets/images/industries/Gold & Silver.jpeg';
import hardwareBathware from '../assets/images/industries/Hardware & Bathware.jpg';
import kitchenHomeAppliances from '../assets/images/industries/Kitchen & Home Appliances.png';
import kitchenwareHomeware from '../assets/images/industries/Kitchenware & Homeware.jpg';
import ledBulbSwitches from '../assets/images/industries/LED Bulb & Switches.jpg';
import leatherRubber from '../assets/images/industries/Leather & Rubber.png';
import machineTools from '../assets/images/industries/Machine Tools & Equipments.jpg';
import metalsNonMetals from '../assets/images/industries/Metals & Non Metals.png';
import mobileAccessories from '../assets/images/industries/Mobile Accessories & Gadgets.jpg';
import motorBearing from '../assets/images/industries/Motor & Bearing.png';
import pharmaMedical from '../assets/images/industries/Pharma & Medical.jpg';
import pipesFittings from '../assets/images/industries/Pipes & Fittings.png';
import plyWoods from '../assets/images/industries/Ply & Woods.png';
import printPackaging from '../assets/images/industries/Print & Packaging.jpg';
import pumpsValves from '../assets/images/industries/Pumps & Valves.jpg';
import steelUtensils from '../assets/images/industries/Steel Utensils.jpg';
import textileFabric from '../assets/images/industries/Textile & Fabric.jpg';
import watchOptics from '../assets/images/industries/Watch & Optics.png';

const Industries = () => {
    const industries = [
        { name: 'Acrylic & Laminates', image: acrylicLaminates },
        { name: 'Advertising and Signage', image: advertisingSignage },
        { name: 'Agricultural Equipment', image: agriculturalEquipment },
        { name: 'Automotive Industry', image: automotiveIndustry },
        { name: 'Bottles & Beverage', image: bottlesBeverage },
        { name: 'Brass & Copper Parts', image: brassCopper },
        { name: 'Cable & Wires', image: cableWires },
        { name: 'Cosmetics & Novelty', image: cosmeticsNovelty },
        { name: 'Cutting Tools & Dies', image: cuttingTools },
        { name: 'Defence & Aerospace', image: defenceAerospace },
        { name: 'Electrical & Electronics', image: electricalElectronics },
        { name: 'Elevator & Escalator', image: elevatorEscalator },
        { name: 'Food & FMCG', image: foodFMCG },
        { name: 'Furniture & Fabrication', image: furnitureFabrication },
        { name: 'Gems & Jewellery', image: gemsJewellery },
        { name: 'Gift & Article', image: giftArticle },
        { name: 'Glass & Optical', image: glassOptical },
        { name: 'Gold & Silver', image: goldSilver },
        { name: 'Hardware & Bathware', image: hardwareBathware },
        { name: 'Kitchen & Home Appliances', image: kitchenHomeAppliances },
        { name: 'Leather & Rubber', image: leatherRubber },
        { name: 'LED Bulb & Switches', image: ledBulbSwitches },
        { name: 'Machine Tools & Equipments', image: machineTools },
        { name: 'Metals & Non Metals', image: metalsNonMetals },
        { name: 'Mobile Accessories & Gadgets', image: mobileAccessories },
        { name: 'Motor & Bearing', image: motorBearing },
        { name: 'Pharma & Medical', image: pharmaMedical },
        { name: 'Pipes & Fittings', image: pipesFittings },
        { name: 'Ply & Woods', image: plyWoods },
        { name: 'Print & Packaging', image: printPackaging },
        { name: 'Pumps & Valves', image: pumpsValves },
        { name: 'Steel Utensils', image: steelUtensils },
        { name: 'Kitchenware & Homeware', image: kitchenwareHomeware },
        { name: 'Textile & Fabric', image: textileFabric },
        { name: 'Watch & Optics', image: watchOptics }
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
