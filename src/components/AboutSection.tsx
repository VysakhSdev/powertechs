import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Target, CheckCircle2, Sparkles, Zap, HeartPulse, Camera } from 'lucide-react';
import {
  imgSubstationYard,
  imgSwitchgearPanel,
  imgOilFiltration,
  imgRelayTesting
} from '../assets/images';

export default function AboutSection() {
  const values = [
    {
      title: 'Safety First: Committed to Zero Harm',
      description: 'Enforcing a strict zero-incident protocol across all heavy EHV, HT, and LT installations with complete PPE compliance and statutory safety standards.',
      icon: <ShieldCheck className="w-6 h-6 text-[#F2A900]" />
    },
    {
      title: 'Engineering Excellence: Quality Solutions',
      description: 'Supervised by certified Class-A electrical license holders, adhering to strict IS/IEC guidelines, and deploying verified, calibrated components.',
      icon: <Award className="w-6 h-6 text-[#F2A900]" />
    },
    {
      title: 'Energy Efficient: Sustainable Tomorrow',
      description: 'Implementing harmonic mitigation, demand-side power conservation, and seamless green energy integration to eliminate unnecessary idle losses.',
      icon: <Zap className="w-6 h-6 text-[#F2A900]" />
    },
    {
      title: 'Customer Focused: Your Reliability',
      description: 'Our commitment is ensuring uptime with scheduled thermal imaging sweeps, preventative shutdowns, and 24/7 AMC emergency response.',
      icon: <HeartPulse className="w-6 h-6 text-[#F2A900]" />
    }
  ];

  const milestones = [
    { year: '2012', title: 'Company Inception', desc: 'Established Powertech with a focus on core HT industrial commissioning.' },
    { year: '2015', title: 'Class A License', desc: 'Obtained official Class-A government electrical contractor accreditation.' },
    { year: '2018', title: 'Grid expansion', desc: 'Successfully designed and delivered our first 132kV heavy industrial switchyard.' },
    { year: '2022', title: 'Harmonics & Testing Hub', desc: 'Inaugurated dedicated power quality audit and advanced diagnostic testing divisions.' }
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#0B2240] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#132f54_1px,transparent_1px),linear-gradient(to_bottom,#132f54_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F2A900]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F2A900]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-[#F2A900] text-xs font-bold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-4 h-4 fill-[#F2A900]" />
            <span>Company Profile</span>
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            End-to-End Engineering Solutions for Reliable Electrical Systems
          </h1>
          <div className="h-1.5 w-24 bg-[#F2A900] mx-auto rounded-full" />
          <p className="font-sans text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Powertech Engineering Solution LLP delivers innovative, reliable and sustainable engineering solutions across the entire electrical value chain — powering reliability and delivering excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Grid: Story & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-xs font-black text-[#F2A900] uppercase tracking-widest block">
                Our Genesis
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B2240] tracking-tight">
                Pioneering High-Voltage Electrical Infrastructure
              </h2>
              <div className="h-1 w-16 bg-[#F2A900]" />
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded by senior electrical system specialists, Powertech Engineering Solution LLP emerged to address the complex power requirements of modern industrial complexes. We understood that steady power supply and total compliance are non-negotiable foundations for production.
              </p>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Over the past decade, we have developed certified systems covering 11kV/22kV/33kV substations, heavy machinery layouts, harmonic mitigations, and comprehensive testing methodologies. Our goal remains absolute: eliminating system failures while keeping statutory logs up-to-date.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="font-sans text-xs font-bold text-[#0B2240]">CEA Statutory Compliant</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="font-sans text-xs font-bold text-[#0B2240]">ISO 9001:2015 Standard</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Highlight image for About Us */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-60 sm:h-64">
                <img 
                  src={imgSwitchgearPanel} 
                  alt="Industrial HT/LT Switchgear & Control Panels"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Engineering Excellence</span>
                  <p className="text-sm font-black text-white">Certified Class-A Substation &amp; Switchgear Operations</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 border border-slate-200 rounded-3xl translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6 overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-[#0B2240]/5">
                    <Target className="w-32 h-32" />
                  </div>
                  <div className="space-y-2 relative z-10">
                    <span className="font-sans text-[11px] font-black text-[#F2A900] uppercase tracking-widest block">
                      Our Mission Statement
                    </span>
                    <h3 className="font-sans font-black text-xl text-[#0B2240] tracking-tight">
                      Powering Reliability &amp; Delivering Excellence
                    </h3>
                    <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                      To deliver innovative, reliable, safe, and sustainable electrical engineering solutions across the entire electrical value chain, adhering to strict zero-harm standards and customer-first execution.
                    </p>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <span className="font-sans text-[11px] font-black text-[#F2A900] uppercase tracking-widest block">
                      Our Corporate Vision
                    </span>
                    <h3 className="font-sans font-black text-xl text-[#0B2240] tracking-tight">
                      Your Reliable Electrical Partner
                    </h3>
                    <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                      To be the foremost trusted partner for end-to-end industrial power systems, setting benchmarks for quality-driven engineering, energy efficiency, and long-term partnership reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="font-sans text-xs text-[#F2A900] font-black uppercase tracking-widest bg-[#F2A900]/10 border border-[#F2A900]/20 px-3.5 py-1.5 rounded-full">
                Operating Pillars
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B2240] tracking-tight">
                Our Core Values
              </h2>
              <div className="h-1.5 w-16 bg-[#F2A900] mx-auto rounded-full" />
              <p className="font-sans text-slate-600 text-sm sm:text-base">
                Our team represents seasoned electrical design consultants, statutory liaison advisors, and certified installation technicians working with uniform core values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B2240]/15 transition-all duration-300 space-y-4">
                  <div className="p-3 bg-[#0B2240] text-white rounded-2xl w-fit shadow-md">
                    {v.icon}
                  </div>
                  <h3 className="font-sans font-black text-base text-[#0B2240] tracking-tight">
                    {v.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Field Operations & Project Showcase */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2240]/5 border border-[#0B2240]/10 text-xs font-bold text-[#0B2240]">
                <Camera className="w-3.5 h-3.5 text-[#F2A900]" />
                <span className="font-sans uppercase tracking-widest text-[10px]">Field Operations &amp; Projects</span>
              </div>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#0B2240] tracking-tight">
                Engineering In Action
              </h3>
              <p className="font-sans text-slate-500 text-xs sm:text-sm">
                Real-world execution from our industrial installations, substation yards, and on-site testing divisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={imgSubstationYard}
                    alt="EHV Substation Switchyard"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B2240]/90 text-[#F2A900] text-[10px] font-bold uppercase tracking-wider">
                    EHV Switchyard
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-sans font-black text-xs text-[#0B2240]">Substation Engineering</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                    Turnkey 11kV/33kV/66kV/110kV switchyards with power transformer erection and busbar structures.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={imgSwitchgearPanel}
                    alt="HT & LT Industrial Switchgear Panels"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B2240]/90 text-[#F2A900] text-[10px] font-bold uppercase tracking-wider">
                    HT/LT Switchgear
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-sans font-black text-xs text-[#0B2240]">Power Distribution</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                    Custom modular switchgear panels, vacuum circuit breakers, and automated bus transfer schemes.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={imgOilFiltration}
                    alt="Transformer Oil Filtration Plant"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B2240]/90 text-[#F2A900] text-[10px] font-bold uppercase tracking-wider">
                    Oil Filtration
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-sans font-black text-xs text-[#0B2240]">Transformer Maintenance</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                    High-vacuum oil dehydration, degassing, and BDV breakdown voltage restoration on live sites.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={imgRelayTesting}
                    alt="Relay & Protection Testing"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B2240]/90 text-[#F2A900] text-[10px] font-bold uppercase tracking-wider">
                    Protection Testing
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-sans font-black text-xs text-[#0B2240]">Relay &amp; IS/IEC Calibration</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed">
                    Calibrated secondary injection test sets, overcurrent/earth fault trip curve verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Timeline Milestones */}
          <div className="space-y-12 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="font-sans text-xs text-[#F2A900] font-black uppercase tracking-widest">
                Our Journey
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#0B2240] tracking-tight">
                Key Corporate Milestones
              </h3>
              <p className="font-sans text-slate-500 text-xs sm:text-sm">
                A brief historical roadmap showing our evolution as a reliable partner in heavy industrial power grids.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {milestones.map((m, i) => (
                <div key={i} className="relative bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="absolute -top-3.5 left-6 bg-[#0B2240] text-white px-3 py-1 rounded-full font-mono text-xs font-black shadow-md border border-[#F2A900]/20">
                    {m.year}
                  </div>
                  <h4 className="font-sans font-black text-sm text-[#0B2240] pt-2 tracking-tight">
                    {m.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Badges */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-4 rounded-3xl">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-sans font-black text-lg text-[#0B2240] tracking-tight">
                Ready to review our past industrial project portfolio?
              </h4>
              <p className="font-sans text-slate-500 text-xs">
                Contact our corporate sales desk to request verified CEA compliance layouts and execution blueprints.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-[#0B2240]/5 border border-[#0B2240]/10 rounded-full font-sans text-xs font-bold text-[#0B2240] uppercase tracking-wider">
                Class-A Approved
              </span>
              <span className="px-4 py-2 bg-[#0B2240]/5 border border-[#0B2240]/10 rounded-full font-sans text-xs font-bold text-[#0B2240] uppercase tracking-wider">
                ISO 9001:2015
              </span>
              <span className="px-4 py-2 bg-[#0B2240]/5 border border-[#0B2240]/10 rounded-full font-sans text-xs font-bold text-[#0B2240] uppercase tracking-wider">
                CEA Certified
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
