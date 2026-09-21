import React from 'react';
import { Mail, Phone, Award, ShieldAlert, Globe, MapPin } from 'lucide-react';
import whiteLogo from '../assets/images/whiteLogo.png';

// Footer logo only - no text branding, use the uploaded white logo asset
const PowertechLogo = () => (
  <div className="flex items-center">
    <img src={whiteLogo} alt="Powertech logo" className="h-15 w-auto object-contain md:h-15" />
  </div>
);

interface FooterProps {
  setActivePage?: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#0B2C59] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle backdrop mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand block */}
          <div className="md:col-span-4 space-y-4">
            <PowertechLogo />
            
            <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-sm">
              Powertech Engineering Solution LLP delivers world-class EHV, HT, and LT industrial electrical systems. We power reliability and deliver excellence with 100% statutory compliance.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F2A900] font-black font-sans">
              <Award className="w-4 h-4 text-[#F2A900]" />
              <span>Powering Reliability & Delivering Excellence</span>
            </div>
          </div>

          {/* Links 1: Department services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest">
              Solutions Matrix
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li className="text-slate-300">Design &amp; Grid Consultancy</li>
              <li className="text-slate-300">HT/LT Substation Engineering</li>
              <li className="text-slate-300">Power Quality &amp; Harmonics</li>
              <li className="text-slate-300">Annual Maintenance Contracts</li>
            </ul>
          </div>

          {/* Links 2: Process */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest">
              The Blueprint
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li className="text-slate-300">Concept Planning</li>
              <li className="text-slate-300">Strategic Procurement</li>
              <li className="text-slate-300">Testing &amp; Commissioning</li>
              <li className="text-slate-300">Lifecycle Support</li>
            </ul>
          </div>

          {/* Contact block summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest">
              Quick Support
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#F2A900] block">Helplines</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F2A900] shrink-0" />
                  <span className="font-bold text-white">+91 98463 41472</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F2A900] shrink-0" />
                  <span className="font-bold text-white">+91 94463 67886</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F2A900] shrink-0" />
                  <span className="font-bold text-white">+91 75589 46983</span>
                </div>
              </li>
              <li className="pt-1.5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#F2A900] block">Email & Web</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F2A900] shrink-0" />
                  <span className="text-slate-300">info@powertecheng.co.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#F2A900] shrink-0" />
                  <span className="text-slate-300">www.powertecheng.co.in</span>
                </div>
              </li>
              <li className="pt-1.5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#F2A900] block">Office Address</span>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F2A900] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-[11px] leading-relaxed">
                    B.No - 23/112/C7, Paul's Corner Building,<br />
                    Near Govt. ITI, HMT Road, Kalamassery (P.O),<br />
                    Ernakulam – 683104, Kerala, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="font-sans text-slate-400">
            &copy; {currentYear} Powertech Engineering Solution LLP. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-slate-400 font-sans">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Statutory Compliance</span>
          </div> */}
        </div>

      </div>
    </footer>
  );
}
