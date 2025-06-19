'use client';
import React from 'react';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import TileTypes from "../sections/TileTypes";
import WorkCapabilities from "../sections/WorkCapabilities";

export default function Home() {
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
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-warmwhite drop-shadow-lg mb-6">Transform Your Home with Premium Tile & Expert Craftsmanship</h1>
          <p className="hero-subtitle text-xl md:text-2xl text-warmwhite mb-8">Cedar Park's premier destination for luxury kitchen & bathroom renovations</p>
          <div className="hero-cta-group flex gap-4">
            <button className="primary-btn bg-primary text-warmwhite px-6 py-3 rounded-full font-semibold shadow hover:bg-gold hover:text-charcoal transition">Start Your Transformation</button>
            <button className="secondary-btn bg-primary text-warmwhite px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-charcoal transition">View Our Gallery</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-20 bg-altsection">
      <div className="container mx-auto px-8 mt-12 max-w-4xl border-2 border-[#D4AF37] rounded-lg p-8 shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1">
        <h2 className="section-title text-center">Complete Remodeling Solutions</h2>
          <p className="text-center text-lg text-charcoal/80 mt-6">
            With over 15 years of experience in Cedar Park, Tariq has built a reputation for excellence in premium tile installation and home remodeling. 
            His attention to detail and commitment to quality craftsmanship has transformed countless homes, creating beautiful, functional spaces that exceed expectations.
          </p>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
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
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105">Explore Tiles</button>
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
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105">View Kitchens</button>
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
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105">View Bathrooms</button>
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
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105">Book Consultation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item bg-primary rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">15+</div>
              <div className="text-[#D4AF37] text-lg">Years Experience</div>
            </div>
            <div className="stat-item bg-primary rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <div className="text-[#D4AF37] text-lg">Projects Completed</div>
            </div>
            <div className="stat-item bg-primary rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">98%</div>
              <div className="text-[#D4AF37] text-lg">Client Satisfaction</div>
            </div>
            <div className="stat-item bg-primary rounded-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">100%</div>
              <div className="text-[#D4AF37] text-lg">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Capabilities Section */}
      <WorkCapabilities />

      {/* Tile Types Section */}
      <TileTypes />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact/Visit Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
} 