import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Building2,
  Compass,
  Sparkles,
  UserCheck,
  Car,
  Ship,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { holidayPackagesData, weddingsData, eventsData, galleryData } from '../data/hospitalityData';

import WhyVibeCollective from '../components/home/WhyVibeCollective';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  const navigate = useNavigate();

  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const [showAllGallery, setShowAllGallery] = useState(false);

  const [activeTab, setActiveTab] = useState('Hotel');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [formData, setFormData] = useState({
    destination: '',
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isTodayOrFuture = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    return target >= today;
  };

  const handleDateClick = (date) => {
    if (!isTodayOrFuture(date)) return;

    if (!formData.checkIn || (formData.checkIn && formData.checkOut)) {
      setFormData({ ...formData, checkIn: date, checkOut: null });
    } else if (date < formData.checkIn) {
      setFormData({ ...formData, checkIn: date, checkOut: null });
    } else {
      setFormData({ ...formData, checkOut: date });
      setIsCalendarOpen(false);
    }
  };

  const renderCalendarMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = new Date(year, month).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-9 w-9 sm:h-8 sm:w-8" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const disabled = !isTodayOrFuture(date);

      const isCheckIn = formData.checkIn && date.getTime() === formData.checkIn.getTime();
      const isCheckOut = formData.checkOut && date.getTime() === formData.checkOut.getTime();
      const isInRange =
        formData.checkIn &&
        formData.checkOut &&
        date > formData.checkIn &&
        date < formData.checkOut;

      let btnStyle = 'hover:bg-[#D4AF37]/20 text-gray-800';
      if (disabled) {
        btnStyle = 'text-gray-300 cursor-not-allowed hover:bg-transparent';
      } else if (isCheckIn || isCheckOut) {
        btnStyle = 'bg-[#D4AF37] text-white font-bold rounded-full shadow-md';
      } else if (isInRange) {
        btnStyle = 'bg-[#D4AF37]/25 text-gray-900 rounded-none';
      }

      days.push(
        <button
          key={day}
          type="button"
          disabled={disabled}
          onClick={() => handleDateClick(date)}
          className={`h-9 w-9 sm:h-8 sm:w-8 text-xs flex items-center justify-center transition-all ${btnStyle}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="p-2 sm:p-3 w-full max-w-[320px] sm:w-64 mx-auto">
        <div className="text-center font-serif text-sm font-semibold text-gray-800 mb-2">
          {monthName}
        </div>
        <div className="grid grid-cols-7 text-center text-[11px] sm:text-[10px] font-bold text-gray-400 mb-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1 place-items-center">{days}</div>
      </div>
    );
  };

  const tabs = [
    { name: 'Hotel', icon: Building2 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Triggered:', {
      type: activeTab,
      ...formData,
      checkInFormatted: formatDate(formData.checkIn),
      checkOutFormatted: formatDate(formData.checkOut),
    });
  };

  return (
    <div className="bg-[#FAF9F6]">
      <section className="relative h-auto min-h-[600px] lg:h-[600px] flex items-end pb-12 lg:pb-16 justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/Images/Image.jpg.jpeg"
            alt="Luxury Hospitality"
            className="w-full h-full object-cover filter brightness-90 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/20 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar mb-0 max-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-xs sm:text-sm font-medium transition-all duration-300 ${isActive
                      ? 'bg-white/95 text-[#D4AF37] shadow-lg backdrop-blur-md font-semibold'
                      : 'bg-black/40 text-white/80 hover:bg-black/60 hover:text-white backdrop-blur-sm'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-b-md rounded-tr-md border border-[#D4AF37]/30 shadow-2xl p-4 sm:p-6 lg:p-4">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-300/60 items-center"
              >
                <div className="lg:col-span-4 px-3 py-1 flex flex-col justify-center">
                  <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    City / Hotel / Area
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="Where are you going?"
                    required
                    className="w-full bg-transparent text-gray-900 placeholder-gray-400 font-serif text-sm sm:text-base focus:outline-none border-none p-0"
                  />
                </div>

                <div
                  className="lg:col-span-4 px-3 py-1 flex flex-col justify-center relative cursor-pointer"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Check in - Check out
                  </label>
                  <div className="text-sm sm:text-base font-serif text-gray-900">
                    {formData.checkIn ? (
                      <span>
                        {formatDate(formData.checkIn)}
                        {formData.checkOut ? ` - ${formatDate(formData.checkOut)}` : ' - Select Check-out'}
                      </span>
                    ) : (
                      <span className="text-gray-400">Select Dates</span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2 px-3 py-1 flex flex-col justify-center relative">
                  <label className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Guests & Rooms
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsGuestOpen(!isGuestOpen)}
                    className="w-full text-left bg-transparent text-gray-900 font-serif text-sm focus:outline-none"
                  >
                    {formData.adults} Adults · {formData.children} Children ·{" "}
                    {formData.rooms} Room{formData.rooms > 1 ? "s" : ""}
                  </button>


                  {isGuestOpen && (
                    <div className="absolute top-full left-0 mt-3 w-[280px] bg-white rounded-xl shadow-2xl border border-[#D4AF37]/20 p-5 z-50">

                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Adults
                          </p>
                          <p className="text-[11px] text-gray-400">
                            Age 13+
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                adults: Math.max(1, formData.adults - 1),
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            −
                          </button>

                          <span className="w-5 text-center text-sm font-medium">
                            {formData.adults}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                adults: formData.adults + 1,
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Children
                          </p>
                          <p className="text-[11px] text-gray-400">
                            Age 0–12
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                children: Math.max(0, formData.children - 1),
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            −
                          </button>

                          <span className="w-5 text-center text-sm font-medium">
                            {formData.children}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                children: formData.children + 1,
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Rooms */}
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Rooms
                          </p>
                          <p className="text-[11px] text-gray-400">
                            Number of rooms
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                rooms: Math.max(1, formData.rooms - 1),
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            −
                          </button>

                          <span className="w-5 text-center text-sm font-medium">
                            {formData.rooms}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                rooms: formData.rooms + 1,
                              })
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Done */}
                      <button
                        type="button"
                        onClick={() => setIsGuestOpen(false)}
                        className="w-full mt-3 py-2.5 bg-[#D4AF37] text-gray-900 text-xs font-semibold uppercase tracking-widest rounded hover:bg-[#C5A028] transition"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                {/* SEARCH BUTTON */}
                <div className="lg:col-span-2 px-2 flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#D4AF37] hover:bg-[#C5A028] text-gray-950 font-semibold tracking-widest text-xs uppercase rounded transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>Search</span>
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {isCalendarOpen && (
                  <>
                    <div
                      className="fixed inset-0 bg-black/40 z-40"
                      onClick={() => setIsCalendarOpen(false)}
                    />

                    <motion.div
                      ref={calendarRef}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-32px)] sm:w-auto max-w-[360px] sm:max-w-none bg-white border border-[#D4AF37]/40 shadow-2xl rounded-2xl sm:rounded-xl p-3 sm:p-5 z-50 flex flex-col items-center"
                    >
                      {/* Header bar with controls */}
                      <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-gray-100">
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentMonth(
                              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                            )
                          }
                          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <div className="text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                            {!formData.checkIn
                              ? 'Select Check-in'
                              : !formData.checkOut
                                ? 'Select Check-out'
                                : 'Selected Dates'}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              setCurrentMonth(
                                new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                              )
                            }
                            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsCalendarOpen(false)}
                            className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 cursor-pointer ml-1"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
                        {renderCalendarMonth(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth()
                        )}
                        <div className="hidden sm:block border-r border-gray-200 h-48" />
                        <div className="hidden sm:block">
                          {renderCalendarMonth(
                            currentMonth.getFullYear(),
                            currentMonth.getMonth() + 1
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
            Welcome to Royalty
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-['Cormorant_Garamond'] text-slate-900 leading-tight">
            More Than Travel. We Create Experiences.
          </h2>

          <p className="text-slate-600 mt-5 leading-relaxed max-w-4xl mx-auto">
            Experience world-class hospitality where coastal charm meets modern
            sophistication. Nestled atop majestic cliffs, The Grand Horizon offers
            breathtaking ocean views, private beach access, and handcrafted luxury
            experiences designed for royalty.
          </p>
          <button
            onClick={() => navigate(`/about`)}
            className="text-sm uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] mt-6 text-center mx-auto flex items-center pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
          >
            OUR STORY →
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
            alt="Hotel Main View"
            className="w-full max-w-4xl h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </section>

      <WhyVibeCollective />

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Destinations" title="Explore Our Journeys" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {holidayPackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {pkg.destination}
                </span>
                <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{pkg.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">
                  {pkg.shortDesc}
                </p>
                {/* <button
                  onClick={() => navigate(`/holiday-packages/${pkg.slug}`)}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </button> */}

                <Link
                  to={`/holiday-packages/${pkg.slug}`}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Our Events" title="Celebrations Beyond Ordinary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {eventsData.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.heroImage}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {event.destination}
                </span>
                <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{event.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">
                  {event.shortDesc}
                </p>
                {/* <button
                  onClick={() => navigate(`/events/${event.slug}`)}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </button> */}

                <Link
                  to={`/events/${event.slug}`}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold cursor-pointer border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle subtitle="Weddings" title="Timeless Celebrations, Beautifully Crafted" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {weddingsData.slice(0, 3).map((wedding) => (
            <div
              key={wedding.id}
              className="group bg-white border border-[#E5DCC3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={wedding.heroImage}
                  alt={wedding.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {wedding.destination}
                </span>
                <h3 className="text-lg font-serif text-[#1C1C1C] mb-3">{wedding.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed mb-6 line-clamp-2">
                  {wedding.shortDesc}
                </p>
                {/* <button
                  onClick={() => navigate(`/weddings/${wedding.slug}`)}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] cursor-pointer font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </button> */}
                  <Link
                 to={`/weddings/${wedding.slug}`}
                  className="text-xs uppercase tracking-widest text-[#1C1C1C] cursor-pointer font-semibold border-b border-[#1C1C1C] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  Explore Package →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Visual Storytelling"
          title="A Glimpse Into Luxury"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {(showAllGallery ? galleryData : galleryData.slice(3, 9)).map(
            (img, idx) => (
              <div
                key={idx}
                className="group relative h-72 overflow-hidden shadow-md"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {img.title}
                  </span>

                </div>
              </div>
            )
          )}
        </div>

        {galleryData.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="px-8 py-3 border border-[#D4AF37] cursor-pointer text-[#1C1C1C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] transition-all duration-300"
            >
              {showAllGallery ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>

      <Testimonials />
    </div>
  );
}