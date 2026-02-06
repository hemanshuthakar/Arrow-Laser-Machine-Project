import indAutomotive from '../assets/images/industries/ind_automotive.png';
import prodUvMarking from '../assets/images/product-uv-marking.jpg';
import indJewelry from '../assets/images/industries/ind_jewelry.png';
import indWood from '../assets/images/industries/ind_wood.png';
import prodFiberMarking from '../assets/images/product-fiber-marking.jpg';
import indElectronics from '../assets/images/industries/ind_electronics.png';
import prodFlyMarking from '../assets/images/product-fly-marking.jpg';
import catWelding from '../assets/images/cat-welding.png';
import catCutting from '../assets/images/cat-cutting.png';
import catMarking from '../assets/images/cat-marking.png';
import heroMachine from '../assets/images/hero-machine.png';
import indFood from '../assets/images/industries/ind_food.png';
import indGlass from '../assets/images/industries/ind_glass.png';
import indMedical from '../assets/images/industries/ind_medical.png';
import indPackaging from '../assets/images/industries/ind_packaging.png';
import indTextile from '../assets/images/industries/ind_textile.png';
import precisionEng from '../assets/images/precision-engineering.png';

const originalGalleryItems = [
        {
                id: 1,
                type: 'photo',
                url: indAutomotive,
                title: 'Precision Metal Marking',
                category: 'Operation'
        },
        {
                id: 2,
                type: 'photo',
                url: prodUvMarking,
                title: 'High-Precision UV Marking',
                category: 'Operation'
        },
        {
                id: 3,
                type: 'photo',
                url: indJewelry,
                title: 'Jewelry Laser Engraving',
                category: 'Operation'
        },
        {
                id: 4,
                type: 'photo',
                url: indWood,
                title: 'Intricate Wood Cutting',
                category: 'Operation'
        },
        {
                id: 5,
                type: 'photo',
                url: prodFiberMarking,
                title: 'Standalone Fiber System',
                category: 'Machine'
        },
        {
                id: 6,
                type: 'photo',
                url: indElectronics,
                title: 'Electronics Marking Lab',
                category: 'Facility'
        },
        {
                id: 7,
                type: 'video',
                url: prodFlyMarking,
                title: 'High-Speed Fly Marking',
                category: 'Live Demo'
        },
        {
                id: 8,
                type: 'video',
                url: catWelding,
                title: 'Handheld Welding Process',
                category: 'Tutorial'
        }
];

const additionalItems = [
        {
                id: 9,
                type: 'photo',
                url: catCutting,
                title: 'Precision Laser Cutting',
                category: 'Operation'
        },
        {
                id: 10,
                type: 'photo',
                url: catMarking,
                title: 'Industrial Marking',
                category: 'Operation'
        },
        {
                id: 11,
                type: 'photo',
                url: heroMachine,
                title: 'Advanced Laser Systems',
                category: 'Machine'
        },
        {
                id: 12,
                type: 'photo',
                url: indFood,
                title: 'Food Industry Applications',
                category: 'Industry'
        },
        {
                id: 13,
                type: 'photo',
                url: indGlass,
                title: 'Glass Engraving',
                category: 'Operation'
        },
        {
                id: 14,
                type: 'photo',
                url: indMedical,
                title: 'Medical Device Marking',
                category: 'Industry'
        },
        {
                id: 15,
                type: 'photo',
                url: indPackaging,
                title: 'Packaging Solutions',
                category: 'Industry'
        },
        {
                id: 16,
                type: 'photo',
                url: indTextile,
                title: 'Textile Processing',
                category: 'Industry'
        },
        {
                id: 17,
                type: 'photo',
                url: precisionEng,
                title: 'Engineering Excellence',
                category: 'Machine'
        }
];

export const galleryItems = [...originalGalleryItems, ...additionalItems];
// Note: In a real app, videos would have actual URLs and thumbnails
