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
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl animate-scale-in">
        <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
          <Image src="/images/satisfied-custoemrs-in-renovated-kitchen.jpg" alt="Satisfied customers" fill className="object-cover w-full h-full rounded-3xl" />
          <div className="absolute inset-0 bg-darkoverlay rounded-3xl" />
        </div>
        <div className="testimonials-overlay relative z-10 px-4 py-12">
          <h2 className="section-title text-warmwhite text-center animate-fade-in-down">What Cedar Park Homeowners Say</h2>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((t, i) => (
              <div 
                className="testimonial-card bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-500 ease-out hover:bg-white/30 hover:scale-105 hover:shadow-2xl group cursor-pointer" 
                key={i}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animation: `fade-in-up 0.8s cubic-bezier(.4,0,.2,1) ${i * 0.2}s both`
                }}
              >
                <div className="stars text-gold text-xl mb-2 animate-float">
                  {Array.from({ length: t.stars }, (_, index) => (
                    <span 
                      key={index} 
                      className="inline-block animate-star-twinkle"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="italic text-warmwhite mb-4 transition-all duration-300 group-hover:text-white">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className="text-gold text-sm not-italic transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-105">
                  {t.cite}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 