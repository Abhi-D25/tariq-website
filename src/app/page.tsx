'use client';
import React from 'react';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormModal from "../components/FormModal";
import ScrollAnimation from "../components/ScrollAnimation";
import StaggeredAnimation from "../components/StaggeredAnimation";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import TileTypes from "../sections/FlooringMaterials";
import { useModal } from "../context/ModalContext";

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="relative w-full min-h-screen bg-warmwhite text-charcoal overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center -mt-0 pt-0">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/hero-luxury-kitchen.jpg" alt="Luxury kitchen renovation" fill className="object-cover w-full h-full" priority />
          <div className="absolute inset-0 bg-[rgba(44,44,44,0.7)]" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-warmwhite drop-shadow-lg mb-6 animate-hero-title animate-hero-title-glow">Transform Your Home Into Your Dream Space</h1>
          <p className="hero-subtitle text-xl md:text-2xl text-warmwhite mb-8 animate-hero-subtitle">Cedar Park&apos;s premier destination for luxury remodelling</p>
          <div className="hero-cta-group flex flex-col sm:flex-row gap-4 items-center">
            <button 
              onClick={openModal}
              className="primary-btn bg-primary text-warmwhite px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105 animate-hero-cta"
            >
              Start Your Transformation
            </button>
            <button 
              onClick={openModal}
              className="secondary-btn bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105 animate-hero-cta-delay-1"
            >
              View Our Gallery
            </button>
            <button 
              onClick={openModal}
              className="tertiary-btn border-2 border-warmwhite text-warmwhite px-8 py-4 rounded-full font-semibold hover:bg-warmwhite hover:text-charcoal transition-all duration-300 transform hover:scale-105 animate-hero-cta-delay-2"
            >
              Browse Flooring Materials
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Start Your Transformation"
        subtitle="Schedule your free consultation and begin your journey to a beautiful new space"
      />

      {/* Promotional Banners */}
      <ScrollAnimation animation="fade-in-up" threshold={0.2}>
        <section className="promotional-banners py-16 bg-warmwhite">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggeredAnimation animation="slide-in-left" staggerDelay={150} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* New Arrivals Banner */}
              <div className="promo-banner relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image src="/images/new-tiles.jpg" alt="New Arrivals" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                  <h3 className="text-3xl font-bold text-warmwhite mb-2 drop-shadow-lg">New Arrivals</h3>
                  <p className="text-warmwhite text-lg mb-4 font-semibold drop-shadow-md">Latest flooring materials now available</p>
                  <button 
                    onClick={openModal}
                    className="bg-gold text-charcoal px-6 py-3 rounded-full font-bold hover:bg-warmwhite hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gold"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Best Sellers Banner */}
              <div className="promo-banner relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image src="/images/best-sellers.jpg" alt="Best Sellers" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-burgundyoverlay" />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                  <h3 className="text-3xl font-bold text-warmwhite mb-2 drop-shadow-lg">Best Sellers</h3>
                  <p className="text-warmwhite text-lg mb-4 font-semibold drop-shadow-md">Our most popular tile selections</p>
                  <button 
                    onClick={openModal}
                    className="bg-gold text-charcoal px-6 py-3 rounded-full font-bold hover:bg-warmwhite hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gold"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Shop by Space Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.15}>
        <section className="shop-by-space py-20 bg-warmwhite">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-in-down" delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Shop by Space</h2>
              <p className="text-center text-base sm:text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
                Discover our specialized tile and remodeling solutions for every area of your home. From kitchen backsplashes to luxury bathroom renovations, 
                we offer expert installation and premium materials tailored to each space&apos;s unique requirements and design aesthetic.
              </p>
            </ScrollAnimation>
            <StaggeredAnimation animation="scale-in" staggerDelay={120} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Kitchen", image: "/images/kitchen-space.jpg" },
                { name: "Bathroom", image: "/images/luxury-bathroom-renovation.jpg" },
                { name: "Backsplash", image: "/images/backsplash-space.jpg" },
                { name: "Shower", image: "/images/shower-space.jpg" },
                { name: "Outdoor", image: "/images/outdoor-space.jpg" },
                { name: "Flooring", image: "/images/tile-installation-process.jpg" }
              ].map((space, index) => (
                <div key={index} className="space-card group cursor-pointer" onClick={openModal}>
                  <div className="relative h-32 sm:h-36 md:h-40 w-32 sm:w-36 md:w-40 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 border-4 border-transparent group-hover:border-gold group-hover:shadow-[0_15px_35px_rgba(44,44,44,0.4)]">
                    <Image src={space.image} alt={space.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-center mt-4 font-semibold text-charcoal group-hover:text-primary transition-colors duration-300 transform group-hover:scale-105 text-sm sm:text-base">{space.name}</h3>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Gallery Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.1}>
        <Gallery />
      </ScrollAnimation>

      {/* Flooring Materials Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.1}>
        <TileTypes />
      </ScrollAnimation>

      {/* Featured Collections Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.15}>
        <section className="featured-collections py-16 bg-warmwhite">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header and Description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                Featured Collections
              </h2>
              <p className="text-center text-base sm:text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
                Discover our handpicked selection of premium tiles, from American-made craftsmanship to designer discounts and the latest arrivals in luxury flooring
              </p>
            </div>

            <StaggeredAnimation animation="slide-in-right" staggerDelay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* USA-Made Collection */}
              <div className="collection-card relative h-80 rounded-xl overflow-hidden shadow-lg group">
                <Image src="/images/usa-made.jpg" alt="USA-Made Tiles" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-darkoverlay group-hover:bg-burgundyoverlay transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-2xl font-bold text-warmwhite mb-2">USA-Made</h3>
                  <p className="text-warmwhite mb-4">Premium American craftsmanship</p>
                  <button 
                    onClick={openModal}
                    className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-warmwhite transition-all duration-300 transform hover:scale-105"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Designer Collection */}
              <div className="collection-card relative h-80 rounded-xl overflow-hidden shadow-lg group">
                <Image src="/images/luxury-bathroom-renovation.jpg" alt="Designer Collection" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-darkoverlay group-hover:bg-burgundyoverlay transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-2xl font-bold text-warmwhite mb-2">Up to 75% Off</h3>
                  <p className="text-warmwhite mb-4">Designer tiles at unbeatable prices</p>
                  <button 
                    onClick={openModal}
                    className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-warmwhite transition-all duration-300 transform hover:scale-105"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* New Arrivals */}
              <div className="collection-card relative h-80 rounded-xl overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1">
                <Image src="/images/new-arrivals-2.jpg" alt="New Arrivals" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-darkoverlay group-hover:bg-burgundyoverlay transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-2xl font-bold text-warmwhite mb-2">New Arrivals</h3>
                  <p className="text-warmwhite mb-4">Latest trends in tile design</p>
                  <button 
                    onClick={openModal}
                    className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-warmwhite transition-all duration-300 transform hover:scale-105"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.15}>
        <section id="services" className="services-section py-20 bg-warmwhite">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-2 border-[#D4AF37] rounded-lg p-6 sm:p-8 shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1">
            <ScrollAnimation animation="fade-in-down" delay={300}>
              <h2 className="section-title text-center">Complete Remodeling Solutions</h2>
              <p className="text-center text-base sm:text-lg text-charcoal/80 mt-6">
                With over 15 years of experience in Cedar Park, Tariq has built a reputation for excellence in premium tile installation and home remodeling. 
                His attention to detail and commitment to quality craftsmanship has transformed countless homes, creating beautiful, functional spaces that exceed expectations.
              </p>
            </ScrollAnimation>
            <StaggeredAnimation animation="fade-in-up" staggerDelay={150} className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
              {/* Service 1 */}
              <div className="service-card relative rounded-xl overflow-hidden shadow-lg group hover-lift">
                <Image src="/images/premium-tile-display.jpg" alt="Premium tile selection" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-[60%]">
                  <div className="service-content text-warmwhite transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-xl font-bold mb-2">Premium Tile Selection</h3>
                    <p className="mb-2">Ceramic, porcelain, natural stone, and luxury vinyl from top brands</p>
                    <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                      <li>Imported Italian ceramics</li>
                      <li>Natural marble & travertine</li>
                      <li>Designer mosaic collections</li>
                      <li>Wood-look luxury vinyl</li>
                    </ul>
                    <button 
                      onClick={openModal}
                      className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Tiles
                    </button>
                  </div>
                </div>
              </div>
              {/* Service 2 */}
              <div className="service-card relative rounded-xl overflow-hidden shadow-lg group hover-lift">
                <Image src="/images/modern-kitchen-renovation.jpg" alt="Kitchen remodeling" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-[60%]">
                  <div className="service-content text-warmwhite transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-xl font-bold mb-2">Kitchen Remodeling</h3>
                    <p className="mb-2">Complete kitchen transformations from concept to completion</p>
                    <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                      <li>Custom backsplash installation</li>
                      <li>Countertop replacement</li>
                      <li>Full kitchen renovations</li>
                      <li>Cabinet & flooring updates</li>
                    </ul>
                    <button 
                      onClick={openModal}
                      className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
                    >
                      View Kitchens
                    </button>
                  </div>
                </div>
              </div>
              {/* Service 3 */}
              <div className="service-card relative rounded-xl overflow-hidden shadow-lg group hover-lift">
                <Image src="/images/luxury-bathroom-renovation.jpg" alt="Bathroom renovation" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-[60%]">
                  <div className="service-content text-warmwhite transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-xl font-bold mb-2">Bathroom Renovations</h3>
                    <p className="mb-2">Spa-like bathroom makeovers with premium materials</p>
                    <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                      <li>Walk-in shower installations</li>
                      <li>Vanity & mirror updates</li>
                      <li>Heated floor systems</li>
                      <li>Complete bathroom remodels</li>
                    </ul>
                    <button 
                      onClick={openModal}
                      className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
                    >
                      View Bathrooms
                    </button>
                  </div>
                </div>
              </div>
              {/* Service 4 */}
              <div className="service-card relative rounded-xl overflow-hidden shadow-lg group hover-lift">
                <Image src="/images/design-consultation.jpg" alt="Design consultation" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-[60%]">
                  <div className="service-content text-warmwhite transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-xl font-bold mb-2">Expert Design Consultation</h3>
                    <p className="mb-2">Professional guidance from planning to installation</p>
                    <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                      <li>Space planning & layout</li>
                      <li>Material selection guidance</li>
                      <li>3D visualization</li>
                      <li>Project timeline planning</li>
                    </ul>
                    <button 
                      onClick={openModal}
                      className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.2}>
        <section className="stats-section py-16 bg-lightgray">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggeredAnimation animation="scale-in" staggerDelay={100} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="stat-item bg-primary rounded-full p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">15+</div>
                <div className="text-[#D4AF37] text-base sm:text-lg">Years Experience</div>
              </div>
              <div className="stat-item bg-primary rounded-full p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
                <div className="text-[#D4AF37] text-base sm:text-lg">Projects Completed</div>
              </div>
              <div className="stat-item bg-primary rounded-full p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">98%</div>
                <div className="text-[#D4AF37] text-base sm:text-lg">Client Satisfaction</div>
              </div>
              <div className="stat-item bg-primary rounded-full p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">100%</div>
                <div className="text-[#D4AF37] text-base sm:text-lg">Licensed & Insured</div>
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.1}>
        <Testimonials />
      </ScrollAnimation>

      {/* Contact/Visit Section */}
      <ScrollAnimation animation="fade-in-up" threshold={0.1}>
        <Contact />
      </ScrollAnimation>

      {/* Footer */}
      <Footer />
    </div>
  );
} 