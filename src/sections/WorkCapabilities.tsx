'use client';
import Image from "next/image";
import StaggeredAnimation from "../components/StaggeredAnimation";

const capabilities = [
  {
    title: "Custom Backsplash Design",
    icon: "🎨",
    description: "Expert installation of custom tile patterns and designs"
  },
  {
    title: "Shower & Tub Surrounds",
    icon: "🚿",
    description: "Waterproof installations with premium materials"
  },
  {
    title: "Floor Installation",
    icon: "🏗️",
    description: "Professional installation of all tile types and patterns"
  },
  {
    title: "Waterproofing & Prep Work",
    icon: "🛡️",
    description: "Thorough preparation and waterproofing for lasting results"
  },
  {
    title: "Electrical & Plumbing Coordination",
    icon: "🔌",
    description: "Seamless coordination with other trades"
  },
  {
    title: "Custom Design Layouts",
    icon: "📐",
    description: "Expert pattern planning and layout design"
  },
  {
    title: "Project Management",
    icon: "📋",
    description: "Comprehensive project oversight and coordination"
  },
  {
    title: "Quality Inspections",
    icon: "✅",
    description: "Rigorous quality control at every stage"
  }
];

export default function WorkCapabilities() {
  return (
    <section id="work-capabilities" className="work-capabilities-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/renovation-workspace.jpg" 
            alt="Renovation workspace" 
            fill 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-darkoverlay" />
        </div>
        <div className="relative z-10 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-warmwhite text-center mb-8">Complete Remodeling Expertise</h2>
          <StaggeredAnimation animation="scale-in" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20 shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3">{capability.icon}</span>
                  <h3 className="text-warmwhite font-bold mb-2 text-center">{capability.title}</h3>
                  <p className="text-gold font-bold text-sm text-center leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
} 