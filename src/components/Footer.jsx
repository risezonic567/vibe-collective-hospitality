import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#1C1C1C] text-[#FAF9F6] border-t border-[#D4AF37]/20 pt-16 pb-12">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div>
        <Link to="/" className="block mb-4">
          <span className="font-serif text-2xl tracking-[0.2em] text-[#FAF9F6] font-light uppercase">
            Vibe Collective
          </span>
          <span className="block text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-sans font-medium">
            Hospitality
          </span>
        </Link>
        <p className="text-sm text-[#FAF9F6]/60 leading-relaxed">
          Curating exceptional journeys, extraordinary celebrations, and unforgettable bespoke experiences across global destinations.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Navigation</h4>
        <ul className="space-y-3 text-sm tracking-wider text-[#FAF9F6]/80">
          <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
          <li><Link to="/holiday-packages" className="hover:text-[#D4AF37] transition-colors">Holiday Journeys</Link></li>
          <li><Link to="/events" className="hover:text-[#D4AF37] transition-colors">Corporate & Galas</Link></li>
          <li><Link to="/weddings" className="hover:text-[#D4AF37] transition-colors">Destination Weddings</Link></li>
          <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Concierge</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Concierge Desk</h4>
        <ul className="space-y-3 text-sm text-[#FAF9F6]/80">
          <li className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>HQ: Global Hospitality Tower, Suite 400</span>
          </li>
          <li className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>concierge@vibecollective.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>+1 (800) 555-VIBE</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Social Channels</h4>
        <div className="flex space-x-4 text-sm text-[#FAF9F6]/80">
          <a href="#instagram" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
          <span className="text-[#D4AF37]/40">•</span>
          <a href="#linkedin" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
          <span className="text-[#D4AF37]/40">•</span>
          <a href="#whatsapp" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl text-white mx-auto px-6 md:px-12 pt-8 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center text-[16px] text-[#FAF9F6]/40">
      <p>© 2026 Vibe Collective Hospitality. All rights reserved.</p>

        {/* <div className="flex space-x-6 mt-4 md:mt-0">
      <p>Developed By <a href='https://risezonic.com' className='text-[#D4AF37]'>Risezonic</a> </p>
      </div> */}

      <div className="flex text-white space-x-6 mt-4 md:mt-0">
        <a href="#privacy" className="hover:text-[#FAF9F6]/80">Privacy Policy</a>
        <a href="#terms" className="hover:text-[#FAF9F6]/80">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;