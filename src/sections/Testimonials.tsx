import Image from "next/image";

const testimonials = [
  {
    stars: 5,
    quote: "Tariq and his team completely transformed our kitchen. The attention to detail and quality of work exceeded our expectations. Highly recommend!",
    cite: "— Sarah & Mike Johnson, Cedar Park",
  },
  {
    stars: 5,
    quote: "Professional from start to finish. The new bathroom feels like a luxury spa. FloorNDesign delivers on their promises.",
    cite: "— Jennifer Martinez, Leander",
  },
  {
    stars: 5,
    quote: "Best investment we've made in our home. The tile work is flawless and the project stayed on schedule and budget.",
    cite: "— David Chen, Round Rock",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section relative py-20 animate-fade-in flex justify-center">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <Image src="/images/satisfied-custoemrs-in-renovated-kitchen.jpg" alt="Satisfied customers" fill className="object-cover w-full h-full rounded-3xl" />
          <div className="absolute inset-0 bg-darkoverlay rounded-3xl" />
        </div>
        <div className="testimonials-overlay relative z-10 px-4 py-12">
          <h2 className="section-title text-warmwhite text-center">What Cedar Park Homeowners Say</h2>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((t, i) => (
              <div className="testimonial-card bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-lg animate-fade-in-up" key={i}>
                <div className="stars text-gold text-xl mb-2">{"★★★★★".slice(0, t.stars)}</div>
                <blockquote className="italic text-warmwhite mb-4">"{t.quote}"</blockquote>
                <cite className="text-gold text-sm not-italic">{t.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 