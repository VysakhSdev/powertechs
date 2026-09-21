import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Send, BadgeCheck, Clock } from 'lucide-react';
import { imgRelayTesting } from '../assets/images';

interface ContactSectionProps {
  id?: string;
  selectedPlanData: {
    sector: string;
    voltage: string;
    focus: string;
    recommendedServices: string[];
  } | null;
}

export default function ContactSection({ id = 'contact-section', selectedPlanData }: ContactSectionProps) {
  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    sector: 'Industrial / Manufacturing',
    voltage: 'High Tension',
    focus: 'Safety Audits & Compliance',
    message: '',
    servicesListText: ''
  });

  // Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync inputs when selectedPlanData changes
  useEffect(() => {
    if (selectedPlanData) {
      setFormData(prev => ({
        ...prev,
        sector: selectedPlanData.sector,
        voltage: selectedPlanData.voltage,
        focus: selectedPlanData.focus,
        servicesListText: selectedPlanData.recommendedServices.join('\n'),
        message: `Architect Recommended Solutions:\n${selectedPlanData.recommendedServices.map((s, idx) => `[${idx+1}] ${s}`).join('\n')}\n\nPlease analyze our ${selectedPlanData.voltage} network requirements.`
      }));
    }
  }, [selectedPlanData]);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid contact number.';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id={id} className="py-20 bg-white text-slate-950 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Corporate Info & Trust badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs text-[#F2A900] font-black uppercase tracking-widest bg-[#F2A900]/10 border border-[#F2A900]/20 px-3.5 py-1.5 rounded-full inline-block">
                Partner with us
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B2C59] tracking-tight">
                Request an Engineering Consultation
              </h2>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with our certified electrical engineering consultants. We provide detailed feasibility studies, system audits, and comprehensive deployment proposals for utilities, industries, and institutions.
              </p>
            </div>

            {/* Supporting Contact Image */}
            <div className="relative rounded-2xl overflow-hidden shadow border border-slate-200 h-48 sm:h-52">
              <img 
                src={imgRelayTesting} 
                alt="Support, Relay Calibration and Maintenance Operations" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Fast-response helpline</span>
                <p className="text-xs font-black text-white">Round-the-clock Emergency Engineering Desk</p>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p className="font-sans text-[11px] font-black text-[#0B2C59]/60 uppercase tracking-widest">
                Corporate Office
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-black text-xs text-[#0B2C59]">Registered Office Address</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                      <strong>Powertech Engineering Solution LLP</strong><br />
                      B.No - 23/112/C7, Paul's Corner Building<br />
                      Near Govt. ITI, HMT Road, Kalamassery (P.O)<br />
                      Ernakulam – 683104, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-black text-xs text-[#0B2C59]">Support & Contact Numbers</h4>
                    <div className="font-sans text-xs text-slate-600 mt-1 space-y-0.5">
                      <p>+91 98463 41472</p>
                      <p>+91 94463 67886</p>
                      <p>+91 75589 46983</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-black text-xs text-[#0B2C59]">Email & Official Website</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      info@powertecheng.co.in
                    </p>
                    <p className="font-sans text-xs text-[#0B2C59] font-semibold mt-0.5">
                      <a href="https://www.powertecheng.co.in" target="_blank" rel="noreferrer" className="hover:text-[#F2A900] underline">
                        www.powertecheng.co.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50/50 flex items-start gap-2.5">
                <BadgeCheck className="w-5 h-5 text-[#F2A900] shrink-0" />
                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0B2C59]">Certified</h5>
                  <p className="font-sans text-[10px] text-slate-500 mt-0.5">CEA Licensed Grid Engineers</p>
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50/50 flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#F2A900] shrink-0" />
                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0B2C59]">Turnaround</h5>
                  <p className="font-sans text-[10px] text-slate-500 mt-0.5">Scoping Call in 2 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-8 relative">
              <div className="absolute top-0 left-10 right-10 h-1 bg-[#F2A900] rounded-full" />
              
              {/* Highlight bar if plan synchronized */}
              {selectedPlanData && !isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#F2A900]/10 border border-[#F2A900]/30 flex items-center justify-between text-xs text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F2A900]" />
                    <span className="font-sans font-extrabold text-[#0B2C59]">
                      Architect blueprint synchronized!
                    </span>
                  </div>
                  <span className="font-sans text-[9px] font-black text-white bg-[#0B2C59] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Active
                  </span>
                </div>
              )}

              {/* Form Content */}
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full p-3 rounded-xl border bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Corporate Email */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full p-3 rounded-xl border bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full p-3 rounded-xl border bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Industrial Enterprises Ltd."
                        className={`w-full p-3 rounded-xl border bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all ${
                          errors.companyName ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Sector */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Sector Focus
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all cursor-pointer"
                      >
                        <option>Industrial / Manufacturing</option>
                        <option>Utility / Grid Operator</option>
                        <option>EV Fleet / Charge Operator</option>
                        <option>Commercial / Institutional</option>
                      </select>
                    </div>

                    {/* Voltage level */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Voltage Spectrum
                      </label>
                      <select
                        name="voltage"
                        value={formData.voltage}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all cursor-pointer"
                      >
                        <option>Extra High Voltage</option>
                        <option>High Tension</option>
                        <option>Low Tension</option>
                      </select>
                    </div>

                    {/* Focus Goal */}
                    <div className="space-y-1">
                      <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                        Project Interest
                      </label>
                      <select
                        name="focus"
                        value={formData.focus}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all cursor-pointer"
                      >
                        <option>Concept Design & Approval</option>
                        <option>Safety Audits & Compliance</option>
                        <option>Preventive testing & AMC</option>
                        <option>Full Turnkey Execution</option>
                      </select>
                    </div>
                  </div>

                  {/* Messages / Requirements text block */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] font-black uppercase tracking-wider text-slate-500 pl-1 block">
                      Specific Requirements / System Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="List approximate transformer capacity (e.g., 2 MVA), existing issues (e.g., thermal hotspots, harmonic trippings), or regulatory permits sought..."
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white font-sans text-xs focus:ring-4 focus:ring-[#0B2C59]/5 focus:border-[#0B2C59] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy reminder */}
                  <p className="font-sans text-[10px] text-slate-400 leading-normal">
                    🔒 By submitting this form, you authorize Powertech Engineering Solution LLP to contact you via telephone or email to schedule the initial technical scoping conference.
                  </p>

                  {/* Action button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0B2C59] hover:bg-[#0B2C59]/90 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md transition-all disabled:opacity-50 hover:translate-y-[-1px] active:translate-y-[1px] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Scoping File...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F2A900]" />
                        <span>Submit Corporate Request</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-2xl text-[#0B2C59] tracking-tight">
                      Inquiry Scoping Completed
                    </h3>
                    <p className="font-sans text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900 font-bold">{formData.fullName}</strong>. Your {formData.voltage} system audit request has been logged on behalf of <strong className="text-slate-900 font-extrabold">{formData.companyName}</strong>.
                    </p>
                  </div>

                  {/* Visual Scoping Ticket details */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3 shadow-inner">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2 border-b border-slate-200">
                      <span>Ref Ticket ID:</span>
                      <span className="font-black text-[#0B2C59]">#PT-{(Math.floor(Math.random() * 9000) + 1000).toString()}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Department:</span>
                        <span className="font-extrabold text-[#0B2C59]">{formData.focus}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Corporate Email:</span>
                        <span className="font-extrabold text-slate-800 break-all">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Contact Phone:</span>
                        <span className="font-extrabold text-slate-800">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Response SLA:</span>
                        <span className="font-mono font-extrabold text-[#F2A900] bg-[#0B2C59] px-2 py-0.5 rounded-full inline-block text-[10px]">2 Hour Callback</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Our lead corporate grid engineer is reviewing your system telemetry message. We will reach out to you within the next 2 hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        sector: 'Industrial / Manufacturing',
                        voltage: 'High Tension',
                        focus: 'Safety Audits & Compliance',
                        message: '',
                        servicesListText: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#0B2C59] hover:bg-[#0B2C59]/90 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Scoping File
                  </button>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
