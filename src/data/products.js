
export const products = [
    { 
        id: 1, 
        name: 'Apex-F1 Fiber Cutter', 
        category: 'Cutting', 
        spec: '3000W - 12000W', 
        price: 'Contact for Quote',
        description: 'High-speed fiber laser cutting machine designed for maximum productivity and precision in sheet metal fabrication. Features industrial-grade CNC control and ultra-stable bridge structure.',
        details: [
            'Working Area: 3000mm x 1500mm',
            'Laser Power: Up to 12000W',
            'Max Speed: 120m/min',
            'Positioning Accuracy: ±0.03mm',
            'Re-positioning Accuracy: ±0.02mm'
        ],
        images: [
            '/assets/images/cat-cutting.png',
            '/assets/images/cat-marking.png',
            '/assets/images/cat-welding.png'
        ],
        tags: ['Industrial', 'High Power', 'CNC Control']
    },
    { 
        id: 2, 
        name: 'PrecisionMark G3', 
        category: 'Marking', 
        spec: 'UV / Fiber / CO2', 
        price: 'Contact for Quote',
        description: 'The ultimate solution for high-speed marking on metal and non-metal surfaces. PrecisionMark G3 offers exceptional beam quality and long-term stability.',
        details: [
            'Marking Area: 110mm x 110mm (Optional up to 300mm)',
            'Pulse Frequency: 20kHz - 80kHz',
            'Min Line Width: 0.01mm',
            'Cooling: Air Cooled',
            'Interface: EZCAD Professional'
        ],
        images: [
            '/assets/images/cat-marking.png',
            '/assets/images/cat-cutting.png',
            '/assets/images/cat-cleaning.png'
        ],
        tags: ['Versatile', 'High Precision', 'Desktop']
    },
    { 
        id: 3, 
        name: 'WeldMaster Robotic', 
        category: 'Welding', 
        spec: '6-Axis Synchronized', 
        price: 'Contact for Quote',
        description: 'Revolutionize your production line with robotic laser welding. Achieve consistent, high-strength welds at speeds up to 10 times faster than traditonal methods.',
        details: [
            'Robot Reach: 1400mm',
            'Degrees of Freedom: 6-Axis',
            'Welding Speed: 0-100mm/s',
            'Laser Source: CW Fiber Laser',
            'Safety: Fully Enclosed Workspace'
        ],
        images: [
            '/assets/images/cat-welding.png',
            '/assets/images/cat-marking.png',
            '/assets/images/cat-cleaning.png'
        ],
        tags: ['Automation', 'Robotic', 'Heavy Duty']
    },
    { 
        id: 4, 
        name: 'CleanJet 500S', 
        category: 'Cleaning', 
        spec: 'Portable Pulses', 
        price: 'Contact for Quote',
        description: 'Eco-friendly industrial cleaning solution for rust, paint, and contaminant removal. Portable and easy to use without any chemical consumables.',
        details: [
            'Average Power: 500W',
            'Pulse Energy: 12mJ',
            'Scanning Width: 10mm - 110mm',
            'Fiber Length: 5m (Standard)',
            'Power Consumption: < 3kW'
        ],
        images: [
            '/assets/images/cat-cleaning.png',
            '/assets/images/cat-welding.png',
            '/assets/images/cat-cutting.png'
        ],
        tags: ['Eco-Friendly', 'Portable', 'Maintenance']
    },
    { 
        id: 5, 
        name: 'Nova Plate Cutter', 
        category: 'Cutting', 
        spec: 'Large Format', 
        price: 'Contact for Quote',
        description: 'Designed for large-scale industrial cutting, the Nova series handles heavy plates with unparalleled ease and precision.',
        details: [
            'Working Area: 6000mm x 2500mm',
            'Max Load: 4000kg',
            'Laser Power: Up to 20kW',
            'Driving System: Dual Rack & Pinion',
            'Gas Control: Automatic Proportional Valve'
        ],
        images: [
            '/assets/images/hero-machine.png',
            '/assets/images/cat-cutting.png',
            '/assets/images/cat-marking.png'
        ],
        tags: ['Large Format', 'Heavy Industry', 'Multi-Gas']
    },
    { 
        id: 6, 
        name: 'MicroTrace Nano', 
        category: 'Marking', 
        spec: 'Sub-Micron Marking', 
        price: 'Contact for Quote',
        description: 'When precision is everything. The MicroTrace Nano provides sub-micron marking capabilities for the electronics and medical device industries.',
        details: [
            'Spot Size: < 20μm',
            'Positioning Resolution: 0.1μm',
            'Laser Type: DPSS / Fiber',
            'Vision System: Auto-Alignment Camera',
            'Environment: Clean Room Compatible'
        ],
        images: [
            '/assets/images/cat-marking.png',
            '/assets/images/cat-welding.png',
            '/assets/images/cat-cleaning.png'
        ],
        tags: ['Nano Tech', 'Electronics', 'Medical']
    }
];
