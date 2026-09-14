import React from 'react';
import AboutIntro from '../components/AboutIntro';


const About = () => (
 <div className="bg-[#FAF9F6]">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Hospitality"
            className="w-full h-full object-cover filter brightness-75 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        
        </div>
      </section>

    <AboutIntro/>

   
    </div>
);

export default About;