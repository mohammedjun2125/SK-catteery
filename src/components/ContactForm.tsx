import React, { useState } from "react";
import { MapPin, Phone, Clock, Send, MessageCircle, CheckCircle2, ChevronDown, User, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    breed: "Persian",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s+-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (10+ digits)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const getWhatsAppSubmitLink = () => {
    const textTemplate = `Hello SK Cattery,

I am interested in purchasing a kitten!

Full Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Breed Preference: ${formData.breed}
Message: ${formData.message}`;

    return `https://wa.me/918801592068?text=${encodeURIComponent(textTemplate)}`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      breed: "Persian",
      message: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details & Map Embed */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
              Locate &amp; Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight animate-fade-in">
              Get In Touch
            </h2>
            <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mb-8" />

            {/* Address cards */}
            <div className="space-y-6">
              
              <div className="flex gap-4 items-start" id="contact-info-address">
                <div className="bg-peach text-softbrown p-3.5 rounded-2xl shrink-0 shadow-sm">
                  <MapPin className="h-6 w-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-charcoal uppercase tracking-wider">Cattery Address</h4>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-1.5 leading-relaxed font-medium">
                    3-334, New Hafeezpet,<br />
                    Aditya Nagar, Hafeezpet,<br />
                    Hyderabad, Telangana 500049
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="contact-info-phone">
                <div className="bg-beige text-softbrown p-3.5 rounded-2xl shrink-0 shadow-sm">
                  <Phone className="h-6 w-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-charcoal uppercase tracking-wider">Direct Call / WhatsApp</h4>
                  <p className="text-sm text-charcoal/90 mt-1.5 font-extrabold hover:text-softbrown transition-colors">
                    <a href="tel:+918801592068">+91 88015 92068</a>
                  </p>
                  <p className="text-[11px] text-charcoal/50 mt-0.5">Feel free to ring us anytime</p>
                </div>
              </div>

              <div className="flex gap-4 items-start" id="contact-info-hours">
                <div className="bg-[#E6F4EA] text-green-700 p-3.5 rounded-2xl shrink-0 shadow-sm">
                  <Clock className="h-6 w-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-charcoal uppercase tracking-wider">Business Hours</h4>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-1.5 leading-relaxed font-bold text-green-700 flex items-center gap-1">
                    ● Open 24 Hours
                  </p>
                  <p className="text-[11px] text-charcoal/50 mt-0.5">Open every single day, holidays included</p>
                </div>
              </div>

            </div>

            {/* Google Maps Embed iframe */}
            <div className="mt-10 rounded-[24px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#FFD8BE]/70 aspect-[16/10] bg-beige/10">
              <iframe
                title="Google Maps Location for SK Cattery"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15223.11186716037!2d78.3470659!3d17.4703957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a110a202d5%3A0xe51a700d9796e676!2sSK%20Cattery%20-%20Persian%20%26%20Himalayan%20Kittens!5e0!3m2!1sen!2sin!4v1717652758252!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form with booking-section identifier */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[24px] border border-[#FFD8BE]/70 shadow-[0_4px_15px_rgba(0,0,0,0.02)] text-left w-full relative overflow-hidden" id="booking-section">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="pb-2">
                    <h3 className="text-xl font-heading font-extrabold text-charcoal flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-softbrown animate-pulse-subtle" />
                      Inquire or Schedule a Visit
                    </h3>
                    <p className="text-xs text-charcoal/50 mt-1">
                      Provide your baseline preference. We will answer all kitten questions!
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">Your Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohd Junaid"
                        className={`w-full bg-cream/30 border p-3.5 pl-10 rounded-xl text-sm font-sans focus:outline-none transition-all ${
                          errors.name ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                        }`}
                        style={{ minHeight: "44px" }}
                        id="form-field-name"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                    </div>
                    {errors.name && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone and Email Grid row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">Phone Number</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 88015 92068"
                          className={`w-full bg-cream/30 border p-3.5 pl-10 rounded-xl text-sm font-sans focus:outline-none transition-all ${
                            errors.phone ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                          }`}
                          style={{ minHeight: "44px" }}
                          id="form-field-phone"
                        />
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.phone}</p>}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. support@skcattery.com"
                          className={`w-full bg-cream/30 border p-3.5 pl-10 rounded-xl text-sm font-sans focus:outline-none transition-all ${
                            errors.email ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                          }`}
                          style={{ minHeight: "44px" }}
                          id="form-field-email"
                        />
                        <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-charcoal/40" />
                      </div>
                      {errors.email && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Preferred breed selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">Preferred Feline Breed</label>
                    <div className="relative">
                      <select
                        name="breed"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        className="w-full bg-cream/30 border border-beige/70 p-3.5 rounded-xl text-sm font-sans focus:outline-none focus:border-softbrown appearance-none cursor-pointer"
                        style={{ minHeight: "44px" }}
                        id="form-field-breed"
                      >
                        <option value="Persian">Persian Cat Lineage</option>
                        <option value="Himalayan">Himalayan Point Lineage</option>
                        <option value="Either / Undecided">Either / General Cat Advice</option>
                      </select>
                      <div className="absolute right-4 top-4.5 pointer-events-none text-charcoal/40">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block">Message Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify colors (Triple-coat, Blue-point) or query about home delivery schedules..."
                      className={`w-full bg-cream/30 border p-3.5 rounded-xl text-sm font-sans focus:outline-none transition-all ${
                        errors.message ? "border-red-500 bg-red-50/10" : "border-beige/70 focus:border-softbrown"
                      }`}
                      id="form-field-message"
                    />
                    {errors.message && <p className="text-red-500 text-[11px] font-bold mt-0.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-softbrown text-cream py-4 rounded-xl font-heading text-sm font-bold tracking-wide shadow-md hover:bg-softbrown/95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="form-submit-btn"
                  >
                    <Send className="h-4 w-4" />
                    Submit Registration
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                  id="form-success-alert"
                >
                  <div className="bg-[#E6F4EA] text-green-700 p-4 rounded-full mb-6">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.5] animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                    Registration Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/65 mt-3 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-extrabold text-charcoal">{formData.name}</span>! Your kitten inquiry details are structured and ready to lock in.
                  </p>

                  <div className="mt-8 p-4 bg-cream/60 border border-beige/60 rounded-2xl max-w-md text-left text-xs text-charcoal/75 space-y-1 leading-normal">
                    <p className="font-bold border-b border-beige/40 pb-1.5 mb-1.5 uppercase font-heading text-[10px] tracking-wider text-softbrown">Inquiry Summary</p>
                    <p><span className="font-bold text-charcoal">Breed:</span> {formData.breed}</p>
                    <p><span className="font-bold text-charcoal">Phone:</span> {formData.phone}</p>
                    <p><span className="font-bold text-charcoal">Details:</span> {formData.message}</p>
                  </div>

                  {/* Double Actions for maximum conversion */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-white hover:bg-beige/25 text-charcoal border border-beige py-3.5 rounded-full font-heading text-xs font-semibold tracking-wide transition-all cursor-pointer"
                    >
                      Reset Form
                    </button>
                    <a
                      href={getWhatsAppSubmitLink()}
                      target="_blank"
                      rel="no-referrer"
                      className="flex-1 bg-[#25D366] text-white hover:bg-[#20ba59] py-3.5 rounded-full font-heading text-xs font-bold tracking-wide transition-all shadow-md shadow-green-500/10 flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="h-4 w-4 fill-current" />
                      Send to WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
