export default function Footer() {
  return (
    <footer className="footer bg-charcoal text-warmwhite py-8 animate-fade-in border-t-4 border-gold" style={{background: 'linear-gradient(90deg, #2C2C2C 60%, #8B1538 100%)'}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        <div className="footer-brand mb-8 md:mb-0 md:max-w-xs">
          <h3 className="text-2xl font-bold mb-2 text-gold">FloorNDesign</h3>
          <p className="opacity-90">Transforming Cedar Park homes with premium tile and expert craftsmanship since 2010.</p>
        </div>
        <div className="footer-links mb-8 md:mb-0">
          <h4 className="font-semibold mb-2 text-gold">Services</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-gold hover:underline underline-offset-8 transition">Tile Selection</a></li>
            <li><a href="#services" className="hover:text-gold hover:underline underline-offset-8 transition">Kitchen Remodeling</a></li>
            <li><a href="#services" className="hover:text-gold hover:underline underline-offset-8 transition">Bathroom Renovation</a></li>
            <li><a href="#services" className="hover:text-gold hover:underline underline-offset-8 transition">Design Consultation</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4 className="font-semibold mb-2 text-gold">Contact Info</h4>
          <p className="mb-1">2001 N Bell Blvd<br />Cedar Park, TX 78613</p>
          <p className="mb-1">Phone: (512) 555-TILE</p>
          <p>Email: info@floorndesign.com</p>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8 text-xs opacity-80">
        <p>&copy; 2025 FloorNDesign. All rights reserved. Licensed & Insured.</p>
      </div>
    </footer>
  );
} 