import { useState, useEffect } from "react";
import { Cat, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string; // Used as current active page ID
  onNavClick: (pageId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Available Kittens", id: "kittens" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQs", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    // If they click Book Now or booking-section, redirect to contact page
    if (id === "booking-section" || id === "booking") {
      onNavClick("contact");
    } else {
      onNavClick(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-beige/60"
            : "bg-cream/80 backdrop-blur-sm py-4 border-b border-beige/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleItemClick("home")}
              id="header-logo"
            >
              <div className="bg-softbrown text-cream p-2 rounded-full transition-transform group-hover:scale-110">
                <Cat className="h-6 w-6" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-charcoal flex items-center gap-1">
                  SK <span className="text-softbrown">Cattery</span>
                </span>
                <p className="text-[9px] font-medium text-charcoal/60 tracking-widest uppercase text-left">
                  Hyderabad
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-heading text-sm font-medium tracking-wide transition-colors py-1 relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-softbrown font-bold"
                      : "text-charcoal/80 hover:text-softbrown"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-softbrown rounded-full"
                    />
                  )}
                </button>
              ))}

              <button
                onClick={() => handleItemClick("contact")}
                className="bg-softbrown text-cream px-5 py-2.5 rounded-full font-heading text-sm font-semibold shadow-md transition-all duration-300 hover:bg-softbrown/95 hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
                id="header-cta"
              >
                <Phone className="h-4 w-4" />
                Book Now
              </button>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-charcoal hover:bg-beige/40 focus:outline-none transition-colors cursor-pointer"
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with elegant backdrop blur card overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Tap backdrop to close the menu instantly */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="lg:hidden fixed inset-0 top-[68px] bg-charcoal/20 backdrop-blur-xs z-30"
              />

              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden absolute left-4 right-4 top-[calc(100%+8px)] bg-cream/95 backdrop-blur-xl border border-beige/70 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-40"
              >
                <div className="px-5 pt-3 pb-6 space-y-1.5 text-left">
                  <div className="text-[10px] font-bold text-softbrown/65 uppercase tracking-widest px-4 pt-1 pb-2 border-b border-beige/40">
                    Explore &amp; Book
                  </div>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-2xl font-heading text-sm font-semibold transition-all cursor-pointer ${
                        activeSection === item.id
                          ? "bg-softbrown text-cream font-bold shadow-md shadow-softbrown/10"
                          : "text-charcoal/80 hover:bg-beige/40"
                      }`}
                      id={`mobile-nav-item-${item.id}`}
                    >
                      {item.id === "home" && "🏡 "}
                      {item.id === "kittens" && "🐾 "}
                      {item.id === "about" && "✨ "}
                      {item.id === "services" && "🧳 "}
                      {item.id === "gallery" && "🖼️ "}
                      {item.id === "reviews" && "⭐️ "}
                      {item.id === "faq" && "❓ "}
                      {item.id === "contact" && "📞 "}
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-3 border-t border-beige/40">
                    <button
                      onClick={() => handleItemClick("contact")}
                      className="w-full bg-softbrown text-[#FFD8BE] hover:text-white py-3 rounded-full font-heading text-sm font-black shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                      id="mobile-header-cta"
                    >
                      <Phone className="h-4 w-4" />
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
