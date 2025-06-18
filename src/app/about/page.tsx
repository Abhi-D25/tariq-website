'use client';
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../sections/WhyChooseUs";
import Process from "../../sections/Process";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-warmwhite text-charcoal overflow-x-hidden">
      <Header />
      
      {/* About Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-primary">
          <div className="absolute inset-0 bg-darkoverlay" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warmwhite drop-shadow-lg mb-6">About FloorNDesign</h1>
          <p className="text-xl md:text-2xl text-warmwhite mb-8">Your trusted partner in premium tile and remodeling solutions</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Process Section */}
      <Process />

      {/* Footer */}
      <Footer />
    </div>
  );
} 