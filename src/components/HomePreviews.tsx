import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, Zap, Activity, Power, Wrench } from 'lucide-react';
import { imgSubstationYard } from '../assets/images';

interface HomePreviewsProps {
  onAboutClick: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

export default function HomePreviews({
  onAboutClick,
}: HomePreviewsProps) {
  return (
    <div className="space-y-24 pt-20 pb-16 bg-white">
      
      {/* 1. ABOUT US PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Text Info & Core Strength */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-black text-[#F2A900] bg-[#F2A900]/10 border border-[#F2A900]/20 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block">
              Corporate Overview
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B2C59] tracking-tight">
              A Decade of Power Engineering Integrity
            </h2>
            <div className="h-1 w-16 bg-[#F2A900]" />
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Powertech Engineering Solution LLP is a premium CEA-licensed electrical engineering contractor. For over ten years, we have delivered secure, high-voltage solutions to industrial plants, grids, and commercial enterprises.
            </p>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on absolute safety compliance and robust systems, helping facilities avoid power failures and stay aligned with government rules.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-sans text-xs font-bold text-[#0B2C59]">Zero-Accident Protocol</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <Award className="w-5 h-5 text-[#F2A900]" />
                <span className="font-sans text-xs font-bold text-[#0B2C59]">Class-A Licensed Contractors</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onAboutClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2C59] hover:bg-[#0B2C59]/90 text-white font-sans font-black text-xs uppercase tracking-wider transition-all hover:translate-x-1 cursor-pointer"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#F2A900]" />
              </button>
            </div>
          </div>

          {/* Right Block: Image with card overlap */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-64 sm:h-72">
              <img 
                src={imgSubstationYard} 
                alt="Powertech Engineering Substation Yard" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C59]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Integrity &amp; Quality</span>
                <p className="text-sm font-extrabold text-white">CEA Certified Electrical Operations</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-sans font-black text-sm text-[#0B2C59] tracking-tight uppercase tracking-wider">
                Why Powertech?
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0 mt-1.5" />
                  <span>Licensed directly by the Central Electricity Authority (CEA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0 mt-1.5" />
                  <span>Full-cycle expertise from feasibility to grid synchronizations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0 mt-1.5" />
                  <span>Equipped with advanced diagnostic and thermal imaging toolkits.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-xs text-[#F2A900] font-black uppercase tracking-widest bg-[#F2A900]/10 border border-[#F2A900]/20 px-3.5 py-1.5 rounded-full inline-block">
              Core Specialties
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B2C59] tracking-tight">
              High-Performance Engineering Services
            </h2>
            <p className="font-sans text-slate-600 text-sm">
              We design, build, and support the critical electrical installations powering heavy industry.
            </p>
          </div>

          {/* Cards Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0B2C59]/15 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="p-3 bg-[#0B2C59] text-white rounded-xl w-fit">
                <Activity className="w-5 h-5 text-[#F2A900]" />
              </div>
              <h3 className="font-sans font-black text-base text-[#0B2C59] tracking-tight">
                Design & Grid Consultancy
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Detailed feasibility scoping, load-flow mapping, single-line diagrams, and statutory state board approvals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0B2C59]/15 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="p-3 bg-[#0B2C59] text-white rounded-xl w-fit">
                <Power className="w-5 h-5 text-[#F2A900]" />
              </div>
              <h3 className="font-sans font-black text-base text-[#0B2C59] tracking-tight">
                Substation Engineering
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Complete construction of transformer cells, indoor/outdoor switchyards, panel setups, and safety cabling.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0B2C59]/15 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="p-3 bg-[#0B2C59] text-white rounded-xl w-fit">
                <Zap className="w-5 h-5 text-[#F2A900]" />
              </div>
              <h3 className="font-sans font-black text-base text-[#0B2C59] tracking-tight">
                Power Quality & Harmonics
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Advanced diagnostic sweeps tracking thermal anomalies, wave distortions, and installing passive capacitor arrays.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0B2C59]/15 hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="p-3 bg-[#0B2C59] text-white rounded-xl w-fit">
                <Wrench className="w-5 h-5 text-[#F2A900]" />
              </div>
              <h3 className="font-sans font-black text-base text-[#0B2C59] tracking-tight">
                Annual Maintenance (AMC)
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Proactive plant shutdowns, relay calibration checks, insulation assessments, and 2-hour callback support.
              </p>
            </div>

          </div>


        </div>
      </section>

    </div>
  );
}
