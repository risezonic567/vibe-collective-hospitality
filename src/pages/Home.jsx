import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { holidayPackagesData,weddingsData } from '../data/hospitalityData';

import WhyVibeCollective from '../components/home/WhyVibeCollective';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Hospitality"
            className="w-full h-full object-cover filter brightness-75 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-[#1C1C1C]/20 to-black/10" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block text-xs md:text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-medium mb-4">
            Bespoke Luxury & Experiences
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl font-serif text-[#FAF9F6] font-normal tracking-wide leading-tight mb-6">
            JOURNEYS BEYOND ORDINARY
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-sm md:text-lg text-[#FAF9F6]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Curating exceptional journeys, extraordinary celebrations, and unforgettable experiences worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/holiday-packages" className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300">
              Explore Journeys
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border border-[#FAF9F6]/60 text-[#FAF9F6] text-xs uppercase tracking-[0.2em] hover:bg-[#FAF9F6] hover:text-[#1C1C1C] transition-all duration-300">
              Plan Your Experience
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      {/* <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" alt="Luxury Experience" className="w-full h-[500px] object-cover shadow-2xl" />
          </div>
          <div>
            <SectionTitle alignment="left" subtitle="Who We Are" title="More Than Travel. We Create Experiences." />
            <p className="text-sm text-[#555] leading-relaxed mb-8">
              From carefully curated holidays to spectacular events and destination weddings, Vibe Collective Hospitality brings together travel, hospitality, and experiences designed around every occasion.
            </p>
            <Link to="/about" className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#1C1C1C] font-semibold group hover:text-[#D4AF37] transition-colors">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section> */}

       <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto">
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
          Welcome to Royalty
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-['Cormorant_Garamond']  text-slate-900 leading-tight">
         {/* <span className="inline-block w-16 h-px bg-gray-600 align-text-bottom mr-4"></span>   A Sanctuary of Elegance <br/> Serenity By The Arabian Sea   */}More Than Travel. We Create Experiences.
          {/* <span className="inline-block w-16 h-px font-bold bg-gray-600 align-sub ml-4"></span> */}
        </h2>

        <p className="text-slate-600 mt-5 leading-relaxed max-w-4xl mx-auto">
          Experience world-class hospitality where coastal charm meets modern
          sophistication. Nestled atop majestic cliffs, The Grand Horizon offers
          breathtaking ocean views, private beach access, and handcrafted luxury
          experiences designed for royalty.

       
        </p>
            <button onClick={() => navigate(`/about`)} className="text-sm uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] mt-6 text-center mx-auto items-center pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                  OUR STORY →
                </button>
      </div>

      <div className="mt-10 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
          alt="Hotel Main View"
          className="w-full max-w-4xl h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
        />
          
      </div>
    

    </section>
    



      <WhyVibeCollective/>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Destinations" title="Explore Our Journeys" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {holidayPackagesData.map((pkg) => (
            <div key={pkg.id} className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">{pkg.destination}</span>
                <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">{pkg.shortDesc}</p>
                <button onClick={() => navigate(`/holiday-packages/${pkg.slug}`)} className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                  Explore Package →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Preview */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Destinations" title="Explore Our Journeys" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {weddingsData.slice(0,3).map((pkg) => (
            <div key={pkg.id} className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">{pkg.destination}</span>
                <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">{pkg.shortDesc}</p>
                <button onClick={() => navigate(`/holiday-packages/${pkg.slug}`)} className="text-xs uppercase tracking-widest text-[#1C1C1C] cursor-pointer font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                  Explore Package →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Gallery/>

      <Testimonials/>
      {/* <Testimonials/> */}
    </div>
  );
};

export default Home;