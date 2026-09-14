import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/hospitalityData';

const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ev = eventsData.find((e) => e.slug === slug) || eventsData[0];

  return (
    <div className="bg-[#FAF9F6] pt-24 pb-24">
      <div className="relative h-[50vh] overflow-hidden">
        <img src={ev.heroImage} alt={ev.title} className="w-full h-full object-cover filter brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-serif text-[#FAF9F6]">{ev.title}</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-center">
        <p className="text-xs text-[#555] leading-relaxed mb-8">{ev.overview}</p>
        <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors">
          Plan Your Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;