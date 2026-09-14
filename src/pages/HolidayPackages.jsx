import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { holidayPackagesData } from '../data/hospitalityData';

const HolidayPackages = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Bespoke Travel" title="Curated Holiday Packages" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {holidayPackagesData.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">{pkg.destination}</span>
                  <h3 className="text-xl font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed mb-6">{pkg.shortDesc}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button onClick={() => navigate(`/holiday-packages/${pkg.slug}`)} className="w-full cursor-pointer py-3 bg-[#1C1C1C] text-[#FAF9F6] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors">
                  View Package Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;