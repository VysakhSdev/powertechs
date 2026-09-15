import React from 'react';
import { ShieldCheck, Award, Zap, Users, Star, CheckCircle, Wrench, Clock, ShieldAlert } from 'lucide-react';
import { CORE_PILLARS, WHY_CHOOSE_US } from '../data';

export default function Stats() {
  // Let's map each pillar to an icon
  const getPillarIcon = (title: string) => {
    switch (title) {
      case 'SAFETY FIRST':
        return <ShieldAlert className="w-6 h-6 text-[#F2A900]" />;
      case 'ENGINEERING EXCELLENCE':
        return <Award className="w-6 h-6 text-[#F2A900]" />;
      case 'ENERGY EFFICIENT':
        return <Zap className="w-6 h-6 text-[#F2A900]" />;
      case 'CUSTOMER FOCUSED':
        return <Users className="w-6 h-6 text-[#F2A900]" />;
      default:
        return <Star className="w-6 h-6 text-[#F2A900]" />;
    }
  };

  const getWhyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-[#F2A900]" />;
      case 1:
        return <CheckCircle className="w-5 h-5 text-[#F2A900]" />;
      case 2:
        return <Wrench className="w-5 h-5 text-[#F2A900]" />;
      case 3:
        return <Clock className="w-5 h-5 text-[#F2A900]" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-[#F2A900]" />;
      default:
        return <Star className="w-5 h-5 text-[#F2A900]" />;
    }
  };

  return (
    <div id="stats-section" className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 4 CORE PILLARS BANNER (Dark Blue block from the brochure) */}
      <div className="max-w-7xl mx-auto bg-[#0B2240] rounded-3xl shadow-2xl p-8 border border-slate-800 relative overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
          {CORE_PILLARS.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className={`pt-6 md:pt-0 lg:px-6 flex flex-col items-center text-center space-y-3 ${
                index === 0 ? 'lg:pl-0 pt-0' : ''
              }`}
            >
              <div className="p-3 rounded-full bg-[#1e293b] border border-[#F2A900]/20 flex items-center justify-center shadow-lg">
                {getPillarIcon(pillar.title)}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans font-black text-xs text-[#F2A900] tracking-widest uppercase">
                  {pillar.title}
                </h4>
                <p className="font-sans font-bold text-sm text-white leading-tight">
                  {pillar.subTitle}
                </p>
                <p className="font-sans text-[11px] text-slate-300 leading-relaxed max-w-xs mx-auto">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US? SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0B2240] font-sans text-xs font-black tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 text-[#F2A900] fill-[#F2A900]" />
            <span>Why Choose Us?</span>
          </div>
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#0B2240] tracking-tight">
            The Professional Choice for High-Voltage Engineering
          </h3>
          <p className="font-sans text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
            Powertech delivers certified, safe compliance and technical competence across all project phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div 
              key={item.title}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                  {getWhyIcon(index)}
                </div>
                <h4 className="font-sans font-extrabold text-xs text-[#0B2240] leading-snug tracking-tight">
                  {item.title}
                </h4>
              </div>
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
