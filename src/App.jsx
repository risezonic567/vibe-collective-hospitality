import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import HolidayPackages from './pages/HolidayPackages';
import PackageDetails from './pages/PackageDetails';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Weddings from './pages/Weddings';
import WeddingDetails from './pages/WeddingDetails';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-[#1C1C1C] antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
            <Route path="/holiday-packages/:slug" element={<PackageDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetails />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/weddings/:slug" element={<WeddingDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
} 