'use client';
import Image from "next/image";
import { useState } from "react";
import { useModal } from "../context/ModalContext";
import StaggeredAnimation from "../components/StaggeredAnimation";

const galleryItems = [
  {
    before: "/images/kitchen-before-1.jpg",
    after: "/images/kitchen-after-1.jpg",
    title: "Modern Kitchen Makeover",
    desc: "Subway tiles with quartz countertops",
  },
  {
    before: "/images/bathroom-before-1.jpg",
    after: "/images/bathroom-after-1.jpg",
    title: "Luxury Master Bath",
    desc: "Natural stone with heated floors",
  },
  {
    before: "/images/kitchen-before-2.jpg",
    after: "/images/kitchen-after-2.jpg",
    title: "Contemporary Kitchen",
    desc: "Large format porcelain with waterfall island",
  },
];

export default function Gallery() {
  const { openModal } = useModal();

  return (
    <section id="gallery" className="gallery-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <Image src="/images/premium-tile-display.jpg" alt="Premium tile display" fill className="object-cover w-full h-full rounded-3xl" />
          <div className="absolute inset-0 bg-darkoverlay rounded-3xl" />
        </div>
        <div className="gallery-overlay relative z-10 px-4 sm:px-6 py-12">
          <h2 className="section-title text-warmwhite text-center">Stunning Transformations</h2>
          <p className="section-subtitle text-warmwhite text-center">See how we&apos;ve transformed Cedar Park homes</p>
          <StaggeredAnimation animation="fade-in-up" staggerDelay={200} className="before-after-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {galleryItems.map((item, i) => (
              <div className="before-after-item bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg" key={i}>
                <BeforeAfterHover before={item.before} after={item.after} title={item.title} />
                <div className="project-info p-4 text-center bg-white/90 backdrop-blur-sm">
                  <h4 className="font-bold text-lg text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-charcoal">{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggeredAnimation>
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={openModal}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Transform Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterHover({ before, after, title }: { before: string; after: string; title: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-56 md:h-64 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`Before and after of ${title}`}
    >
      <Image src={before} alt={title + ' before'} fill className="object-cover w-full h-full transition-opacity duration-500" />
      <span className={`label absolute top-2 left-2 bg-primary text-warmwhite text-xs px-2 py-1 rounded font-semibold shadow z-10 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>BEFORE</span>
      <Image
        src={after}
        alt={title + ' after'}
        fill
        className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-xl ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 9 }}
      />
      <span className={`label absolute top-2 right-2 bg-gold text-charcoal text-xs px-2 py-1 rounded font-semibold shadow z-20 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>AFTER</span>
    </div>
  );
} 