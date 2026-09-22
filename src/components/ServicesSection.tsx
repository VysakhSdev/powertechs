import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Cpu, Activity, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, Search, SlidersHorizontal, Layers, ArrowRight } from 'lucide-react';
import { ALL_SERVICES, ServiceItem } from '../data';
import {
  imgDesignBlueprint,
  imgSubstationYard,
  imgRelayTesting,
  imgOilFiltration
} from '../assets/images';

interface ServicesSectionProps {
  id?: string;
  onInquireService?: (serviceTitle: string) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All Services', count: 26, icon: <Layers className="w-4 h-4" /> },
  { id: 'Design & Consultancy', name: 'Design & Consultancy', count: 6, icon: <Compass className="w-4 h-4" /> },
  { id: 'Engineering & Commissioning', name: 'Engineering & Commissioning', count: 6, icon: <Cpu className="w-4 h-4" /> },
  { id: 'Testing & Maintenance', name: 'Testing & Maintenance', count: 5, icon: <Activity className="w-4 h-4" /> },
  { id: 'Specialized Operations', name: 'Specialized Operations', count: 9, icon: <ShieldCheck className="w-4 h-4" /> }
];

const CATEGORY_IMAGES: Record<string, string> = {
  'Design & Consultancy': imgDesignBlueprint,
  'Engineering & Commissioning': imgSubstationYard,
  'Testing & Maintenance': imgRelayTesting,
  'Specialized Operations': imgOilFiltration
};

const CATEGORY_DESCS: Record<string, string> = {
  'Design & Consultancy': 'Comprehensive blueprints, single-line diagrams, regulatory liaisons, load evaluations, and compliance consulting conforming to strict Indian Standards and CEA guidelines.',
  'Engineering & Commissioning': 'Turnkey site erection, outdoor EHV/HT substations, transformer commissioning, HT cable jointing, and comprehensive industrial plant power connectivity.',
  'Testing & Maintenance': 'Preventative shutdown tests, relay calibration, thermal imaging, insulation diagnostics, and 24/7 priority Annual Maintenance Contract support.',
  'Specialized Operations': 'High-precision underground cable fault detection, Open Access energy purchase advisory, oil filtration, and advanced on-field transformer routine assessments.'
};

export default function ServicesSection({ id = 'services-section', onInquireService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter service list based on category and search query
  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design & Consultancy':
        return <Compass className="w-5 h-5 text-[#F2A900]" />;
      case 'Engineering & Commissioning':
        return <Cpu className="w-5 h-5 text-[#F2A900]" />;
      case 'Testing & Maintenance':
        return <Activity className="w-5 h-5 text-[#F2A900]" />;
      case 'Specialized Operations':
        return <ShieldCheck className="w-5 h-5 text-[#F2A900]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F2A900]" />;
    }
  };

  return (
    <section id={id} className="py-20 bg-slate-50 relative scroll-mt-20">
      
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B2C59]/10 text-[#0B2C59] text-xs font-black uppercase tracking-wider border border-[#0B2C59]/20">
            <Sparkles className="w-4 h-4 text-[#F2A900] fill-[#F2A900]" />
            <span>Brochure Capability Directory</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#0B2C59] tracking-tight">
            End-To-End Engineering Services
          </h2>
          <div className="h-1.5 w-20 bg-[#F2A900] mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Powertech Engineering Solution LLP delivers certified, highly reliable, and sustainable solutions across the entire electrical value chain. Explore all 26 of our professional capability tracks.
          </p>
        </div>

        {/* Search and Category Filter Panel */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search all 26 services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0B2C59]/20 focus:border-[#0B2C59] text-[#0B2C59] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-[#0B2C59]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Indicator */}
            {/* <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-[#0B2C59]/60" />
              <span className="font-sans text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                Found {filteredServices.length} of {ALL_SERVICES.length} Services
              </span>
            </div> */}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B2C59] text-white shadow-md'
                      : 'bg-slate-50 text-[#0B2C59] border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Profile Header (Hidden when 'All' is selected) */}
        {activeCategory !== 'all' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0B2C59] text-white p-8 rounded-3xl items-center shadow-lg border border-slate-800"
          >
            <div className="md:col-span-8 space-y-3">
              <span className="font-sans text-xs font-black text-[#F2A900] uppercase tracking-widest">
                Department Profile
              </span>
              <h3 className="font-sans font-black text-2xl text-white tracking-tight">
                {activeCategory}
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                {CATEGORY_DESCS[activeCategory]}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-36">
                <img 
                  src={CATEGORY_IMAGES[activeCategory]} 
                  alt={activeCategory} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0B2C59]/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-[#0B2C59]/5 transition-colors">
                      {getServiceCategoryIcon(service.category)}
                    </div>
                    <span className="font-sans text-[9px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 border border-slate-200/60 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans font-black text-sm text-[#0B2C59] tracking-tight group-hover:text-[#F2A900] transition-colors leading-snug">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#0B2C59]/40">
                    CODE PW-{service.id.toUpperCase()}
                  </span>
                  {onInquireService ? (
                    <button
                      onClick={() => onInquireService(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0B2C59] hover:text-[#F2A900] transition-colors uppercase tracking-widest cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-xs font-black text-[#0B2C59]/60 uppercase tracking-widest">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Certified Track</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <p className="font-sans text-slate-400 text-sm">
                No engineering tracks found matching your query.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-xs font-extrabold text-[#0B2C59] hover:text-[#F2A900] underline uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
