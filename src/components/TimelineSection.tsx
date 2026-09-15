import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Compass, ShoppingCart, Hammer, ShieldCheck, Settings, Activity, Quote } from 'lucide-react';
import { timelineSteps } from '../data';

interface TimelineSectionProps {
  id?: string;
}

export default function TimelineSection({ id = 'timeline-section' }: TimelineSectionProps) {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#F2A900]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#F2A900]" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-[#F2A900]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#F2A900]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#F2A900]" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-[#F2A900]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#F2A900]" />;
      default:
        return <Lightbulb className="w-6 h-6 text-[#F2A900]" />;
    }
  };

  return (
    <section id={id} className="py-20 bg-[#0B2240] text-white relative overflow-hidden scroll-mt-20">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#132f54_1px,transparent_1px),linear-gradient(to_bottom,#132f54_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F2A900]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F2A900]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs text-[#F2A900] font-black uppercase tracking-widest bg-[#F2A900]/10 border border-[#F2A900]/20 px-3.5 py-1.5 rounded-full">
            Our Delivery Blueprint
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight pt-2">
            The Asset Lifecycle Process
          </h2>
          <div className="h-1.5 w-16 bg-[#F2A900] mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            From single component installations to grand-scale industrial switchyard assemblies, we maintain structured lifecycle accountability.
          </p>
        </div>

        {/* Closing Value Prop / Prominent Quote Block */}
        <div className="max-w-4xl mx-auto bg-[#071930] border border-slate-800 rounded-3xl p-6 md:p-8 mb-20 shadow-2xl relative">
          <div className="absolute -top-4 left-6 bg-[#F2A900] text-[#0B2240] p-2 rounded-xl shadow-lg">
            <Quote className="w-5 h-5 fill-[#0B2240]" />
          </div>
          <p className="font-sans font-bold text-base sm:text-lg md:text-xl text-slate-100 italic leading-relaxed pt-2 pl-4 border-l-2 border-[#F2A900]/50">
            "We provide complete services from concept, design, procurement, installation, testing and commissioning to operation, maintenance and lifecycle support, ensuring reliable, safe and sustainable electrical systems."
          </p>
          <div className="mt-4 flex items-center gap-2 justify-end text-xs text-slate-400">
            <span className="font-mono text-[#F2A900] font-bold uppercase tracking-wider">POWERTECH LIFECYCLE ASSURANCE</span>
          </div>
        </div>

        {/* Timeline Component: Horizontal on Desktop, Vertical on Mobile */}
        
        {/* DESKTOP HORIZONTAL TIMELINE */}
        <div className="hidden xl:block relative py-12">
          {/* Dotted connecting line */}
          <div className="absolute top-[82px] left-[5%] right-[5%] h-0.5 border-t-2 border-dashed border-[#1e3e68] z-0" />
          
          {/* Glowing active line overlay */}
          <div className="absolute top-[82px] left-[5%] right-[40%] h-0.5 bg-gradient-to-r from-[#F2A900] to-[#F2A900]/20 z-0" />

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Step Circle Bubble */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#071930] border-2 border-[#1e3e68] flex items-center justify-center group-hover:border-[#F2A900] group-hover:shadow-lg group-hover:shadow-[#F2A900]/20 transition-all duration-300">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#1e3e68] text-slate-200 border border-slate-700 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {step.phase.split(' ')[1]}
                  </span>
                </div>

                {/* Step Content Card */}
                <div className="space-y-2 bg-[#071930]/60 border border-[#132f54] rounded-2xl p-5 hover:bg-[#071930] hover:border-[#F2A900]/50 transition-all duration-300 h-full flex flex-col justify-between shadow-lg">
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-[10px] text-[#F2A900] uppercase tracking-widest font-mono">
                      {step.phase}
                    </h4>
                    <h3 className="font-sans font-extrabold text-sm text-white tracking-tight leading-tight group-hover:text-[#F2A900] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[11px] text-slate-300 leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TABLET / MID-SCREEN ADAPTATION & MOBILE VERTICAL TIMELINE */}
        <div className="xl:hidden relative max-w-xl mx-auto">
          {/* Vertical continuous dashed line */}
          <div className="absolute top-8 bottom-8 left-6 w-0.5 border-l-2 border-dashed border-[#1e3e68] z-0" />

          <div className="space-y-10 relative z-10">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-6 items-start group"
              >
                {/* Step Circle */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#071930] border-2 border-[#1e3e68] flex items-center justify-center group-hover:border-[#F2A900] transition-colors shadow-md">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 bg-[#1e3e68] border border-slate-700 text-slate-200 text-[8px] font-bold px-1.5 py-0.5 rounded font-mono">
                    {step.phase.split(' ')[1]}
                  </span>
                </div>

                {/* Content Box */}
                <div className="space-y-1.5 bg-[#071930]/60 border border-[#132f54] p-5 rounded-2xl hover:border-[#F2A900]/50 transition-colors w-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#F2A900] uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-500" />
                    <h4 className="font-sans font-extrabold text-sm text-white tracking-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
