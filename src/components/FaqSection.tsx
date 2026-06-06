import { useState } from "react";
import { FAQS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const categories = ["All", "General", "Health & Vaccination", "Delivery & Reservation", "Care & Diet"];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (selectedCat === "All") return true;
    return faq.category === selectedCat;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFBF7] border-t border-beige/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Answers To Common Curiosities
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Do you have questions about vaccinations, grooming, diet, or delivery inside Hyderabad? Look through our quick guides.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full font-heading text-xs font-bold transition-all relative ${
                selectedCat === cat
                  ? "text-cream bg-softbrown shadow-sm"
                  : "text-charcoal/70 bg-white border border-beige/85 hover:border-softbrown/30"
              }`}
              id={`faq-cat-tab-${cat.replace(/\s+/g, "-")}`}
            >
              {cat}
              {selectedCat === cat && (
                <motion.div
                  layoutId="activeFaqCat"
                  className="absolute inset-0 bg-softbrown rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Accordions Accumulator */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? "border-softbrown shadow-sm" : "border-beige/70 hover:border-softbrown/30"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <p className="font-heading text-sm sm:text-base font-extrabold text-charcoal pr-4 flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-softbrown/70 shrink-0" />
                    {faq.question}
                  </p>
                  <span
                    className={`text-softbrown transition-transform duration-300 p-1.5 rounded-full bg-beige/30 ${
                      isExpanded ? "rotate-180 bg-beige/50" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 stroke-[2]" />
                  </span>
                </button>

                {/* Collapsible Body description */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/75 border-t border-beige/30 leading-relaxed text-left bg-[#FDF9F4]/40 font-medium font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
