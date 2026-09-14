import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { weddingsData } from '../data/hospitalityData';

const Weddings = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Destination Weddings" title="Celebrate Your Story Somewhere Extraordinary." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingsData.map((w) => (
            <div key={w.id} className="bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-72 overflow-hidden relative">
                  <img src={w.heroImage} alt={w.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#1C1C1C] mb-3">{w.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed mb-6">{w.shortDesc}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button onClick={() => navigate(`/weddings/${w.slug}`)} className="w-full py-3 cursor-pointer bg-[#1C1C1C] text-[#FAF9F6] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors">
                  Explore Wedding →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weddings;