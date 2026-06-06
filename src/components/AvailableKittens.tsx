import { useState } from "react";
import { Kitten } from "../types";
import { KITTENS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, Info, Check, ShieldAlert, X, Award, ShieldCheck } from "lucide-react";

export default function AvailableKittens() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);

  const breeds = ["All", "Persian", "Himalayan", "British Shorthair", "Ragdoll", "Maine Coon"];

  const filteredKittens = KITTENS_DATA.filter((kit) => {
    if (activeTab === "All") return true;
    return kit.breed === activeTab;
  });

  const getWhatsAppLink = (kit: Kitten) => {
    const textTemplate = `Hello SK Cattery,

I am interested in adopting/reserving a kitten of this popular breed:

Selected Breed: ${kit.name}
Average Placement Age: ${kit.age}
Preferred Coat Color: ${kit.color}
My Name: 
My Location: 

Please share photos of the current active litters or organize an interactive video call!`;
    return `https://wa.me/918801592068?text=${encodeURIComponent(textTemplate)}`;
  };

  return (
    <section id="kittens" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Premium Pedigree
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Available Kitten Breeds
          </h2>
          <div className="w-16 h-1 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            We specialize in breeding elite, purebred kitten bloodlines. Browse our popular available breeds and reserve from our active litters today.
          </p>
        </div>

        {/* Dynamic Filter Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 pb-2">
          {breeds.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-bold transition-all relative ${
                activeTab === tab
                  ? "text-cream bg-softbrown shadow-md shadow-softbrown/10"
                  : "text-charcoal/80 bg-cream/60 border border-beige hover:border-softbrown/40"
              }`}
              id={`filter-tab-${tab.replace(/\s+/g, "-")}`}
            >
              {tab === "All" && "🐾 "}
              {tab === "Persian" && "🐱 "}
              {tab === "Himalayan" && "❄️ "}
              {tab === "British Shorthair" && "🇬🇧 "}
              {tab === "Ragdoll" && "🧸 "}
              {tab === "Maine Coon" && "🦁 "}
              {tab} Breeds
              {activeTab === tab && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-softbrown rounded-full -z-10"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Kitten Breeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredKittens.map((kit, index) => (
              <motion.div
                key={kit.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-[#FFD8BE]/70 rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all relative flex flex-col group"
                id={`breed-card-${kit.id}`}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-beige/12">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Backdrop Shadow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent opacity-80" />

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="bg-white/95 text-charcoal font-heading text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm tracking-uppercase border border-beige flex items-center gap-1">
                      <Award className="h-3 w-3 text-softbrown" />
                      Class A Pedigree
                    </span>
                    <span
                      className={`font-heading text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm text-white bg-green-600`}
                    >
                      {kit.availability}
                    </span>
                  </div>

                  {/* Pricing / Class Indicator */}
                  <div className="absolute top-4 right-4 bg-charcoal/65 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-[#FFD8BE] border border-[#FFD8BE]/30 text-[10px] font-bold uppercase tracking-wider">
                    👑 Premium Choice
                  </div>

                  {/* Placement Age Info */}
                  <div className="absolute bottom-4 left-4 text-white font-heading font-extrabold text-sm flex items-center gap-1.5 drop-shadow-md">
                    <Sparkles className="h-4 w-4 text-peach fill-current animate-pulse-subtle" />
                    Ideal Placement: {kit.age}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="text-left">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-softbrown uppercase tracking-wider mb-0.5">
                        Popular Champion Breed
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#B68D6C] tracking-tight group-hover:text-[#9A7253] transition-colors leading-tight">
                        {kit.breed}
                      </h3>
                      <p className="text-[11px] text-charcoal/60 font-semibold italic mt-0.5">{kit.name}</p>
                    </div>

                    <div className="mt-3.5 grid grid-cols-2 gap-y-2.5 gap-x-1.5 text-xs border-b border-beige/40 pb-4">
                      <div>
                        <span className="text-charcoal/45 font-medium block">Colors offered:</span>{" "}
                        <span className="text-charcoal/90 font-bold block truncate">{kit.color}</span>
                      </div>
                      <div>
                        <span className="text-charcoal/45 font-medium block">Health Status:</span>{" "}
                        <span className="text-softbrown font-bold flex items-center gap-0.5 mt-0.5">
                          ✓ Certified Free
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-charcoal/45 font-medium block">Adoption Care Package:</span>{" "}
                        <span className="text-green-600 font-bold block mt-0.5">{kit.vaccinationStatus}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-charcoal/65 line-clamp-3 leading-relaxed">
                      {kit.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedKitten(kit)}
                      className="bg-beige/40 text-charcoal border border-beige hover:border-softbrown/40 hover:bg-beige/60 py-2.5 rounded-full font-heading text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1 w-full"
                    >
                      <Info className="h-3.5 w-3.5" />
                      View Profile
                    </button>

                    <a
                      href={getWhatsAppLink(kit)}
                      target="_blank"
                      rel="no-referrer"
                      className="bg-[#25D366] text-white hover:bg-[#20ba59] py-2.5 rounded-full font-heading text-xs font-bold tracking-wide transition-all shadow-md shadow-green-500/10 cursor-pointer flex items-center justify-center gap-1 w-full"
                    >
                      <MessageCircle className="h-3.5 w-3.5 fill-current" />
                      Inquire Breed
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Breed Details Modal / Interactive Lightbox */}
        <AnimatePresence>
          {selectedKitten && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedKitten(null)}
                className="absolute inset-0 bg-charcoal/60 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-cream rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-beige max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedKitten(null)}
                  className="absolute top-4 right-4 bg-charcoal/20 hover:bg-charcoal/30 text-white rounded-full p-2 transition-all z-20 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Hero / Media Cover */}
                <div className="relative aspect-[3/2] overflow-hidden bg-charcoal">
                  <img
                    src={selectedKitten.image}
                    alt={selectedKitten.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="bg-peach text-charcoal font-heading text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Pedigree {selectedKitten.breed} Stock
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mt-2 drop-shadow-md">
                      {selectedKitten.name} Guide
                    </h3>
                  </div>
                </div>

                {/* Modal Info Content - Scrollable */}
                <div className="p-6 md:p-8 overflow-y-auto text-left flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-beige/60">
                    <div className="bg-white p-3 rounded-xl border border-beige/50">
                      <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-wider">Lineage Origin</p>
                      <p className="font-heading text-xs font-extrabold text-charcoal mt-1">Champion bloodlines</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-beige/50">
                      <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-wider">Key Colors</p>
                      <p className="font-heading text-xs font-extrabold text-charcoal mt-1">Stunning selections</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-beige/50">
                      <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-wider">Placement Age</p>
                      <p className="font-heading text-xs font-extrabold text-[#B68D6C] mt-1">{selectedKitten.age} Ready</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-beige/50">
                      <p className="text-[10px] text-charcoal/40 font-bold uppercase tracking-wider">Health Pledge</p>
                      <p className="font-heading text-xs font-extrabold text-green-700 mt-1">Vet Guaranteed</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-heading text-sm font-extrabold text-charcoal">Breed Characteristics</h4>
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mt-1 font-sans">
                        {selectedKitten.description}
                      </p>
                    </div>

                    {selectedKitten.temperament && (
                      <div className="bg-beige/25 p-3.5 rounded-xl border border-beige/40">
                        <h4 className="font-heading text-xs font-extrabold text-softbrown uppercase tracking-wider flex items-center gap-1.5">
                          🎭 Temperament &amp; Personality
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mt-1 font-sans font-medium">
                          {selectedKitten.temperament}
                        </p>
                      </div>
                    )}

                    {selectedKitten.careNeeds && (
                      <div className="bg-[#B68D6C]/5 p-3.5 rounded-xl border border-[#B68D6C]/20">
                        <h4 className="font-heading text-xs font-extrabold text-[#B68D6C] uppercase tracking-wider flex items-center gap-1.5">
                          🧴 Royal Care Guidelines &amp; Needs
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mt-1 font-sans font-medium">
                          {selectedKitten.careNeeds}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Highlights checklist */}
                  <div className="mt-6">
                    <h4 className="font-heading text-sm font-extrabold text-charcoal">Elite Breed Traits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {selectedKitten.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                          <span className="bg-[#E6F4EA] text-green-700 p-1 rounded-full">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </span>
                          <span className="font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warning health status */}
                  <div className="mt-6 p-4 rounded-xl bg-peach/10 border border-peach/50 flex gap-3 items-start">
                    <ShieldCheck className="h-5 w-5 text-softbrown mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-heading text-xs font-bold text-charcoal">SK Cattery Royal Pedigree Standard</h5>
                      <p className="text-[11px] text-charcoal/65 mt-0.5 leading-relaxed">
                        Every litter of this breed raised at our cattery carries strict pedigree clearances. Before we place any kitten, they are certified healthy, de-wormed, de-parasited, and immunized according to international feline registries guidelines.
                      </p>
                    </div>
                  </div>

                  {/* CTA Footer inside Modal */}
                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => setSelectedKitten(null)}
                      className="flex-1 bg-white hover:bg-beige/20 text-charcoal border border-beige px-4 py-3 rounded-full font-heading text-sm font-bold tracking-wide transition-all cursor-pointer"
                    >
                      Close Profile
                    </button>
                    <a
                      href={getWhatsAppLink(selectedKitten)}
                      target="_blank"
                      rel="no-referrer"
                      className="bg-[#25D366] text-cream hover:bg-[#20ba59] px-6 py-3 rounded-full font-heading text-sm font-bold tracking-wide transition-all shadow-md shadow-green-500/10 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5 fill-current" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
