import { motion } from "motion/react";
import { Users, Star, Award, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export default function TrustBar() {
  const trustMetrics = [
    {
      icon: Users,
      value: "167+",
      label: "Happy Families",
      text: "Kittens placed in loving homes",
      color: "bg-peach"
    },
    {
      icon: Star,
      value: "4.7 Rating",
      label: "Google Reviews",
      text: "Trusted cattery reputation",
      color: "bg-beige"
    },
    {
      icon: Award,
      value: "100%",
      label: "Purebred Health",
      text: "Certified healthy cats",
      color: "bg-[#E6F4EA]"
    },
    {
      icon: Truck,
      value: "Safety First",
      label: "Home Delivery",
      text: "Across Hyderabad & nearby states",
      color: "bg-[#E8F0FE]"
    },
    {
      icon: ShieldCheck,
      value: "Complete",
      label: "Vaccination Guide",
      text: "Complete schedules provided",
      color: "bg-peach/30"
    },
    {
      icon: HeartHandshake,
      value: "24/7 Support",
      label: "Lifetime Care",
      text: "We are always here to help",
      color: "bg-[#FCE8E6]"
    }
  ];

  return (
    <section className="py-12 bg-[#FFF8F0] border-y border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {trustMetrics.map((item, index) => {
            // Apply varied bento-grid card presets based on theme logic
            let cardBgClass = "bg-white border border-[#FFD8BE]/70 text-charcoal";
            let iconWrapperClass = "bg-cream text-softbrown";
            let valueClass = "text-charcoal";
            let labelClass = "text-softbrown/95";
            let textClass = "text-charcoal/60";

            if (index === 0) {
              // Primary Stat Card
              cardBgClass = "bg-[#B68D6C] text-white border-none";
              iconWrapperClass = "bg-white/15 text-white";
              valueClass = "text-white";
              labelClass = "text-white/90";
              textClass = "text-white/70";
            } else if (index === 1) {
              // Accent Stat Card
              cardBgClass = "bg-[#FFD8BE] text-charcoal border-none";
              iconWrapperClass = "bg-white text-[#B68D6C]";
              valueClass = "text-charcoal";
              labelClass = "text-[#B68D6C]";
              textClass = "text-charcoal/70";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${cardBgClass} rounded-[24px] p-5 text-center flex flex-col items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all group`}
                id={`trust-card-${index}`}
              >
                <div className={`p-2.5 rounded-xl ${iconWrapperClass} mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <p className={`font-heading text-lg font-extrabold tracking-tight ${valueClass}`}>
                    {item.value}
                  </p>
                  <p className={`font-heading text-[10px] font-bold mt-0.5 uppercase tracking-wider ${labelClass}`}>
                    {item.label}
                  </p>
                  <p className={`text-[10px] mt-1.5 leading-snug font-sans ${textClass}`}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
