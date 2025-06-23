'use client';
import React, { useState } from 'react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function FormModal({ 
  isOpen, 
  onClose, 
  title = "Schedule Your Free Consultation",
  subtitle = "Get started on your dream space transformation"
}: FormModalProps) {
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
      source: 'FloorNDesign Website - Modal Form',
      formType: title, // This will help identify which form was used
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
        
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Sorry, there was an error submitting your form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmitError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="bg-primary text-warmwhite p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-sm opacity-90">{subtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="text-warmwhite hover:text-gold transition-colors duration-200 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {isSubmitted ? (
            // Success Message
            <div className="text-center py-8">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
              <p className="text-charcoal mb-4">
                We&apos;ve received your request and will contact you within 24 hours to schedule your free consultation.
              </p>
              <p className="text-sm text-charcoal/70">
                This window will close automatically...
              </p>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
                />
              </div>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] resize-none disabled:opacity-50"
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
      </div>
    </div>
  );
}