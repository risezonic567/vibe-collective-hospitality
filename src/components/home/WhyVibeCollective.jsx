import React from 'react';
import SectionTitle from '../SectionTitle';
import { Compass, ShieldCheck, Award } from 'lucide-react';

const whyUsFeatures = [
  {
    icon: <Compass className="w-8 h-8 text-[#D4AF37]" />,
    title: "Bespoke Itineraries",
    desc: "Tailor-made journeys crafted down to the smallest detail to suit your unique lifestyle."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
    title: "Private Concierge Desk",
    desc: "Dedicated 24/7 high-touch support ensuring flawless execution across all world destinations."
  },
  {
    icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
    title: "Exclusive Access",
    desc: "Privatized palace buyouts, private jet charters, and direct entry to high-profile events."
  }
];

const WhyVibeCollective = () => {
  return (
    <section className="py-20 text-[#1C1C1C] bg-[#FAF9F6] px-6 md:px-12 border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle dark subtitle="Our Core Pillars" title="Why Vibe Collective" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {whyUsFeatures.map((feat, index) => (
            <div key={index} className="text-center p-8 bg-[#FAF9F6] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300">
              <div className="flex justify-center mb-6">{feat.icon}</div>
              <h3 className="text-xl font-serif text-black mb-4">{feat.title}</h3>
              <p className="text-xs text-black/70 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVibeCollective;