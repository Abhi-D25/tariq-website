import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../sections/Gallery";
import WhyChooseUs from "../sections/WhyChooseUs";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-warmwhite text-charcoal overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center -mt-0 pt-0">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/hero-luxury-kitchen.jpg" alt="Luxury kitchen renovation" fill className="object-cover w-full h-full" priority />
          <div className="absolute inset-0 bg-[rgba(44,44,44,0.7)]" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-warmwhite drop-shadow-lg mb-6">Transform Your Home with Premium Tile & Expert Craftsmanship</h1>
          <p className="hero-subtitle text-xl md:text-2xl text-warmwhite mb-8">Cedar Park's premier destination for luxury kitchen & bathroom renovations</p>
          <div className="hero-cta-group flex gap-4">
            <button className="primary-btn bg-primary text-warmwhite px-6 py-3 rounded-full font-semibold shadow hover:bg-gold hover:text-charcoal transition">Start Your Transformation</button>
            <button className="secondary-btn bg-warmwhite text-primary px-6 py-3 rounded-full font-semibold border border-primary hover:bg-gold hover:text-charcoal transition">View Our Gallery</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Complete Remodeling Solutions</h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Service 1 */}
            <div className="service-card relative rounded-xl overflow-hidden shadow-lg group">
              <Image src="/images/premium-tile-display.jpg" alt="Premium tile selection" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6">
                <div className="service-content text-warmwhite">
                  <h3 className="text-xl font-bold mb-2">Premium Tile Selection</h3>
                  <p className="mb-2">Ceramic, porcelain, natural stone, and luxury vinyl from top brands</p>
                  <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                    <li>Imported Italian ceramics</li>
                    <li>Natural marble & travertine</li>
                    <li>Designer mosaic collections</li>
                    <li>Wood-look luxury vinyl</li>
                  </ul>
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition">Explore Tiles</button>
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="service-card relative rounded-xl overflow-hidden shadow-lg group">
              <Image src="/images/modern-kitchen-renovation.jpg" alt="Kitchen remodeling" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6">
                <div className="service-content text-warmwhite">
                  <h3 className="text-xl font-bold mb-2">Kitchen Remodeling</h3>
                  <p className="mb-2">Complete kitchen transformations from concept to completion</p>
                  <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                    <li>Custom backsplash installation</li>
                    <li>Countertop replacement</li>
                    <li>Full kitchen renovations</li>
                    <li>Cabinet & flooring updates</li>
                  </ul>
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition">View Kitchens</button>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="service-card relative rounded-xl overflow-hidden shadow-lg group">
              <Image src="/images/luxury-bathroom-renovation.jpg" alt="Bathroom renovation" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6">
                <div className="service-content text-warmwhite">
                  <h3 className="text-xl font-bold mb-2">Bathroom Renovations</h3>
                  <p className="mb-2">Spa-like bathroom makeovers with premium materials</p>
                  <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                    <li>Walk-in shower installations</li>
                    <li>Vanity & mirror updates</li>
                    <li>Heated floor systems</li>
                    <li>Complete bathroom remodels</li>
                  </ul>
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition">View Bathrooms</button>
                </div>
              </div>
            </div>
            {/* Service 4 */}
            <div className="service-card relative rounded-xl overflow-hidden shadow-lg group">
              <Image src="/images/design-consultation.jpg" alt="Design consultation" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-burgundyoverlay flex flex-col justify-end p-6">
                <div className="service-content text-warmwhite">
                  <h3 className="text-xl font-bold mb-2">Expert Design Consultation</h3>
                  <p className="mb-2">Professional guidance from planning to installation</p>
                  <ul className="mb-4 text-sm list-disc list-inside opacity-90">
                    <li>Space planning & layout</li>
                    <li>Material selection guidance</li>
                    <li>3D visualization</li>
                    <li>Project timeline planning</li>
                  </ul>
                  <button className="service-btn bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-warmwhite transition">Book Consultation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact/Visit Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
