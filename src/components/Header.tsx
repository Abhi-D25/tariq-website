'use client';
import React from 'react';
import Link from "next/link";
import { useState } from "react";
import { useModal } from "../context/ModalContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openModal } = useModal();
  
  return (
    <header
      className="fixed top-0 z-50 w-full animate-fade-in"
      style={{ background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)', backdropFilter: 'blur(16px) saturate(180%)' }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="logo text-2xl font-bold tracking-tight text-warmwhite drop-shadow hover-scale">FloorNDesign</Link>
        <nav className="hidden md:flex gap-8 text-base font-semibold">
          <Link href="/" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-y-[-2px]">Home</Link>
          <Link href="/#services" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-y-[-2px]">Services</Link>
          <Link href="/#gallery" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-y-[-2px]">Gallery</Link>
          <Link href="/about" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-y-[-2px]">About</Link>
          <Link href="/#contact" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-y-[-2px]">Contact</Link>
        </nav>
        <button 
          onClick={openModal}
          className="cta-btn bg-gold text-charcoal px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-warmwhite hover:text-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hidden md:block animate-fade-in-up border-2 border-gold"
        >
          Free Consultation
        </button>
        {/* Mobile nav toggle */}
        <button 
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 hover:bg-white/10" 
          onClick={() => setOpen(!open)} 
          aria-label="Open navigation menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform duration-300 transform hover:rotate-90">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-[rgba(44,44,44,0.95)] border-t-4 border-gold px-4 py-6 flex flex-col gap-4 text-base font-semibold shadow-2xl rounded-b-2xl animate-fade-in-down">
          <Link href="/" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-x-2" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#services" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-x-2" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#gallery" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-x-2" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/about" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-x-2" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#contact" className="text-warmwhite hover:text-gold hover:underline underline-offset-8 hover:font-bold transition-all duration-300 transform hover:translate-x-2" onClick={() => setOpen(false)}>Contact</Link>
          <button 
            onClick={() => { openModal(); setOpen(false); }}
            className="cta-btn bg-gold text-charcoal px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-warmwhite hover:text-gold transition-all duration-300 transform hover:scale-105 hover:shadow-xl mt-2 border-2 border-gold"
          >
            Free Consultation
          </button>
        </nav>
      )}
    </header>
  );
} 