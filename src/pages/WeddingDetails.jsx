import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { weddingsData } from '../data/hospitalityData';

const WeddingDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const w = weddingsData.find((wed) => wed.slug === slug) || weddingsData[0];

  return (
    <div className="bg-[#FAF9F6] pt-24 pb-24">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={w.heroImage} alt={w.title} className="w-full h-full object-cover filter brightness-75" />
        <div className="absolute bottom-12 left-6 md:left-12 text-[#FAF9F6]">
          <h1 className="text-3xl md:text-5xl font-serif">{w.title}</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-center">
        <p className="text-xs text-[#555] leading-relaxed mb-8">{w.overview}</p>
        <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default WeddingDetails;