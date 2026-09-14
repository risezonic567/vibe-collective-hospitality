import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Journeys", path: "/holiday-packages" },
    { name: "Events", path: "/events" },
    { name: "Weddings", path: "/weddings" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white py-4 border-b border-[#D4AF37]/20 shadow-xl" : "bg-white  py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="group flex flex-col">
          <span className="font-serif text-xl md:text-2xl tracking-[0.2em]  font-light uppercase text-[#D4AF37] transition-colors">
            Vibe Collective
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-sans font-medium">
            Hospitality
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 ${
                  isActive ? "text-[#D4AF37]" : "text-black "
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-all duration-300 font-medium"
          >
            Enquire Now
          </Link>
        </div> */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#FAF9F6] focus:outline-none p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C1C1C] border-b border-[#D4AF37]/20 px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.25em] ${
                    location.pathname === link.path ? "text-[#D4AF37]" : "text-[#FAF9F6]/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block text-center px-6 py-3 text-xs uppercase tracking-[0.2em] bg-[#D4AF37] text-[#1C1C1C] font-semibold mt-4"
              >
                Enquire Now
              </Link> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;