import React, { useState } from "react";
import { GALLERY_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, ChevronLeft, ChevronRight, Image } from "lucide-react";

export default function Gallery() {
  const categories = ["All", "Kittens", "Parents", "Happy Customers", "Facility"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FDF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-softbrown uppercase tracking-widest bg-peach/30 px-3 py-1.5 rounded-full inline-block">
            Our Visual Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal mt-4 tracking-tight">
            SK Cattery Photo Gallery
          </h2>
          <div className="w-16 h-1.5 bg-softbrown rounded-full mt-3 mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-charcoal/65">
            Real photos of our purebred parents, adorable kittens, hygiene-standards playroom facility, and beautiful adoption deliveries.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null); // Reset lightbox references on switch
              }}
              className={`px-5 py-2 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all relative ${
                activeCategory === cat
                  ? "text-cream bg-softbrown"
                  : "text-charcoal/80 bg-white border border-beige hover:border-softbrown/30"
              }`}
              id={`gallery-cat-tab-${cat.replace(/\s+/g, "-")}`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeGalleryCat"
                  className="absolute inset-0 bg-softbrown rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid items details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // We find the index in original GALLERY_DATA or filtered array
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative overflow-hidden rounded-[24px] group cursor-zoom-in bg-white border border-[#FFD8BE]/75 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all ${
                    index % 5 === 0 ? "col-span-2 aspect-[16/9] md:aspect-[1.8/1]" : "aspect-square"
                  }`}
                  id={`gallery-grid-item-${item.id}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Card Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <span className="text-[9px] font-heading font-extrabold text-peach uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xs sm:text-sm font-heading font-bold mt-1 max-w-[90%]">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-[10px] text-cream/70 mt-0.5 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                    <ZoomIn className="absolute top-4 right-4 text-peach h-4 w-4 bg-white/10 p-1 rounded-md backdrop-blur-xs" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Image Lightbox Portal / Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xs">
              
              {/* Close layer */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setLightboxIndex(null)} />

              {/* Close Button UI */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white hover:text-peach bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-50"
                aria-label="Close Lightbox"
                id="gallery-lightbox-close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Back Nav Overlay */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-30"
                aria-label="Previous Image"
                id="gallery-lightbox-prev"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Inside Content Holder */}
              <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center z-10 text-center">
                <motion.img
                  key={filteredItems[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />

                {/* Sub-text block */}
                <div className="mt-4 text-white text-left px-4 max-w-xl">
                  <span className="bg-peach text-charcoal text-[9px] font-heading font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-lg font-heading font-bold mt-2">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  {filteredItems[lightboxIndex].description && (
                    <p className="text-xs text-cream/70 mt-1">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  )}
                </div>
              </div>

              {/* Next Nav Overlay */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-30"
                aria-label="Next Image"
                id="gallery-lightbox-next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
