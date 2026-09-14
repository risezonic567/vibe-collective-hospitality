import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { holidayPackagesData } from '../data/hospitalityData';

const PackageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pkg = holidayPackagesData.find((p) => p.slug === slug) || holidayPackagesData[0];

  return (
    <div className="bg-[#FAF9F6] pt-24 pb-24">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover filter brightness-75" />
        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl text-[#FAF9F6]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">{pkg.destination} • {pkg.duration}</span>
          <h1 className="text-3xl md:text-5xl font-serif mt-2">{pkg.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-xl font-serif text-[#1C1C1C] mb-4">Journey Overview</h3>
            <p className="text-xs text-[#555] leading-relaxed mb-6">{pkg.overview}</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#1C1C1C] mb-6">Itinerary</h3>
            <div className="space-y-6 border-l border-[#D4AF37]/40 pl-6 ml-2">
              {pkg.itinerary.map((item, index) => (
                <div key={index} className="relative">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">{item.day}</span>
                  <h4 className="text-sm font-serif text-[#1C1C1C] font-semibold mt-1">{item.title}</h4>
                  <p className="text-xs text-[#555] leading-relaxed mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-[#1C1C1C] text-[#FAF9F6] p-8 border border-[#D4AF37]/30">
            <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Ready to Plan?</h3>
            <button onClick={() => navigate('/contact')} className="w-full mt-6 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors">
              Send Direct Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;