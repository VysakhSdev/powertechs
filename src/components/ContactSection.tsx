import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, BadgeCheck, Clock } from "lucide-react";
import { imgRelayTesting } from "../assets/images";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

interface SubmittedContactSummary {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
}

interface ContactSectionProps {
  id?: string;
  /** Optional override for your SheetMonkey Form Endpoint URL */
  sheetMonkeyUrl?: string;
  selectedPlanData: {
    sector: string;
    voltage: string;
    focus: string;
    recommendedServices: string[];
  } | null;
}

const createInitialFormData = (): ContactFormData => ({
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
});

const SHEET_MONKEY_ENDPOINT_URL = import.meta.env.VITE_SHEET_MONKEY_ENDPOINT_URL;

export default function ContactSection({
  id = "contact-section",
  sheetMonkeyUrl,
  selectedPlanData,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>(
    createInitialFormData,
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedContact, setSubmittedContact] =
    useState<SubmittedContactSummary | null>(null);

  // Sync inputs when selectedPlanData changes
  useEffect(() => {
    if (selectedPlanData) {
      setFormData((prev) => ({
        ...prev,
        message: `Architect Recommended Solutions:\n${selectedPlanData.recommendedServices
          .map((s, idx) => `[${idx + 1}]${s}`)
          .join(
            "\n",
          )}\n\nPlease analyze our ${selectedPlanData.voltage} network requirements for the ${
          selectedPlanData.sector
        } sector.`,
      }));
    }
  }, [selectedPlanData]);

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name as keyof ContactFormData];
        return newErrs;
      });
    }
  };

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Corporate Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please provide a valid corporate email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please provide a valid contact number.";
    }
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler for SheetMonkey API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const endpoint = sheetMonkeyUrl ?? SHEET_MONKEY_ENDPOINT_URL;

    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      setSubmitError("Please configure your SheetMonkey endpoint URL.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
"Date": new Date().toLocaleString(),
          "Full Name": formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          "Company Name": formData.companyName,
          Message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `SheetMonkey request failed with status ${response.status}`,
        );
      }

      setSubmittedContact({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
      });
      setFormData(createInitialFormData());
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("SheetMonkey submission error:", error);
      setSubmitError(
        "We could not send your request to SheetMonkey. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={id}
      className="py-20 bg-white text-slate-950 relative scroll-mt-20"
    >
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
                Connect with our certified electrical engineering consultants.
                We provide detailed feasibility studies, system audits, and
                comprehensive deployment proposals for utilities, industries,
                and institutions.
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
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                  Fast-response helpline
                </span>
                <p className="text-xs font-black text-white">
                  Round-the-clock Emergency Engineering Desk
                </p>
              </div>
            </div>

            {/* Credibility certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50/50 flex items-start gap-2.5">
                <BadgeCheck className="w-5 h-5 text-[#F2A900] shrink-0" />
                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0B2C59]">
                    Certified
                  </h5>
                  <p className="font-sans text-[10px] text-slate-500 mt-0.5">
                    CEA Licensed Grid Engineers
                  </p>
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50/50 flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#F2A900] shrink-0" />
                <div>
                  <h5 className="font-sans font-bold text-xs text-[#0B2C59]">
                    Turnaround
                  </h5>
                  <p className="font-sans text-[10px] text-slate-500 mt-0.5">
                    Scoping Call in 2 Hours
                  </p>
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
                  {submitError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-sans text-xs text-red-700"
                    >
                      {submitError}
                    </div>
                  )}
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
                          errors.fullName
                            ? "border-red-500"
                            : "border-slate-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">
                          {errors.fullName}
                        </p>
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
                          errors.email ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">
                          {errors.email}
                        </p>
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
                          errors.phone ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">
                          {errors.phone}
                        </p>
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
                          errors.companyName
                            ? "border-red-500"
                            : "border-slate-200"
                        }`}
                      />
                      {errors.companyName && (
                        <p className="font-sans text-[10px] text-red-500 mt-0.5 pl-1">
                          {errors.companyName}
                        </p>
                      )}
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
                    🔒 By submitting this form, you authorize Powertech
                    Engineering Solution LLP to contact you via telephone or
                    email to schedule the initial technical scoping conference.
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
                        <span>Loading.....</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F2A900]" />
                        <span>Submit</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  aria-live="polite"
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-2xl text-[#0B2C59] tracking-tight">
                      Inquiry Completed
                    </h3>
                    <p className="font-sans text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you,{" "}
                      <strong className="text-slate-900 font-bold">
                        {submittedContact?.fullName}
                      </strong>
                      . Your consultation request has been logged on behalf of{" "}
                      <strong className="text-slate-900 font-extrabold">
                        {submittedContact?.companyName}
                      </strong>
                      .
                    </p>
                  </div>

                  {/* Visual Scoping Ticket details */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3 shadow-inner">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">
                          Company Name:
                        </span>
                        <span className="font-extrabold text-[#0B2C59]">
                          {submittedContact?.companyName}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">
                          Corporate Email:
                        </span>
                        <span className="font-extrabold text-slate-800 break-all">
                          {submittedContact?.email}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">
                          Contact Phone:
                        </span>
                        <span className="font-extrabold text-slate-800">
                          {submittedContact?.phone}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">
                          Response SLA:
                        </span>
                        <span className="font-mono font-extrabold text-[#F2A900] bg-[#0B2C59] px-2 py-0.5 rounded-full inline-block text-[10px]">
                          2 Hour Callback
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Our team is reviewing your message. We will reach out to you
                    within the next few hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setSubmittedContact(null);
                      setSubmitError(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#0B2C59] hover:bg-[#0B2C59]/90 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Request
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
