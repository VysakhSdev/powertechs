import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-[#F2A900] selection:text-[#0B2240]">
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
              <Hero
                onServicesClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onContactClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Trust Stats Bar */}
              <Stats />

              {/* Industries Served Section */}
              <IndustriesServed />

              {/* Previews with "Read More" / "View More" navigation */}
              <HomePreviews
                onAboutClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onServicesClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
