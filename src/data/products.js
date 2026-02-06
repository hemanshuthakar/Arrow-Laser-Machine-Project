
import fiberMarking from '../assets/images/product-fiber-marking.jpg';
import flyMarking from '../assets/images/product-fly-marking.jpg';
import uvMarking from '../assets/images/product-uv-marking.jpg';
import co2Marking from '../assets/images/product-co2-marking.jpg';
import co2Cutting from '../assets/images/product-co2-cutting.jpg';
import fiberJewelry from '../assets/images/product-fiber-jewelry.jpg';
import jewelryEngraving from '../assets/images/product-jewelry-engraving.jpg';
import precisionEng from '../assets/images/precision-engineering.png';

import catMarking from '../assets/images/cat-marking.png';
import catWelding from '../assets/images/cat-welding.png';
import catCutting from '../assets/images/cat-cutting.png';
import catCleaning from '../assets/images/cat-cleaning.png';

import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';

import indJewelry from '../assets/images/industries/ind_jewelry.png';

// Import Application Highlights for Product 7 (Jewelry Cutting)
import jewelApp1 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_3jcttm3jcttm3jct.png';
import jewelApp2 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_c6f8w4c6f8w4c6f8.png';
import jewelApp3 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_eens6neens6neens.png';
import jewelApp4 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_gemvxvgemvxvgemv.png';
import jewelApp5 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_haxa7bhaxa7bhaxa.png';
import jewelApp6 from '../assets/images/application-highlight/7 Jwellery Cutting & Engraving/Gemini_Generated_Image_nm772lnm772lnm77.png';

// Import Application Highlights for Product 8 (Welding & Rust Cleaning)
import weldApp1 from '../assets/images/application-highlight/8 Welding and Rust cleaning/ChatGPT Image Feb 6, 2026, 01_57_47 PM.png';
import weldApp2 from '../assets/images/application-highlight/8 Welding and Rust cleaning/ChatGPT Image Feb 6, 2026, 01_57_54 PM.png';
import weldApp3 from '../assets/images/application-highlight/8 Welding and Rust cleaning/ChatGPT Image Feb 6, 2026, 01_57_57 PM.png';
import weldApp4 from '../assets/images/application-highlight/8 Welding and Rust cleaning/Gemini_Generated_Image_a565a4a565a4a565.png';
import weldApp5 from '../assets/images/application-highlight/8 Welding and Rust cleaning/Gemini_Generated_Image_b2hzx4b2hzx4b2hz.png';
import weldApp6 from '../assets/images/application-highlight/8 Welding and Rust cleaning/Gemini_Generated_Image_b67n8qb67n8qb67n.png';
import weldApp7 from '../assets/images/application-highlight/8 Welding and Rust cleaning/Gemini_Generated_Image_g8n12sg8n12sg8n1.png';
import weldApp8 from '../assets/images/application-highlight/8 Welding and Rust cleaning/Gemini_Generated_Image_i5k4v6i5k4v6i5k4.png';

export const products = [
    {
        id: 1,
        name: 'Fiber Laser Marking Machine',
        category: 'Marking',
        spec: '20W | 30W | 50W | 100W',
        price: 'Contact for Quote',
        description: 'Arrow Fiber laser marking machines are high-precision marking systems that use fiber laser technology to engrave, etch, or mark various materials. They are widely used in industries such as Metals, automotive, electronics, jewelry, medical devices, and packaging due to their speed, accuracy, and durability.',
        features: [
            'High-speed and precise marking',
            'Long-lasting, maintenance-free operation',
            'Works on metals, plastics, ceramics, and more',
            'Non-contact, non-damaging process',
            'Low power consumption and high efficiency'
        ],
        applications: [
            'Serial numbers & barcodes',
            'Logos & branding',
            'QR codes & UID marking',
            'Deep engraving on metals',
            'Anodized aluminum marking',
            'Kitchen Utensils & Jewelry',
            'Hardware & Bath Fittings',
            'Electrical Parts & LEDS'
        ],
        details: [
            'Laser Type: Pulsed Fiber Laser',
            'Laser Output Power: 20W| 30W|50W| 100W Watt (MAX LASER)',
            'Wavelength: 1064 nm',
            'Output Power Stability (Typical): 5%',
            'Power Adjusting Range: 1 - 100 %',
            'Resolution Frequency: 20 - 80 KHz',
            'Beam Quality (M²): < 1.8',
            'Linear Speed: 8000 mm/sec',
            'Marking Depth: 0.01 – 1.5 mm (Material Depended)',
            'Red Alignment Laser: Yes',
            'Min. Line Width: 0.02 mm',
            'Marking Area: 180*180 mm Standard (Optional 100*100 to 300*300)',
            'Axis Up-Down: 800 mm (Customized as per request)',
            'Min. Character Height: 0.2 mm',
            'Repetition Accuracy: 0.2 μm',
            'Supporting Files: SVG / DXF / DWG/ PLT / JPEG / BMP / PNG',
            'Cooling System: Air Cooling System',
            'Software: EZCAD Original Latest Industry Standard',
            'Power Supply: 220V / 50Hz',
            'Operating System: Windows 10'
        ],
        images: [
            fiberMarking,
            catMarking,
            fiberJewelry
        ],
        tags: ['Pulsed Fiber', 'EZCAD', 'High Precision', 'Industrial']
    },
    {
        id: 2,
        name: 'Fly Laser Marking Machine',
        category: 'Marking',
        spec: '20W–100W',
        price: 'Contact for Quote',
        description: 'A fly laser marking machine is primarily used for high-speed, continuous marking on products moving along a production line, enabling efficient application of serial numbers, batch codes, date codes, barcodes, QR codes, logos, and other identifying information.',
        features: [
            'High-Speed Marking – Works in real-time on moving objects',
            'Non-Contact Process – Ensures no damage to the material',
            'Permanent Marking – Resistant to wear, heat, and chemicals',
            'Supports Multiple Materials – Metals, plastics, glass, paper, more',
            'Integration with Production Lines – Compatible with conveyors'
        ],
        applications: [
            'Food & beverage packaging (plastic, glass, cartons)',
            'Pharmaceutical bottles and blister packs',
            'Cosmetic and personal care products',
            'Mobile phone components',
            'Printed Circuit Boards (PCBs)',
            'Electrical wires and cables',
            'Engine parts and metal components',
            'Tires and rubber products'
        ],
        details: [
            'Laser Power: 20W / 30W / 50W / 60W / 100W',
            'Mode of Operation: Pulsed Laser',
            'Laser Type: Fiber Laser (Raycus/Max/JPT/IPG)',
            'Marking Speed: 12,000 mm/sec',
            'Controller: High Resolution Scanner/Galvo',
            'Wavelength: 1064 nm',
            'Interface: USB / Ethernet',
            'Fixtures: Nylon Fixture for Accurate Position',
            'Dimension: 1600 x 750 x 750 mm',
            'Encoder System: 1024 PPR Kubler (Made in USA)',
            'Power Supply: 230V AC 50/60Hz - Single Phase'
        ],
        images: [
            flyMarking,
            catMarking,
            fiberMarking
        ],
        tags: ['Continuous Marking', 'On-the-fly', 'Production Line']
    },
    {
        id: 3,
        name: 'UV Laser Marking Machine',
        category: 'Marking',
        spec: '3W / 5W / 10W',
        price: 'Contact for Quote',
        description: 'High-precision laser system widely used for marking delicate or heat-sensitive materials using "cold marking" (355nm) which minimalizes heat transfer, reducing the risk of damage or deformation.',
        features: [
            'Wavelength: 355nm - Cold Marking',
            'Marking Precision: High (suitable for micro text, logos, barcodes)',
            'No thermal stress: Ideal for sensitive materials',
            'Marking Speed: Fast, suitable for high-volume production',
            'Cooling Method: Air or water cooling'
        ],
        applications: [
            'PCB boards – marking without damaging circuitry',
            'Microchips & semiconductors – high-precision micro text',
            'Medical devices – scalpels, forceps with UDI',
            'Pharmaceutical bottles, blister packs, syringes',
            'Laptops & mobile accessories logos',
            'Glass bottles & Ceramic parts without heat cracks'
        ],
        details: [
            'Model: ALM-UV',
            'Laser Type: UV Laser',
            'Laser Wavelength: 355 nm',
            'Average Output Power: 3W/5W/10W',
            'Modulation Frequency Range: 20 kHz - 80 kHz',
            'Maximum Speed: 7000 mm/s',
            'Resolution: 0.001 mm',
            'Re-positioning Precision: 0.003 mm',
            'Marking Range: 110 x 110 mm or 200 x 200 mm',
            'Minimum Line Width: 0.01 mm',
            'Cooling System: Water Cooling',
            'Power Supply: 0.5 KW / AC 220V / 50Hz',
            'Environmental Requirements: 0-35°C, 90% Humidity'
        ],
        images: [
            uvMarking,
            catMarking,
            gallery3
        ],
        tags: ['Cold Marking', 'Sensitive Materials', 'Micro-Marking']
    },
    {
        id: 4,
        name: 'CO2 Laser Marking Machine',
        category: 'Marking',
        spec: '20W–100W',
        price: 'Contact for Quote',
        description: 'Engineered for fast, high-precision marking on organic and non-metallic materials like wood, glass, plastics, leather, paper, and acrylic, delivering outstanding accuracy.',
        features: [
            'Best for non-metals like wood, acrylic, glass, plastic',
            'Permanent, high-contrast marking without physical contact',
            'Fast marking speed suitable for industrial production',
            'No consumables – clean and cost-effective'
        ],
        applications: [
            'Packaging – batch codes, barcodes, logos',
            'FMCG / Food & Beverage – PET bottles, labels, wrappers',
            'Decor & Crafts – wood, leather, acrylic engravings',
            'Textiles & Garments – fabric designs, denim patterns',
            'Stationery & Gifts – pens, diaries, trophies'
        ],
        details: [
            'Model Type: CO2',
            'Max Laser Power: 20W/30W/50W/100W',
            'Laser Wavelength: 10.6 µm',
            'Laser Repetitive Rate: 20 KHz',
            'Marking Range: 100 x 100 mm to 1000 x 1000 mm',
            'Marking Depth: ≤2 mm (according to material)',
            'Linear Speed: ≤7000 mm/s',
            'Min. Character: 0.20 mm',
            'Min. Linear Width: 0.05 mm',
            'Repeatability: ±0.01 mm',
            'Power Consumption: 800W to 4KW',
            'Electricity Req: 220V / 50Hz'
        ],
        images: [
            co2Marking,
            gallery6,
            catMarking
        ],
        tags: ['Non-Metallic', 'Organic Materials', 'Wood Engraving']
    },
    {
        id: 5,
        name: 'CO2 Laser Engraving and Cutting Machine',
        category: 'Cutting',
        spec: '60W–150W',
        price: 'Contact for Quote',
        description: 'Highly versatile tools that use a CO2 laser beam (10.6 μm) to engrave, cut, or mark non-metallic materials with clean edges and precision speed.',
        features: [
            'High precision and repeatability',
            'Non-contact processing – no mechanical pressure',
            'Produces sealed, smooth edges with minimal post-processing',
            'Supports wide range of file formats (DXF, PLT, RDWorks)',
            'Handle complex shapes and intricate designs'
        ],
        applications: [
            'Signage – logos, letter cut-outs, acrylic signs',
            'Furniture & Decor – laser-cut panels, wood inlays',
            'Fashion & Textiles – fabric engraving, leather cutting',
            'Packaging – precision cuts and branded engravings on boxes',
            'Gifts & Crafts – personalized items, awards, trophies'
        ],
        details: [
            'Model: ALM Cut 6090',
            'Working Area: 600*900 mm (Optional up to 1600*1000)',
            'Laser Type: Sealed Glass Co2 Laser Tube/ RF Metal Laser Tube',
            'Laser Power Option: Glass Tube 60/80/100/130/150 Watt',
            'Supply Voltage: AC 230 V ±0.05%',
            'Reposition Accuracy: 0.1 mm (Max)',
            'Cutting Speed: 0~30000 mm/min',
            'Engraving Speed: 0~64000 mm/min',
            'X, Y Axis: LM Guide Rails',
            'Acceleration Speed: 1G'
        ],
        images: [
            co2Cutting,
            catCutting,
            gallery5
        ],
        tags: ['MDF Cutting', 'Acrylic Work', 'Non-Metallic']
    },
    {
        id: 6,
        name: 'Fiber Laser Jewellery Soldering Machine',
        category: 'Welding',
        spec: '200W',
        price: 'Contact for Quote',
        description: 'Precision welding system designed specifically for joining and repairing fine metal components like gold, silver, and platinum in the jewellery industry.',
        features: [
            'High precision & control – perfect for intricate work',
            'Minimal heat impact – protects surrounding stones',
            'No filler material required for many tasks',
            'Clean, strong welds with excellent aesthetics',
            'Observing System: CCD or Microscope'
        ],
        applications: [
            'Ring resizing',
            'Chain and clasp repair',
            'Stone setting reinforcement',
            'Porosity filling',
            'Micro-soldering on watches and eyeglass frames'
        ],
        details: [
            'Model: ALM (P) 200',
            'Laser Wavelength: 1064 nm',
            'Reflector: Ceramic Condenser Cavity',
            'Max Laser Power: 200W',
            'Rated Power: 8KW',
            'Pulse Width: 0.2-2mm',
            'Spot Adjustment Range: 0.1-3mm',
            'Laser Frequency: 1-20HZ',
            'Cooling System: 1P'
        ],
        images: [
            fiberJewelry,
            indJewelry,
            gallery2
        ],
        tags: ['Jewellery Welding', 'Gold & Silver', 'Micro-Welding']
    },
    {
        id: 7,
        name: 'Laser Jewellery Cutting & Engraving Machine',
        category: 'Cutting',
        spec: '50W–200W',
        price: 'Contact for Quote',
        description: 'High-precision laser system tailored for engraving intricate designs and cutting fine patterns on precious metals such as gold, silver, and platinum.',
        features: [
            'Ultra-fine engraving – logos, text, serials, photos',
            'Precision cutting – lightweight charms, pendants, filigree',
            'Works on gold, silver, copper, platinum, stainless steel',
            'Non-contact, no tool wear – perfect for high-value items',
            'High-speed operation with minimal material loss'
        ],
        applications: [
            'Custom name jewellery and branding',
            'Filigree cutting and pattern creation',
            'Photo and fingerprint engraving',
            'Barcode/QR code marking for certification',
            'Luxury watch parts and accessories'
        ],
        details: [
            'Average Output Power: 50W / 60W / 80W / 100W / 200W',
            'Wavelength: 1064 nm',
            'Output Power Stability: 5%',
            'Power Adjusting Range: 1~100%',
            'Resolution Frequency: 50 / 200 KHz (Optional)',
            'Max. Linear Speed: 12000 mm/s',
            'Cutting Thickness: 0.01~2.0 mm (Material Dependent)',
            'Work Area: 110mm x 110mm',
            'Min. Character Height: 0.2 mm'
        ],
        images: [
            jewelryEngraving,
            catCutting,
            catMarking
        ],
        tags: ['Precision Cutting', 'Precious Metals', 'Custom Design'],
        applicationHighlights: [
            jewelApp1, jewelApp2, jewelApp3, jewelApp4, jewelApp5, jewelApp6
        ]
    },
    {
        id: 8,
        name: 'Laser Welding and Rust Cleaning Machine',
        category: 'Cleaning',
        spec: '1000W–3000W',
        price: 'Contact for Quote',
        description: 'Versatile, high-efficiency system designed for precision metal welding and non-contact surface cleaning like rust, paint, and oil removal.',
        features: [
            'Laser Welding: Deep, high-strength welds with minimal distortion',
            'Laser Cleaning: Eco-friendly, chemical-free restoration',
            'Non-contact operation – no abrasion or base damage',
            'Works with carbon steel, stainless, aluminum, copper',
            'Ideal for fabrication, restoration, and maintenance'
        ],
        applications: [
            'Welding in automotive, aerospace, and fabrication',
            'Cleaning of rusted tools, painted surfaces, and joints',
            'Pre-weld or post-weld surface preparation',
            'Restoration of historical metal parts or machinery'
        ],
        details: [
            'Max Laser Power: 1000W/ 1500W/ 2000W/ 3000W',
            'Laser Wavelength: 1080 (+10) nm',
            'Output Fiber Length: 10M',
            'Rated Power: 6KW/ 7KW/ 8KW',
            'Supply Voltage: 1P (230V) or 3P (440V)',
            'Spot Adjustment Range: 0.1-10MM',
            'Laser Frequency: 1-10000Hz',
            'Cooling System: Water cooling',
            'Observing System: Red Light'
        ],
        images: [
            catCleaning,
            catWelding,
            catCutting
        ],
        tags: ['Rust Removal', 'Metal Welding', 'Restoration'],
        applicationHighlights: [
            weldApp1, weldApp2, weldApp3, weldApp4, weldApp5, weldApp6, weldApp7, weldApp8
        ]
    },
    {
        id: 9,
        name: 'Customize Laser Marking',
        category: 'Marking',
        spec: 'Tailored Solutions',
        price: 'Contact for Quote',
        description: 'Tailored laser marking solutions for specific industrial requirements and unique materials. Designed for high speed and precision with custom configurations.',
        features: [
            'Scalable laser power for specific material needs',
            'Customizable marking area and axis control',
            'Specialized fixtures for unique product shapes',
            'Integration with custom software or ERP systems'
        ],
        applications: [
            'Specialized medical instrument marking',
            'Aerospace component identification',
            'Automotive assembly line integration',
            'Large-scale industrial batch marking'
        ],
        details: [
            'Customizable specifications as per request',
            'Tailored for specific industrial materials',
            'Flexible configuration as per industry standards'
        ],
        images: [
            precisionEng,
            catCutting,
            catWelding
        ],
        tags: ['Tailored Solutions', 'Consultancy', 'Custom Engineering']
    }
];
