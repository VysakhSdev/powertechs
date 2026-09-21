import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BadgeCheck, ShieldCheck, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  imgSubstationYard,
  imgSwitchgearPanel,
  imgOilFiltration,
  imgRelayTesting,
  imgDesignBlueprint
} from '../assets/images';

interface HeroProps {
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

const HERO_IMAGES = [
  {
    url: imgSubstationYard,
    title: 'EHV Substation Switchyards & Power Distribution',
    badge: 'Substation Engineering'
  },
  {
    url: imgSwitchgearPanel,
    title: 'HT/LT Industrial Switchgear & Control Panels',
    badge: 'Power Distribution'
  },
  {
    url: imgOilFiltration,
    title: 'Transformer Oil Filtration & Dehydration Plant',
    badge: 'Specialized Operations'
  },
  {
    url: imgRelayTesting,
    title: 'Relay & Protection Testing & Calibration',
    badge: 'Testing & Commissioning'
  },
  {
    url: imgDesignBlueprint,
    title: 'CEA Statutory Approvals & Electrical Blueprints',
    badge: 'Design & Consultancy'
  }
];

export default function Hero({ onServicesClick, onContactClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };
  return (
    <div id="hero-section" className="relative bg-slate-50 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Decorative Grid Lines to give an Engineering Blueprint aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
      
      {/* Soft gradient accents */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#0B2C59]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F2A900]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#0B2C59] text-xs font-bold uppercase tracking-wider"
            >
              <Zap className="w-4.5 h-4.5 fill-[#F2A900] text-[#F2A900]" />
              <span>Powertech Engineering Solution LLP</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] tracking-tight text-[#0B2C59] leading-tight uppercase"
            >
              End-to-End Engineering Solutions for <span className="text-[#F2A900]">Reliable Electrical Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans font-black text-sm sm:text-base text-[#0B2C59] uppercase tracking-wider"
            >
              Delivering Innovation Across the Electrical Value Chain.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              Powertech Engineering Solution LLP delivers innovative, reliable and sustainable solutions across the entire electrical value chain — from EHV/HT substations and plant electrification to power quality audits, CEA statutory compliance, and 24/7 lifecycle maintenance.
            </motion.p>

            {/* Corporate Slogan Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white border-l-4 border-[#F2A900] p-4 rounded-r-xl shadow-sm"
            >
              <p className="font-sans font-black text-[#0B2C59] tracking-wide text-xs sm:text-sm uppercase">
                "POWERING RELIABILITY &amp; DELIVERING EXCELLENCE"
              </p>
              <span className="text-slate-500 text-xs mt-0.5 block">Your reliable partner for comprehensive electrical services</span>
            </motion.div>

          </div>

          {/* Right Column: Premium Image Visual and overlay badges */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            {/* Double Border Frame */}
            <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-3xl translate-x-4 translate-y-4 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#F2A900] to-amber-400 rounded-3xl opacity-10 blur-lg" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl bg-white border border-slate-200 p-3 shadow-2xl overflow-hidden"
            >
              {/* Interactive 5-Image Slideshow */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={HERO_IMAGES[currentSlide].url} 
                      alt={HERO_IMAGES[currentSlide].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Manual Navigation Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-[#F2A900] transition-colors md:opacity-0 md:group-hover:opacity-100 cursor-pointer z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-[#F2A900] transition-colors md:opacity-0 md:group-hover:opacity-100 cursor-pointer z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating Badge (Top Left) */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B2C59]/90 text-white font-sans text-[9px] font-bold uppercase tracking-wider border border-white/10 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F2A900]" />
                    {HERO_IMAGES[currentSlide].badge}
                  </span>
                </div>

                {/* Dynamic Description & Indicator Dots (Bottom Panel) */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <div className="text-white drop-shadow-md">
                      <p className="text-[9px] uppercase font-bold tracking-widest text-slate-300">Engineering Portfolio</p>
                      <p className="text-sm sm:text-base font-extrabold text-white leading-snug">{HERO_IMAGES[currentSlide].title}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500 text-white font-sans text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Statutory Approved
                    </div>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    {HERO_IMAGES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                          currentSlide === index ? 'w-6 bg-[#F2A900]' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-image Core Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-2 border-t border-slate-100 text-center">
                <div className="p-2">
                  <p className="font-sans text-[9px] uppercase text-slate-400 font-bold tracking-wider">Capabilities</p>
                  <p className="font-sans font-black text-xl text-[#0B2C59] mt-0.5">20 +</p>
                </div>
                <div className="p-2 border-x border-slate-100">
                  <p className="font-sans text-[9px] uppercase text-slate-400 font-bold tracking-wider">Service Pillars</p>
                  <p className="font-sans font-black text-xl text-[#F2A900] mt-0.5">4</p>
                </div>
                <div className="p-2">
                  <p className="font-sans text-[9px] uppercase text-slate-400 font-bold tracking-wider">Safety Rate</p>
                  <p className="font-sans font-black text-xl text-emerald-600 mt-0.5">100%</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
