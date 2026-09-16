import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Award } from 'lucide-react';
import powerLogo from '../assets/images/PLOGO.png';

interface NavbarProps {
  activePage: 'home' | 'about' | 'services' | 'contact';
  setActivePage: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

// Custom Powertech Brand Logo Component as described by user logo details
const PowertechLogo = ({ isDarkBg }: { isDarkBg: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 shrink-0 rounded-full border-[3px] border-[#F2A900] bg-white p-1 filter drop-shadow-sm transition-transform duration-300 hover:scale-105">
      <img src={powerLogo} alt="Powertech logo" className="w-full h-full object-contain scale-150" />
    </div>
    <div>
      <span className={`font-sans font-extrabold text-lg md:text-xl tracking-tight block transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-[#0B2240]'}`}>
        POWERTECH
      </span>
      <span className={`font-sans text-[8px] uppercase tracking-[0.25em] block -mt-1 font-bold transition-colors duration-300 ${isDarkBg ? 'text-slate-300' : 'text-slate-500'}`}>
        Engineering Solution LLP
      </span>
    </div>
  </div>
);

export default function Navbar({
  activePage,
  setActivePage,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: 'home' | 'about' | 'services' | 'contact') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: 'home' | 'about' | 'services' | 'contact') => {
    setIsOpen(false);
    handlePageChange(page);
  };

  const getLinkClass = (page: 'home' | 'about' | 'services' | 'contact') => {
    const isActive = activePage === page;
    if (isActive) {
      return 'font-sans text-sm font-black transition-colors cursor-pointer text-[#F2A900] underline decoration-[#F2A900] underline-offset-4';
    }
    return isScrolled
      ? 'font-sans text-sm font-semibold transition-colors cursor-pointer text-slate-100 hover:text-[#F2A900]'
      : 'font-sans text-sm font-semibold transition-colors cursor-pointer text-[#0B2240]/90 hover:text-[#F2A900]';
  };

  const getMobileLinkClass = (page: 'home' | 'about' | 'services' | 'contact') => {
    const isActive = activePage === page;
    if (isActive) {
      return `font-sans text-left text-sm font-black transition-colors py-2 border-b text-[#F2A900] border-[#F2A900]`;
    }
    return isScrolled
      ? `font-sans text-left text-sm font-bold transition-colors py-2 border-b text-slate-200 hover:text-[#F2A900] border-slate-800`
      : `font-sans text-left text-sm font-bold transition-colors py-2 border-b text-[#0B2240] hover:text-[#F2A900] border-slate-100`;
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B2240]/95 backdrop-blur-md shadow-xl border-b border-[#0B2240]/25 py-3'
          : 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <button 
            onClick={() => handlePageChange('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer"
          >
            <PowertechLogo isDarkBg={isScrolled} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            <button
              onClick={() => handlePageChange('home')}
              className={getLinkClass('home')}
            >
              Home
            </button>
            <button
              onClick={() => handlePageChange('about')}
              className={getLinkClass('about')}
            >
              About Us
            </button>
            <button
              onClick={() => handlePageChange('services')}
              className={getLinkClass('services')}
            >
              Services
            </button>
            <button
              onClick={() => handlePageChange('contact')}
              className={getLinkClass('contact')}
            >
              Contact Us
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center gap-2 text-xs border-r pr-4 ${isScrolled ? 'text-slate-300 border-slate-700' : 'text-slate-500 border-slate-200'}`}>
              <Award className={`w-4 h-4 ${isScrolled ? 'text-[#F2A900]' : 'text-[#0B2240]'}`} />
              <span className="font-sans font-bold tracking-wider uppercase text-[9px]">
                Powering Reliability
              </span>
            </div>
            <button
              onClick={() => handlePageChange('contact')}
              id="cta-consult-btn"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs font-bold tracking-wide uppercase transition-all shadow-md active:translate-y-[1px] cursor-pointer ${
                isScrolled
                  ? 'bg-[#F2A900] hover:bg-[#F2A900]/90 text-[#0B2240] shadow-[#F2A900]/10 hover:-translate-y-[1px]'
                  : 'bg-[#0B2240] hover:bg-[#0B2240]/90 text-white shadow-slate-900/10 hover:-translate-y-[1px]'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled 
                  ? 'text-slate-200 hover:text-[#F2A900] border-slate-700 bg-slate-900/45' 
                  : 'text-[#0B2240] hover:text-[#F2A900] border-slate-200 bg-slate-100/50'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden shadow-2xl py-5 px-6 transition-all duration-300 ${isScrolled ? 'bg-[#0B2240]' : 'bg-white border-t border-slate-100'}`}>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleLinkClick('home')}
              className={getMobileLinkClass('home')}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={getMobileLinkClass('about')}
            >
              About Us
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className={getMobileLinkClass('services')}
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className={getMobileLinkClass('contact')}
            >
              Contact Us
            </button>
            <div className="pt-2 flex flex-col gap-3">
              <div className={`flex items-center gap-2 text-xs font-medium ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                <Award className="w-4 h-4 text-[#F2A900]" />
                <span>Powering Reliability &amp; Excellence</span>
              </div>
              <button
                onClick={() => handleLinkClick('contact')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#F2A900] text-[#0B2240] font-sans text-sm font-bold shadow-md hover:bg-[#F2A900]/90 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
