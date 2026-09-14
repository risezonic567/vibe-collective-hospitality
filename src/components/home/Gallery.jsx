import React from 'react';
import SectionTitle from '../SectionTitle';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", title: "Luxury Resort Sanctuary" },
  { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop", title: "Regal Wedding Celebrations" },
  { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", title: "Corporate Summits & Galas" },
  { url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop", title: "Overwater Ocean Villas" },
  { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop", title: "Imperial Palace Dinners" },
  { url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop", title: "Alpine Chalet Retreats" }
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle subtitle="Visual Storytelling" title="A Glimpse Into Luxury" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="group relative h-72 overflow-hidden shadow-md">
            <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;