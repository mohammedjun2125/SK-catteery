import { motion } from "motion/react";
import { Cat, Crown, Sparkles, Truck, Syringe, HeartHandshake, HelpCircle, CalendarCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Kitten Sales",
      desc: "Healthy, socialized, active, and certified purebred kittens available for loving families.",
      icon: Cat,
      color: "bg-peach"
    },
    {
      title: "Persian Cats Breeding",
      desc: "Elite flat-face extreme and sweet doll-face Persian lineages raised with highest standards.",
      icon: Crown,
      color: "bg-beige"
    },
    {
      title: "Himalayan Cats",
      desc: "Specialized breeding of blue-eyed Himalayan kittens with perfect points and sweet tempers.",
      icon: Sparkles,
      color: "bg-[#E8F0FE]"
    },
    {
      title: "Safe Home Delivery",
      desc: "Same-day stress-free temperature-controlled delivery directly to your home inside Hyderabad.",
      icon: Truck,
      color: "bg-[#E6F4EA]"
    },
    {
      title: "Vaccination Guidance",
      desc: "Complete vaccination scheduling, cards, vet files, and routine follow-up support.",
      icon: Syringe,
      color: "bg-[#FCE8E6]"
    },
    {
      title: "Cat Care Consultation",
      desc: "Professional guidance on raw feeding formulations, grooming, shedding control, and litters.",
      icon: HelpCircle,
      color: "bg-peach/30"
    },
    {
      title: "Lifetime Pet Support",
      desc: "Get 24/7 post-adoption assistance. We are always happy to answer physical or emotional cat queries.",
      icon: HeartHandshake,
      color: "bg-beige/40"
    },
    {
      title: "Online Video Booking",
      desc: "Schedule a high-definition WhatsApp video call to live-preview your shortlisted kittens before locking a reserve.",
      icon: CalendarCheck,
      color: "bg-cream"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Our Dedicated Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Premium Services We Offer
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Beyond parenting beautiful kittens, we provide a full-scale ecosystem of care to guarantee a seamless startup transit for your new companion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((serv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
              className="bg-white border border-[#FFD8BE]/70 p-6 rounded-[24px] text-left flex flex-col justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all group"
              id={`service-card-${index}`}
            >
              <div>
                <div className={`p-3 rounded-xl inline-block ${serv.color} text-softbrown mb-5 group-hover:scale-110 transition-transform`}>
                  <serv.icon className="h-6 w-6 stroke-[1.8]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-charcoal group-hover:text-softbrown transition-colors">
                  {serv.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-3 leading-relaxed">
                  {serv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-beige/30 flex items-center justify-between">
                <span className="text-[10px] font-heading font-extrabold text-softbrown tracking-wider uppercase">
                  Included Free
                </span>
                <span className="text-xs font-medium text-charcoal/30">🐾</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
