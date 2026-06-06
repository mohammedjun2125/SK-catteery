import { BREED_PROFILES } from "../data";
import { motion } from "motion/react";
import { Star, Eye, Sparkles, Heart } from "lucide-react";

export default function Breeds() {
  return (
    <section className="py-20 lg:py-28 bg-[#FDF9F4] border-t border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Elite Feline Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Our Specialties: Persian &amp; Himalayan
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Discover the magnificent characteristics that make these two royal lineages the ultimate domestic indoor companions.
          </p>
        </div>

        {/* Breed Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {BREED_PROFILES.map((breed, index) => (
            <motion.div
              key={breed.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-[#FFD8BE]/75 rounded-[24px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all flex flex-col md:flex-row group"
              id={`breed-profile-card-${breed.id}`}
            >
              {/* Media Block */}
              <div className="w-full md:w-[45%] h-[240px] md:h-auto min-h-[260px] relative overflow-hidden bg-beige/10">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-heading font-extrabold text-softbrown tracking-wider uppercase border border-beige flex items-center gap-1 shadow-sm">
                  <Star className="h-3 w-3 fill-current text-softbrown" />
                  PREMIUM LINEAGE
                </div>
              </div>

              {/* Specs Info Block */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal group-hover:text-softbrown transition-colors">
                    {breed.name}
                  </h3>
                  <div className="w-8 h-1 bg-softbrown rounded-full mt-2" />
                  
                  <p className="mt-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-medium">
                    {breed.description}
                  </p>

                  <div className="mt-5 space-y-1.5">
                    <p className="text-xs text-charcoal/85">
                      <span className="font-bold text-softbrown font-heading text-[11px] uppercase tracking-wider block mb-0.5">Temperament:</span>
                      {breed.temperament}
                    </p>
                    <p className="text-xs text-charcoal/85 pt-2">
                      <span className="font-bold text-softbrown font-heading text-[11px] uppercase tracking-wider block mb-0.5">Care &amp; Diet Needs:</span>
                      {breed.careRequirement}
                    </p>
                  </div>
                </div>

                {/* Trait Tags */}
                <div className="mt-6 pt-5 border-t border-beige/40">
                  <span className="text-[10px] text-charcoal/40 font-bold uppercase tracking-wider block mb-2 font-heading">Definitive Traits</span>
                  <div className="flex flex-wrap gap-1.5">
                    {breed.traits.map((trait, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-cream border border-beige text-charcoal/75 text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 whitespace-nowrap"
                      >
                        <span className="h-1 w-1 bg-softbrown rounded-full" />
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
