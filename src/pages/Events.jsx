import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { eventsData } from '../data/hospitalityData';

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Corporate & High Galas" title="Creating Experiences That Leave an Impression." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.map((ev) => (
            <div key={ev.id} className="group relative h-96 overflow-hidden border border-[#E5DCC3] shadow-md">
              <img src={ev.heroImage} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-serif text-[#FAF9F6] mb-2">{ev.title}</h3>
                <button onClick={() => navigate(`/events/${ev.slug}`)} className="text-xs cursor-pointer uppercase tracking-widest text-[#D4AF37] font-semibold hover:underline text-left">
                  Explore Capabilities →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;