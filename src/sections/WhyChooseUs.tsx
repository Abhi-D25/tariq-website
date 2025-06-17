import Image from "next/image";

const features = [
  {
    icon: "🏆",
    title: "Expert Local Craftsmanship",
    desc: "Tariq brings 15+ years of premium remodeling expertise to every Cedar Park project",
  },
  {
    icon: "✨",
    title: "End-to-End Project Management",
    desc: "From initial consultation to final walkthrough, we handle every detail professionally",
  },
  {
    icon: "🎯",
    title: "Premium Material Partners",
    desc: "Direct relationships with top tile manufacturers ensure quality and competitive pricing",
  },
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    desc: "Fully licensed contractors with comprehensive insurance for your peace of mind",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <Image src="/images/elegant-showroom.jpg" alt="FloorNDesign showroom" fill className="object-cover w-full h-full rounded-3xl" />
          <div className="absolute inset-0 bg-darkoverlay rounded-3xl" />
        </div>
        <div className="why-choose-overlay relative z-10 px-4 py-12">
          <h2 className="section-title text-warmwhite text-center">Why Cedar Park Trusts FloorNDesign</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {features.map((f, i) => (
              <div className="feature-item bg-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-lg animate-fade-in-up" key={i}>
                <div className="feature-icon text-4xl mb-4">{f.icon}</div>
                <h4 className="font-bold text-lg text-gold mb-2">{f.title}</h4>
                <p className="text-warmwhite text-sm opacity-90">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 