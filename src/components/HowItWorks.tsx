import { HOW_IT_WORKS_STEPS } from "../data";
import { motion } from "motion/react";
import { MessageCircle, Heart, CheckCircle2, Search, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const stepIcons = [Search, MessageCircle, CheckCircle2, Heart];

  return (
    <section className="py-20 lg:py-28 bg-[#FDF9F4] relative overflow-hidden">
      
      {/* Visual curves */}
      <div className="absolute right-0 top-0 text-peach/10 -z-0">
        <svg className="w-96 h-96 fill-current" viewBox="0 0 100 100">
          <circle cx="90" cy="10" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Seamless Adoption Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            How It Works
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Bringing home your pureborn kitten companion is a straightforward, safe, and transparent 4-step process.
          </p>
        </div>

        {/* Timeline Stepper Container */}
        <div className="relative mt-12">
          {/* Connector horizontal line for desktops */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-peach via-beige to-softbrown opacity-60 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 text-center relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, index) => {
              const IconComp = stepIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center group text-center lg:text-left text-neutral-800"
                  id={`timeline-step-${index}`}
                >
                  {/* Step Bubble Bubble */}
                  <div className="relative mb-6">
                    {/* Floating stepper numbering */}
                    <div className="absolute -top-3 -right-3 bg-softbrown text-cream border-2 border-white text-[10px] font-heading font-extrabold h-6 w-6 rounded-full flex items-center justify-center shadow-md">
                      {item.step}
                    </div>

                    {/* Step Icon wrapper */}
                    <div className="bg-white border border-[#FFD8BE]/75 shadow-[0_4px_15px_rgba(0,0,0,0.02)] p-6 rounded-[24px] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FFF8F0] group-hover:border-softbrown text-softbrown">
                      <IconComp className="h-8 w-8 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="text-center lg:text-center px-4 max-w-xs mx-auto">
                    <h3 className="font-heading text-base sm:text-lg font-extrabold text-charcoal group-hover:text-softbrown transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/65 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
