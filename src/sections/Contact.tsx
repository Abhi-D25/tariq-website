'use client';
import React, { useState } from 'react';
import Image from "next/image";
import FormModal from "../components/FormModal";
import StaggeredAnimation from "../components/StaggeredAnimation";
import { useModal } from "../context/ModalContext";

export default function Contact() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Prepare data for Zapier
    const zapierData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
      timestamp: new Date().toISOString(),
      source: 'FloorNDesign Website - Contact Section',
      formType: 'Contact Page Form',
      page: window.location.pathname,
      utmSource: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || 'website',
    };

    try {
      // Replace with your actual Zapier webhook URL
      const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21745522/uo07zl6/';
      
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Sorry, there was an error submitting your form. Please try again or call us directly at (512) 555-TILE.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              
              {isSubmitted ? (
                // Success Message
                <div className="text-center py-8">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-warmwhite mb-2">Thank You!</h4>
                  <p className="text-warmwhite mb-4">
                    We&apos;ve received your request and will contact you within 24 hours to schedule your free consultation.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gold text-charcoal px-6 py-2 rounded-full font-semibold hover:bg-warmwhite transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="consultation-form space-y-4">
                  {submitError && (
                    <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-red-700 text-sm">
                      {submitError}
                    </div>
                  )}

                  <div className="form-row flex flex-col sm:flex-row gap-4">
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50" 
                    />
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50" 
                    />
                  </div>
                  <div className="form-row flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50" 
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50" 
                    />
                  </div>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
                  >
                    <option value="">Project Type</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="tile">Tile Selection Only</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50" 
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gold text-charcoal px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gold disabled:opacity-50 disabled:transform-none disabled:hover:bg-gold disabled:hover:text-charcoal"
                  >
                    {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                  </button>
                </form>
              )}
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