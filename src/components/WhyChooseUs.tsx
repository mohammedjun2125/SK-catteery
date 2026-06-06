import { motion } from "motion/react";
import { Heart, Syringe, Truck, ShieldCheck, Sparkles, BookOpen, CircleDollarSign, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Healthy Kittens",
      desc: "Every single kitten undergoes expert veterinary inspections, routine organic de-worming, and initial vaccinations.",
      icon: Heart,
      color: "bg-peach"
    },
    {
      title: "Vaccination Support",
      desc: "We provide clean official immunizations cards and detailed alerts on booster calendars with our local network.",
      icon: Syringe,
      color: "bg-beige"
    },
    {
      title: "Safe Same-Day Delivery",
      desc: "Inside Hyderabad (Kondapur, Jubilee Hills, Secunderabad, etc.) using clean, air-conditioned transport units.",
      icon: Truck,
      color: "bg-[#E8F0FE]"
    },
    {
      title: "Trusted Specialist Seller",
      desc: "Over 167+ happy families and years of dedicated standard cattery reputation inside Telangana.",
      icon: ShieldCheck,
      color: "bg-[#E6F4EA]"
    },
    {
      title: "Well-Groomed Cats",
      desc: "Raised with premium coat brushing, nail clipping, eye grooming and high-protein nutrition schedules.",
      icon: Sparkles,
      color: "bg-[#FCE8E6]"
    },
    {
      title: "Cat Care Guidance",
      desc: "A massive, practical master welcome manual on litter toilet training, scratching pads, and premium food selection.",
      icon: BookOpen,
      color: "bg-peach/30"
    },
    {
      title: "Affordable Pricing",
      desc: "Get elite champion bloodlines of Persian and Himalayan kittens at honest, reasonable pricing inside Hyderabad.",
      icon: CircleDollarSign,
      color: "bg-beige/40"
    },
    {
      title: "24/7 Customer Support",
      desc: "Instant post-adoption care. We are always one direct click away on WhatsApp to answer diet or health questions.",
      icon: PhoneCall,
      color: "bg-[#E6F4EA]"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFBF7] border-y border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Why Pet Parents Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Why Choose SK Cattery?
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            We raise kitten companions with pristine healthcare, social discipline, and lifelong guidance to ensure your adoption experience is pure bliss.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const isFeatured = index === 0 || index === 5;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 rounded-[24px] text-left flex flex-col justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all border group ${
                  isFeatured
                    ? "lg:col-span-2 bg-gradient-to-br from-white to-[#FFD8BE]/30 border-[#FFD8BE]"
                    : "bg-white border-[#FFD8BE]/65"
                }`}
                id={`why-card-${index}`}
              >
                <div>
                  <div className={`p-3 rounded-xl inline-block ${point.color} text-softbrown mb-4 group-hover:scale-110 transition-transform`}>
                    <point.icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="font-heading text-base font-extrabold text-[#333333]">
                    {point.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-2.5 leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
