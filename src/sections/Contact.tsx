'use client';
import React from 'react';
import Image from "next/image";
import FormModal from "../components/FormModal";
import StaggeredAnimation from "../components/StaggeredAnimation";
import { useModal } from "../context/ModalContext";

export default function Contact() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section id="contact" className="contact-section relative py-20 animate-fade-in">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/modern-exterior-showroom.jpg" alt="FloorNDesign showroom exterior" fill className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-darkoverlay" />
        </div>
        <div className="contact-overlay relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredAnimation animation="slide-in-left" staggerDelay={300} className="contact-content flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="contact-info bg-white/30 rounded-xl p-6 sm:p-8 flex-1 text-warmwhite shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Visit Our Cedar Park Showroom</h2>
              <div className="contact-details space-y-4">
                <div className="contact-item">
                  <h4 className="font-semibold text-gold mb-1">📍 Address</h4>
                  <p>2001 N Bell Blvd<br />Cedar Park, TX 78613</p>
                </div>
                <div className="contact-item">
                  <h4 className="font-semibold text-gold mb-1">📞 Phone</h4>
                  <p>(512) 555-TILE<br />(512) 555-8453</p>
                </div>
                <div className="contact-item">
                  <h4 className="font-semibold text-gold mb-1">🕒 Hours</h4>
                  <p>Monday - Friday: 9AM - 6PM<br />Saturday: 9AM - 5PM<br />Sunday: 12PM - 4PM</p>
                </div>
              </div>
              {/* Quick Contact Button */}
              <button 
                onClick={openModal}
                className="mt-6 w-full bg-gold text-charcoal px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gold"
              >
                Quick Contact Form
              </button>
            </div>
            {/* Contact Form */}
            <div className="contact-form bg-white/30 rounded-xl p-6 sm:p-8 flex-1 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gold mb-4">Schedule Your Free Consultation</h3>
              <form className="consultation-form space-y-4">
                <div className="form-row flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    required 
                    className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]" 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    required 
                    className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]" 
                  />
                </div>
                <div className="form-row flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]" 
                  />
                </div>
                <select 
                  required 
                  className="w-full px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                >
                  <option value="">Project Type</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="tile">Tile Selection Only</option>
                  <option value="consultation">Design Consultation</option>
                </select>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  className="w-full px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]" 
                />
                <button 
                  type="submit" 
                  className="w-full bg-gold text-charcoal px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gold"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Form Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Quick Contact"
        subtitle="Get in touch with us for your project needs"
      />
    </>
  );
} 