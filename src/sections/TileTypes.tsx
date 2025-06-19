'use client';
import Image from "next/image";

const tileCollections = [
  {
    type: "Ceramic",
    image: "/images/tiles/ceramic-tile.jpg",
    description: "Classic, durable tiles perfect for any space"
  },
  {
    type: "Porcelain",
    image: "/images/tiles/porcelain-tile.jpg",
    description: "Premium, low-maintenance tiles with exceptional durability"
  },
  {
    type: "Natural Stone",
    image: "/images/tiles/natural-stone.jpg",
    description: "Luxurious marble, travertine, and granite options"
  },
  {
    type: "Mosaic",
    image: "/images/tiles/mosaic-tile.jpg",
    description: "Artistic patterns for stunning feature walls"
  },
  {
    type: "Luxury Vinyl",
    image: "/images/tiles/luxury-vinyl.jpg",
    description: "Waterproof, wood-look alternatives"
  }
];

const tileFinishes = [
  {
    type: "Matte",
    image: "/images/finishes/matte-finish.jpg",
    description: "Elegant, non-reflective finish for modern spaces"
  },
  {
    type: "Glossy",
    image: "/images/finishes/glossy-finish.jpg",
    description: "High-shine finish for dramatic effect"
  },
  {
    type: "Textured",
    image: "/images/finishes/textured-finish.jpg",
    description: "Tactile surfaces with natural appeal"
  },
  {
    type: "Wood-look",
    image: "/images/finishes/wood-look.jpg",
    description: "Authentic wood aesthetics with tile durability"
  },
  {
    type: "Stone-look",
    image: "/images/finishes/stone-look.jpg",
    description: "Natural stone appearance with modern benefits"
  }
];

export default function TileTypes() {
  return (
    <section id="tile-types" className="tile-types-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tile Collection
          </h2>
          <p className="text-xl text-charcoal font-semibold max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of premium tiles and finishes, carefully curated to transform your space with elegance and durability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Premium Tile Collections */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-warmwhite mb-6">Premium Tile Collections</h3>
              <div className="space-y-6">
                {tileCollections.map((tile, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 h-48">
                        <Image 
                          src={tile.image} 
                          alt={tile.type} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h4 className="text-warmwhite font-bold text-lg mb-2">{tile.type}</h4>
                        <p className="text-gold font-bold text-sm leading-relaxed">{tile.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* Tile Finishes & Styles */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)' }}>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-warmwhite mb-6">Tile Finishes & Styles</h3>
              <div className="space-y-6">
                {tileFinishes.map((finish, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-48 h-48">
                        <Image 
                          src={finish.image} 
                          alt={finish.type} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h4 className="text-warmwhite font-bold text-lg mb-2">{finish.type}</h4>
                        <p className="text-gold font-bold text-sm leading-relaxed">{finish.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
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