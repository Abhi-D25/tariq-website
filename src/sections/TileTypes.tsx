'use client';
import Image from "next/image";
import { useModal } from "../context/ModalContext";
import StaggeredAnimation from "../components/StaggeredAnimation";

const tileCollections = [
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

const tileFinishes = [
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

export default function TileTypes() {
  const { openModal } = useModal();

  return (
    <section id="tile-types" className="tile-types-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Tile Collection
          </h2>
          <p className="text-center text-base sm:text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Discover our extensive range of premium tiles and finishes, carefully curated to transform your space with elegance and durability
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Premium Tile Collections */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-warmwhite mb-6">Premium Tile Collections</h3>
              <StaggeredAnimation animation="slide-in-left" staggerDelay={150} className="space-y-6">
                {tileCollections.map((tile, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 relative">
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative w-full lg:w-48 h-48 lg:h-48">
                        <Image 
                          src={tile.image} 
                          alt={tile.type} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1 relative">
                        <h4 className="text-warmwhite font-bold text-lg mb-2">{tile.type}</h4>
                        <p className="text-warmwhite italic text-sm leading-relaxed">{tile.description}</p>
                        {/* Price in bottom right */}
                        <div className="absolute bottom-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-bold">
                          {tile.price}
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

          {/* Tile Finishes & Styles */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-warmwhite mb-6">Tile Finishes & Styles</h3>
              <StaggeredAnimation animation="slide-in-right" staggerDelay={150} className="space-y-6">
                {tileFinishes.map((finish, index) => (
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
        </div>
      </div>
    </section>
  );
}