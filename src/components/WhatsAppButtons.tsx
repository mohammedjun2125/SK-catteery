import { MessageCircle, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButtons() {
  const WHATSAPP_NUM = "918801592068";
  
  const textTemplate = `Hello SK Cattery,

I am interested in purchasing a kitten.

Name: 
Breed Preference: 
Location: 

Please share available kittens.`;

  const waLink = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(textTemplate)}`;
  const callLink = `tel:+918801592068`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=SK+Cattery+-+Persian+%26+Himalayan+Kittens,+Hafeezpet,+Hyderabad`;

  return (
    <>
      {/* 1. Floating WhatsApp Button for desktop & tablet overview */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="no-referrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-colors filter drop-shadow-md group cursor-pointer"
        id="floating-whatsapp-widget"
      >
        <MessageCircle className="h-6 w-6 stroke-[2] fill-current" />
        
        {/* Cute hover badge tooltip */}
        <span className="absolute right-14 bg-white border border-beige/65 text-charcoal text-xs font-bold font-heading px-3 py-1.5 rounded-full whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none pr-4">
          💬 Ask about Kittens!
        </span>
      </motion.a>

      {/* 2. Mobile-Only Fixed Sticky Bottom Action bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-beige/65 shadow-2xl z-40 py-2.5 px-4 flex items-center justify-between gap-3 md:hidden"
        id="mobile-sticky-action-bar"
      >
        {/* Ring Call */}
        <a
          href={callLink}
          className="flex-1 bg-cream border border-beige hover:bg-beige/40 text-charcoal py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1.5 font-heading text-xs font-extrabold shadow-xs transition-all active:scale-95"
          id="mobile-action-call"
        >
          <Phone className="h-4 w-4 text-softbrown" />
          📞 Call Cattery
        </a>

        {/* WhatsApp Chat */}
        <a
          href={waLink}
          target="_blank"
          rel="no-referrer"
          className="flex-2 bg-[#25D366] text-white hover:bg-[#20ba59] py-3 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 font-heading text-xs font-extrabold shadow-md shadow-green-500/10 transition-all active:scale-95"
          id="mobile-action-whatsapp"
        >
          <MessageCircle className="h-4 w-4 fill-current text-white" />
          💬 WhatsApp
        </a>

        {/* Directions Map */}
        <a
          href={directionsLink}
          target="_blank"
          rel="no-referrer"
          className="flex-1 bg-cream border border-beige hover:bg-beige/40 text-charcoal py-3 px-2 rounded-xl text-center flex items-center justify-center gap-1.5 font-heading text-xs font-extrabold shadow-xs transition-all active:scale-95"
          id="mobile-action-directions"
        >
          <MapPin className="h-4 w-4 text-softbrown" />
          📍 Directions
        </a>
      </div>
    </>
  );
}
