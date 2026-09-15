import React from 'react';
import { Factory, Zap, Building2, HardHat, School, Droplet, Layers } from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data';

export default function IndustriesServed() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-8 h-8 text-[#F2A900]" />;
      case 'FlameKindling':
        return <Zap className="w-8 h-8 text-[#F2A900]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#F2A900]" />;
      case 'Construction':
        return <HardHat className="w-8 h-8 text-[#F2A900]" />;
      case 'School':
        return <School className="w-8 h-8 text-[#F2A900]" />;
      case 'Droplet':
        return <Droplet className="w-8 h-8 text-[#F2A900]" />;
      default:
        return <Layers className="w-8 h-8 text-[#F2A900]" />;
    }
  };

  return (
    <section className="py-16 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-sans text-xs font-black text-[#F2A900] uppercase tracking-widest block">
            Target Sectors
          </span>
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#0B2240] tracking-tight">
            Industries We Serve
          </h3>
          <p className="font-sans text-slate-500 text-xs sm:text-sm">
            Providing custom, CEA-compliant engineering and switchyard maintenance across key power-intensive sectors.
          </p>
        </div>

        {/* Six Grid Sectors from the brochure bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {INDUSTRIES_SERVED.map((industry) => (
            <div 
              key={industry.name}
              className="group p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-[#0B2240] hover:border-[#0B2240] hover:shadow-lg text-center flex flex-col items-center justify-between space-y-4 transition-all duration-300"
            >
              <div className="p-3.5 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                {getIndustryIcon(industry.iconName)}
              </div>
              <h4 className="font-sans font-black text-xs text-[#0B2240] group-hover:text-white transition-colors leading-tight">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
