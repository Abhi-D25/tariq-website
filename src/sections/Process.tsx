import Image from "next/image";

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
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <Image src="/images/tile-installation-process.jpg" alt="Professional tile installation" fill className="object-cover w-full h-full rounded-3xl" />
          <div className="absolute inset-0 bg-darkoverlay rounded-3xl" />
        </div>
        <div className="process-overlay relative z-10 px-4 py-12">
          <h2 className="section-title text-warmwhite text-center">Our Proven Process</h2>
          <div className="process-timeline flex flex-col md:flex-row gap-8 mt-10 justify-between items-center">
            {steps.map((step, i) => (
              <div className="process-step flex flex-col items-center text-center bg-white/10 rounded-xl p-6 shadow-lg w-full md:w-1/4 animate-fade-in-up" key={i}>
                <div className="step-number text-3xl font-bold text-gold mb-2">{step.number}</div>
                <h4 className="font-bold text-lg text-warmwhite mb-2">{step.title}</h4>
                <p className="text-warmwhite text-sm opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 