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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
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
              onClick={onClose}
              className="text-warmwhite hover:text-gold transition-colors duration-200 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
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
                className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
              />
            </div>

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
            >
              <option value="">Project Type</option>
              <option value="kitchen">Kitchen Remodeling</option>
              <option value="bathroom">Bathroom Renovation</option>
              <option value="flooring">Flooring Installation</option>
              <option value="tile">Tile Selection Only</option>
              <option value="consultation">Design Consultation</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] resize-none"
            />

            <button
              type="submit"
              className="w-full bg-gold text-charcoal px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-warmwhite transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gold"
            >
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 