import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  MapPin,
  Building2,
  Users,
  ShieldCheck,
  Clapperboard,
  Plane,
  ConciergeBell,
} from "lucide-react";
import { eventsData } from "../data/hospitalityData";

const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const ev =
    eventsData.find((e) => e.slug === slug) || eventsData[0];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  const serviceIcons = [
    Building2,
    ShieldCheck,
    Clapperboard,
    Plane,
    ConciergeBell,
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C] pt-20">
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <img
          src={ev.heroImage}
          alt={ev.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-14">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] mb-5">
              <MapPin size={15} />
              Corporate Experiences
            </div>

            <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              {ev.title}
            </h1>

            {ev.shortDesc && (
              <p className="max-w-2xl mt-5 text-sm md:text-base text-white/85 leading-relaxed">
                {ev.shortDesc}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
            The Experience
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
            Where Business Meets
            <br />
            Exceptional Experiences
          </h2>

          <div className="w-16 h-px bg-[#D4AF37] mx-auto my-8" />

          <p className="text-[#555] text-sm md:text-base leading-8">
            {ev.overview}
          </p>
        </div>
      </section>

      {ev.services?.length > 0 && (
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
                Our Expertise
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-serif">
                Seamless Event Management
              </h2>

              <p className="mt-5 text-sm text-[#777] leading-7">
                Every element is carefully planned and executed to deliver
                a polished, high-impact corporate experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {ev.services.map((service, index) => {
                const Icon = serviceIcons[index] || Check;

                return (
                  <div
                    key={index}
                    className="group border border-[#E5DCC3] bg-[#FAF9F6] p-7 text-center hover:bg-white hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#B8941F] group-hover:text-[#1C1C1C] transition-colors"
                      />
                    </div>

                    <h3 className="font-serif text-lg leading-7">
                      {service}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="relative h-[450px] md:h-[550px] overflow-hidden">
              <img
                src={ev.heroImage}
                alt={ev.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div>
              <span className="text-[#B8941F] text-xs uppercase tracking-[0.3em] font-semibold">
                The Vibe Collective Difference
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
                Precision,
                <br />
                Elegance & Impact
              </h2>

              <div className="w-16 h-px bg-[#D4AF37] my-8" />

              <p className="text-[#666] text-sm md:text-base leading-8">
                From intimate leadership retreats to large-scale
                international conferences, we bring together strategic
                planning, refined hospitality and flawless execution.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "End-to-end event planning",
                  "Dedicated on-ground coordination",
                  "Premium guest and hospitality management",
                  "International travel & logistics support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-7 h-7 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0">
                      <Check
                        size={14}
                        className="text-[#B8941F]"
                      />
                    </div>

                    <span className="text-sm text-[#555]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Users
              size={24}
              className="mx-auto mb-4 text-[#D4AF37]"
              strokeWidth={1.5}
            />
            <h3 className="text-3xl font-serif">VIP</h3>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
              Guest Management
            </p>
          </div>

          <div>
            <Plane
              size={24}
              className="mx-auto mb-4 text-[#D4AF37]"
              strokeWidth={1.5}
            />
            <h3 className="text-3xl font-serif">Global</h3>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
              Travel Logistics
            </p>
          </div>

          <div>
            <Clapperboard
              size={24}
              className="mx-auto mb-4 text-[#D4AF37]"
              strokeWidth={1.5}
            />
            <h3 className="text-3xl font-serif">360°</h3>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
              Event Production
            </p>
          </div>

          <div>
            <ShieldCheck
              size={24}
              className="mx-auto mb-4 text-[#D4AF37]"
              strokeWidth={1.5}
            />
            <h3 className="text-3xl font-serif">Seamless</h3>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
              Execution
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={ev.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
            Plan Your Next
            <br />
            Exceptional Event
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/80 leading-7 max-w-xl mx-auto">
            Share your event vision, objectives and requirements with us.
            Our team will create a seamless experience tailored to your
            organization.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-9 px-9 py-4 bg-[#D4AF37] text-[#1C1C1C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300"
          >
            Plan Your Event
          </button>
        </div>
      </section>
    </main>
  );
};

export default EventDetails;