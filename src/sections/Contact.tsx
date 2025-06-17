import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="contact-section relative py-20 animate-fade-in">
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/modern-showroom-exterior.jpg" alt="FloorNDesign showroom exterior" fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-darkoverlay" />
      </div>
      <div className="contact-overlay relative z-10 container mx-auto px-4">
        <div className="contact-content flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="contact-info bg-white/10 rounded-xl p-8 flex-1 text-warmwhite shadow-lg animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4">Visit Our Cedar Park Showroom</h2>
            <div className="contact-details space-y-4">
              <div className="contact-item">
                <h4 className="font-semibold text-gold mb-1">📍 Address</h4>
                <p>2001 N Bell Blvd<br />Cedar Park, TX 78613</p>
              </div>
              <div className="contact-item">
                <h4 className="font-semibold text-gold mb-1">📞 Phone</h4>
                <p>(512) 555-TILE<br />(512) 555-8453</p>
              </div>
              <div className="contact-item">
                <h4 className="font-semibold text-gold mb-1">🕒 Hours</h4>
                <p>Monday - Friday: 9AM - 6PM<br />Saturday: 9AM - 5PM<br />Sunday: 12PM - 4PM</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact-form bg-white/10 rounded-xl p-8 flex-1 shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-bold text-gold mb-4">Schedule Your Free Consultation</h3>
            <form className="consultation-form space-y-4">
              <div className="form-row flex gap-4">
                <input type="text" placeholder="First Name" required className="flex-1 px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
                <input type="text" placeholder="Last Name" required className="flex-1 px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div className="form-row flex gap-4">
                <input type="email" placeholder="Email Address" required className="flex-1 px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
                <input type="tel" placeholder="Phone Number" required className="flex-1 px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <select required className="w-full px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="">Project Type</option>
                <option value="kitchen">Kitchen Remodeling</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="flooring">Flooring Installation</option>
                <option value="tile">Tile Selection Only</option>
                <option value="consultation">Design Consultation</option>
              </select>
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-2 rounded bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
              <button type="submit" className="submit-btn w-full bg-gold text-charcoal px-6 py-3 rounded-full font-semibold shadow hover:bg-primary hover:text-warmwhite transition">Book Free Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 