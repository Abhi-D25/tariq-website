import Image from "next/image";
import StaggeredAnimation from "../components/StaggeredAnimation";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We visit your home to understand your vision, measure spaces, and provide expert recommendations",
  },
  {
    number: "02",
    title: "Custom Design",
    desc: "3D renderings and material selection help you visualize your dream space before installation",
  },
  {
    number: "03",
    title: "Professional Installation",
    desc: "Our skilled craftsmen execute flawless installation with attention to every detail",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    desc: "We ensure your complete satisfaction and provide care instructions for lasting beauty",
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section relative py-20 bg-lightgray animate-fade-in flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/modern-exterior-showroom.jpg" alt="FloorNDesign showroom" fill className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-darkoverlay" />
        </div>
        <div className="process-overlay relative z-10 px-4 sm:px-6 py-12">
          <h2 className="section-title text-warmwhite text-center">Our Simple 4-Step Process</h2>
          <p className="section-subtitle text-warmwhite text-center">From consultation to completion, we make it easy</p>
          <StaggeredAnimation animation="fade-in-up" staggerDelay={200} className="process-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {steps.map((step, i) => (
              <div className="process-step bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg" key={i}>
                <div className="step-number text-4xl font-bold text-gold mb-4">{step.number}</div>
                <h3 className="text-warmwhite font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-warmwhite text-sm opacity-90 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
} 