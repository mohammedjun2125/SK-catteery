import { motion } from "motion/react";
import { Check, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

export default function About() {
  const points = [
    {
      title: "Family Raised & Socialized",
      desc: "Our kittens live cage-free, interacting with children and household life daily.",
      icon: Sparkles
    },
    {
      title: "Pedigree & Health Guarded",
      desc: "Carefully checked lineage with consistent de-worming and foundational shots.",
      icon: HeartPulse
    },
    {
      title: "Continuous Adoption Care",
      desc: "Lifelong feeding, litter, and vet consultation support is a call away.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Columns - Image Presentation */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[500px]"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-[#FFD8BE]/50 rounded-[24px] -z-10 translate-x-3 translate-y-3" />
              
              {/* Playroom Environment Display */}
              <div className="rounded-[24px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-[#FFD8BE]/75">
                <img
                  src="/src/assets/images/cattery_room_1780744957819.png"
                  alt="SK Cattery clean playroom and climbing space"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Experience Card */}
              <div className="absolute -bottom-6 -right-6 md:right-4 bg-[#FFD8BE] border border-[#FFD8BE] p-5 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] max-w-[200px] text-center">
                <p className="text-3xl text-softbrown">🏆</p>
                <p className="font-heading text-xs font-black text-charcoal mt-2 uppercase tracking-widest">
                  Est. 2018
                </p>
                <p className="text-[10px] text-charcoal/80 mt-1 font-medium leading-tight">
                  Raising quality feline companions in Hyderabad
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Columns - About details */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
              id="about-content"
            >
              <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-[#FFD8BE] text-charcoal/90 px-3 py-1.5 rounded-full">
                Get to Know Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
                About SK Cattery
              </h2>
              <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3" />
              
              <p className="mt-6 text-base text-charcoal/85 leading-relaxed font-sans font-medium">
                SK Cattery is dedicated to raising healthy, active and well-socialized kittens. We specialize in Persian and Himalayan cats and provide ongoing support, vaccination guidance and safe home delivery.
              </p>
              <p className="mt-4 text-sm text-charcoal/70 leading-relaxed font-sans">
                Our cattery is built on genuine love, transparency, and clinical-grade clean standards. Based in Aditya Nagar, Hafeezpet, we provide a warm house environment where our cats roam freely, play under natural sky-light, and receive organic attention. Each pairing is designed to maintain beautiful triple-coats and calm, family-loving temperaments.
              </p>

              {/* Custom Points Block - Styled as a bento card */}
              <div className="mt-8 p-6 bg-white border border-[#FFD8BE]/70 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.02)] space-y-4">
                {points.map((p, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start" id={`about-bullet-${idx}`}>
                    <div className="bg-[#FFF8F0] border border-[#FFD8BE]/50 text-softbrown p-2 rounded-xl mt-0.5 shrink-0">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-extrabold text-charcoal">{p.title}</h4>
                      <p className="text-xs text-charcoal/65 mt-0.5 leading-normal">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
