import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import HomePreviews from './components/HomePreviews';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import IndustriesServed from './components/IndustriesServed';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'about' | 'services' | 'contact'>('home');
  const [selectedPlan, setSelectedPlan] = useState<{
    sector: string;
    voltage: string;
    focus: string;
    recommendedServices: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  // Keep the site on the home page only while in staging mode.
  const stayOnHomePage = (page?: 'home' | 'about' | 'services' | 'contact') => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-[#F2A900] selection:text-[#0B2C59]">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full border border-[#F2A900]/20" />
                <div className="absolute h-20 w-20 rounded-full border border-[#0B2C59]/10" />
                <div className="h-14 w-14 rounded-full border-[3px] border-[#F2A900] border-t-transparent animate-spin" />
              </div>

              <div className="text-center">
                <div className="text-[10px] font-black tracking-[0.45em] text-[#0B2C59] uppercase">
                  Powertech
                </div>
                <div className="mt-2 text-[9px] font-semibold tracking-[0.35em] text-slate-500 uppercase">
                  Engineering
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F2A900] animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-[#0B2C59] animate-pulse [animation-delay:120ms]" />
                <span className="h-2 w-2 rounded-full bg-[#F2A900] animate-pulse [animation-delay:240ms]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Page Area with Route Transitions */}
      <main className="grow">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Hero Banner */}
              <Hero />

              {/* Trust Stats Bar */}
              <Stats />

              {/* Industries Served Section */}
              <IndustriesServed />

              {/* Previews with "Read More" / "View More" navigation */}
              <HomePreviews
                onAboutClick={() => {
                  setActivePage('about');
                }}
              />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Dedicated About Us Page Component */}
              <AboutSection />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Capabilities & Solutions Matrix Dashboard */}
              <div className="pt-16">
                <ServicesSection id="services-section" />
              </div>

              {/* Strategic Delivery Blueprint Timeline */}
              <TimelineSection id="timeline-section" />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Comprehensive Scoping Inquiry Request Form */}
              <div className="pt-20">
                <ContactSection
                  id="contact-section"
                  selectedPlanData={selectedPlan}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Slate Footer with callback support */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
