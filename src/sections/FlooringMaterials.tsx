'use client';
import Image from "next/image";
import { useState } from "react";
import { useModal } from "../context/ModalContext";
import StaggeredAnimation from "../components/StaggeredAnimation";

// TypeScript interfaces
interface MaterialItem {
  type: string;
  image: string;
  description: string;
  price: string;
}

interface MaterialDetails {
  collections: MaterialItem[];
  finishes: MaterialItem[];
}

interface MaterialDetailsMap {
  [key: string]: MaterialDetails;
}

const FlooringMaterials = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('tile');
  const { openModal } = useModal();

  const materials = [
    {
      id: 'tile',
      name: 'Tile',
      description: 'Ceramic, porcelain, and natural stone tiles',
      benefits: ['Water resistant', 'Easy maintenance', 'Durable', 'Versatile designs'],
      priceRange: '$2.99 - $35.00/sq ft',
      image: '/images/tiles/ceramic-tile.jpg',
      bgImage: '/images/tiles/ceramic-tile.jpg'
    },
    {
      id: 'stone',
      name: 'Natural Stone',
      description: 'Marble, granite, travertine, and slate',
      benefits: ['Unique patterns', 'Luxurious appeal', 'Increases home value', 'Long-lasting'],
      priceRange: '$8.99 - $45.00/sq ft',
      image: '/images/tiles/natural-stone.jpg',
      bgImage: '/images/tiles/natural-stone.jpg'
    },
    {
      id: 'vinyl',
      name: 'Luxury Vinyl',
      description: 'Waterproof luxury vinyl plank and tile',
      benefits: ['100% waterproof', 'Comfortable underfoot', 'Easy installation', 'Pet-friendly'],
      priceRange: '$3.25 - $12.99/sq ft',
      image: '/images/tiles/luxury-vinyl.jpg',
      bgImage: '/images/tiles/luxury-vinyl.jpg'
    },
    {
      id: 'wood',
      name: 'Hardwood',
      description: 'Solid and engineered hardwood flooring',
      benefits: ['Timeless beauty', 'Can be refinished', 'Adds warmth', 'Classic appeal'],
      priceRange: '$6.50 - $18.00/sq ft',
      image: '/images/finishes/wood-look.jpg',
      bgImage: '/images/finishes/wood-look.jpg'
    },
    {
      id: 'laminate',
      name: 'Laminate',
      description: 'High-quality laminate with realistic textures',
      benefits: ['Budget-friendly', 'Easy maintenance', 'Scratch resistant', 'Quick installation'],
      priceRange: '$2.75 - $8.50/sq ft',
      image: '/images/finishes/wood-look.jpg',
      bgImage: '/images/finishes/wood-look.jpg'
    }
  ];

  // Your existing tile collections data
  const tileCollections: MaterialItem[] = [
    {
      type: "Ceramic",
      image: "/images/tiles/ceramic-tile.jpg",
      description: "Classic, durable tiles perfect for any space with excellent water resistance and easy maintenance.",
      price: "$2.99 - $8.50/sq ft"
    },
    {
      type: "Porcelain",
      image: "/images/tiles/porcelain-tile.jpg",
      description: "Premium, low-maintenance tiles with exceptional durability. Perfect for both indoor and outdoor applications.",
      price: "$4.50 - $12.75/sq ft"
    },
    {
      type: "Natural Stone",
      image: "/images/tiles/natural-stone.jpg",
      description: "Luxurious marble, travertine, and granite options with unique natural variations and unmatched elegance.",
      price: "$8.99 - $25.00/sq ft"
    },
    {
      type: "Mosaic",
      image: "/images/tiles/mosaic-tile.jpg",
      description: "Artistic patterns for stunning feature walls and backsplashes. Available in glass, stone, and ceramic combinations.",
      price: "$12.50 - $35.00/sq ft"
    },
    {
      type: "Luxury Vinyl",
      image: "/images/tiles/luxury-vinyl.jpg",
      description: "Waterproof, wood-look alternatives with realistic textures and superior moisture resistance for any room.",
      price: "$3.25 - $9.99/sq ft"
    }
  ];

  // Your existing tile finishes data
  const tileFinishes: MaterialItem[] = [
    {
      type: "Matte",
      image: "/images/finishes/matte-finish.jpg",
      description: "Elegant, non-reflective finish for modern spaces that reduces glare and fingerprints perfectly.",
      price: "+$0.50 - $2.00/sq ft"
    },
    {
      type: "Glossy",
      image: "/images/finishes/glossy-finish.jpg",
      description: "High-shine finish for dramatic effect that amplifies light. Perfect for smaller rooms and backsplashes.",
      price: "Standard pricing"
    },
    {
      type: "Textured",
      image: "/images/finishes/textured-finish.jpg",
      description: "Tactile surfaces with natural appeal and enhanced slip resistance for safety and authentic look.",
      price: "+$1.00 - $3.50/sq ft"
    },
    {
      type: "Wood-look",
      image: "/images/finishes/wood-look.jpg",
      description: "Authentic wood aesthetics with tile durability and water resistance. Advanced printing creates realistic grain patterns.",
      price: "+$2.00 - $5.00/sq ft"
    },
    {
      type: "Stone-look",
      image: "/images/finishes/stone-look.jpg",
      description: "Natural stone appearance with modern benefits and consistent sizing for luxury without maintenance issues.",
      price: "+$1.50 - $4.25/sq ft"
    }
  ];

  const materialDetails: MaterialDetailsMap = {
    tile: {
      collections: tileCollections,
      finishes: tileFinishes
    },
    stone: {
      collections: [
        {
          type: "Marble Slabs",
          image: "/images/stone/marble-slabs.jpg",
          description: "Elegant natural marble for countertops and feature walls with unique veining patterns.",
          price: "$15.00 - $45.00/sq ft"
        },
        {
          type: "Granite",
          image: "/images/stone/granite.jpg",
          description: "Durable granite slabs perfect for countertops with superior scratch and heat resistance.",
          price: "$12.00 - $35.00/sq ft"
        },
        {
          type: "Travertine",
          image: "/images/stone/travertine.jpg",
          description: "Natural limestone with distinctive texture, perfect for both indoor and outdoor applications.",
          price: "$8.99 - $18.00/sq ft"
        },
        {
          type: "Slate",
          image: "/images/stone/slate.jpg",
          description: "Rustic natural stone with rich colors and textures for sophisticated contemporary designs.",
          price: "$10.00 - $22.00/sq ft"
        }
      ],
      finishes: [
        {
          type: "Polished",
          image: "/images/finishes/glossy-finish.jpg",
          description: "High-gloss finish that enhances natural stone colors and patterns beautifully.",
          price: "Standard pricing"
        },
        {
          type: "Honed",
          image: "/images/finishes/matte-finish.jpg",
          description: "Smooth matte finish that provides elegance while reducing slip hazards effectively.",
          price: "+$1.00 - $3.00/sq ft"
        },
        {
          type: "Brushed",
          image: "/images/finishes/textured-finish.jpg",
          description: "Textured surface with enhanced grip and sophisticated rustic appearance for safety.",
          price: "+$2.00 - $4.00/sq ft"
        }
      ]
    },
    vinyl: {
      collections: [
        {
          type: "Luxury Vinyl Plank (LVP)",
          image: "/images/vinyl/luxury-vinyl-plank.jpg",
          description: "Wood-look waterproof flooring with realistic textures and superior durability for any room.",
          price: "$4.25 - $12.99/sq ft"
        },
        {
          type: "Luxury Vinyl Tile (LVT)",
          image: "/images/vinyl/luxury-vinyl-tile.jpg",
          description: "Stone and ceramic looks with waterproof protection and comfort underfoot.",
          price: "$3.25 - $9.99/sq ft"
        },
        {
          type: "Rigid Core Vinyl",
          image: "/images/vinyl/rigid-core-vinyl.jpg",
          description: "Enhanced stability and click-lock installation with superior indentation resistance.",
          price: "$5.50 - $11.75/sq ft"
        },
        {
          type: "Sheet Vinyl",
          image: "/images/vinyl/sheet-vinyl.jpg",
          description: "Seamless waterproof coverage ideal for kitchens, bathrooms, and high-traffic areas.",
          price: "$2.99 - $7.50/sq ft"
        }
      ],
      finishes: [
        {
          type: "Wood-look",
          image: "/images/finishes/wood-look.jpg",
          description: "Realistic wood grain patterns with waterproof protection and authentic textures.",
          price: "Standard pricing"
        },
        {
          type: "Stone-look",
          image: "/images/finishes/stone-look.jpg",
          description: "Natural stone appearance with consistent sizing and superior moisture resistance.",
          price: "Standard pricing"
        },
        {
          type: "Abstract",
          image: "/images/finishes/textured-finish.jpg",
          description: "Modern artistic patterns and designs for contemporary and unique spaces.",
          price: "+$1.00 - $2.50/sq ft"
        }
      ]
    },
    wood: {
      collections: [
        {
          type: "Solid Hardwood",
          image: "/images/wood/solid-hardwood.jpg",
          description: "Traditional 3/4\" solid wood planks that can be refinished multiple times.",
          price: "$8.50 - $18.00/sq ft"
        },
        {
          type: "Engineered Hardwood",
          image: "/images/wood/engineered-hardwood.jpg",
          description: "Stable multi-layer construction perfect for varying humidity environments.",
          price: "$6.50 - $14.99/sq ft"
        },
        {
          type: "Reclaimed Wood",
          image: "/images/wood/reclaimed-wood.jpg",
          description: "Eco-friendly reclaimed lumber with character, history, and unique patina.",
          price: "$12.00 - $25.00/sq ft"
        },
        {
          type: "Exotic Hardwood",
          image: "/images/wood/exotic-hardwood.jpg",
          description: "Unique species like Brazilian Cherry and Teak with distinctive grain patterns.",
          price: "$15.00 - $30.00/sq ft"
        }
      ],
      finishes: [
        {
          type: "Smooth",
          image: "/images/finishes/glossy-finish.jpg",
          description: "Classic smooth finish that highlights natural wood beauty and grain patterns.",
          price: "Standard pricing"
        },
        {
          type: "Hand-scraped",
          image: "/images/finishes/textured-finish.jpg",
          description: "Artisan-crafted texture that adds character and hides minor scratches effectively.",
          price: "+$2.00 - $4.00/sq ft"
        },
        {
          type: "Wire-brushed",
          image: "/images/finishes/textured-finish.jpg",
          description: "Subtle texture that enhances grain definition while maintaining smooth feel.",
          price: "+$1.50 - $3.00/sq ft"
        }
      ]
    },
    laminate: {
      collections: [
        {
          type: "Traditional Laminate",
          image: "/images/laminate/traditional-laminate.jpg",
          description: "Classic wood-look patterns with AC3-AC5 durability ratings for residential use.",
          price: "$2.75 - $6.50/sq ft"
        },
        {
          type: "Waterproof Laminate",
          image: "/images/laminate/waterproof-laminate.jpg",
          description: "Enhanced moisture protection with sealed edges for kitchen and bathroom applications.",
          price: "$4.25 - $8.50/sq ft"
        },
        {
          type: "Wide Plank Laminate",
          image: "/images/laminate/wide-plank-laminate.jpg",
          description: "Modern wider board styles that create spacious, contemporary looks efficiently.",
          price: "$3.50 - $7.99/sq ft"
        },
        {
          type: "Textured Laminate",
          image: "/images/laminate/textured-laminate.jpg",
          description: "Realistic surface textures that mimic authentic hardwood and stone materials.",
          price: "$4.00 - $8.25/sq ft"
        }
      ],
      finishes: [
        {
          type: "Embossed",
          image: "/images/finishes/textured-finish.jpg",
          description: "Synchronized texture that matches the visual pattern for realistic appearance.",
          price: "Standard pricing"
        },
        {
          type: "High Gloss",
          image: "/images/finishes/glossy-finish.jpg",
          description: "Shiny finish that creates dramatic impact and enhances color depth.",
          price: "+$0.50 - $1.50/sq ft"
        },
        {
          type: "Matte",
          image: "/images/finishes/matte-finish.jpg",
          description: "Low-sheen finish that reduces glare while providing modern sophistication.",
          price: "+$0.25 - $1.00/sq ft"
        }
      ]
    }
  };

  return (
    <section id="flooring-materials" className="flooring-materials-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Complete Flooring Solutions
          </h2>
          <p className="text-center text-base sm:text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
            From premium tiles to luxury vinyl and hardwood, discover the perfect flooring material for every space in your home with expert installation
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {materials.map((material) => (
            <button
              key={material.id}
              onClick={() => setSelectedMaterial(material.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedMaterial === material.id
                  ? 'bg-primary text-warmwhite shadow-lg'
                  : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-warmwhite'
              }`}
            >
              <span className="text-2xl">{material.name}</span>
            </button>
          ))}
        </div>

        {/* Material Overview */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gold/20 text-center relative overflow-hidden" style={{ 
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(139, 21, 56, 0.03) 10px,
              rgba(139, 21, 56, 0.03) 20px
            )`
          }}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {materials.find(m => m.id === selectedMaterial)?.name}
              </h3>
              <p className="text-charcoal/80 mb-4 max-w-2xl mx-auto">
                {materials.find(m => m.id === selectedMaterial)?.description}
              </p>
              <div className="bg-gold text-charcoal px-6 py-2 rounded-full font-bold text-lg inline-block mb-6">
                {materials.find(m => m.id === selectedMaterial)?.priceRange}
              </div>
              
              {/* Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {materials.find(m => m.id === selectedMaterial)?.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-charcoal">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collections and Finishes Grid */}
        <div className={`grid gap-8 lg:gap-12 ${selectedMaterial === 'tile' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 justify-items-center'}`}>
          {/* Collections */}
          <div className={`relative rounded-3xl overflow-hidden shadow-xl ${selectedMaterial !== 'tile' ? 'w-full max-w-2xl' : ''}`} style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-warmwhite mb-6">
                {materials.find(m => m.id === selectedMaterial)?.name} Collections
              </h3>
              <StaggeredAnimation animation="slide-in-left" staggerDelay={150} className="space-y-6">
                {materialDetails[selectedMaterial]?.collections?.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 relative">
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative w-full lg:w-48 h-48 lg:h-48">
                        <Image 
                          src={item.image} 
                          alt={item.type} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1 relative">
                        <h4 className="text-warmwhite font-bold text-lg mb-2">{item.type}</h4>
                        <p className="text-warmwhite italic text-sm leading-relaxed">{item.description}</p>
                        {/* Price in bottom right */}
                        <div className="absolute bottom-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-bold">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={openModal}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Finishes & Styles - Only show for tile */}
          {selectedMaterial === 'tile' && (
            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
              <div className="relative z-10 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-warmwhite mb-6">
                  {materials.find(m => m.id === selectedMaterial)?.name} Finishes & Styles
                </h3>
                <StaggeredAnimation animation="slide-in-right" staggerDelay={150} className="space-y-6">
                  {materialDetails[selectedMaterial]?.finishes?.map((finish, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 relative">
                      <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full lg:w-48 h-48 lg:h-48">
                          <Image 
                            src={finish.image} 
                            alt={finish.type} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1 relative">
                          <h4 className="text-warmwhite font-bold text-lg mb-2">{finish.type}</h4>
                          <p className="text-warmwhite italic text-sm leading-relaxed">{finish.description}</p>
                          {/* Price in bottom right */}
                          <div className="absolute bottom-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-bold">
                            {finish.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggeredAnimation>
                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <button 
                    onClick={openModal}
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Explore Options
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-warmwhite border-2 border-[#D4AF37] rounded-lg p-6 sm:p-8 shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Transform Your Space?</h3>
            <p className="text-lg mb-6 text-charcoal/80">
              Schedule a free consultation to explore our complete flooring collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openModal}
                className="bg-gold text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={openModal}
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
              >
                Visit Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlooringMaterials;