import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import AvailableKittens from "./components/AvailableKittens";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ReviewSection from "./components/ReviewSection";
import HowItWorks from "./components/HowItWorks";
import FaqSection from "./components/FaqSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButtons from "./components/WhatsAppButtons";
import Loader from "./components/Loader";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [transitionLoading, setTransitionLoading] = useState<boolean>(false);

  // Initial load effect for premium brand presentation
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic SEO Title and Metadata updates for Hyderabad/Hafeezpet search rankings
  useEffect(() => {
    let title = "SK Cattery Hyderabad | Premium Persian & Himalayan Kittens For Sale";
    let desc = "Buy premium, healthy Persian and Himalayan kittens for sale in Hyderabad. SK Cattery offers elite, house-raised, vet-tested, and fully vaccinated kitten breeds with high-safety home delivery to Gachibowli, Jubilee Hills, Kondapur, Hafeezpet, Aditya Nagar, and adjacent areas.";
    let keywords = "Persian kittens for sale Hyderabad, Himalayan cats Hyderabad, buy kitten Hyderabad, SK Cattery Aditya Nagar, cats for sale Gachibowli, Jubilee Hills cat breeders, healthy kittens Telangana";

    switch (currentPage) {
      case "home":
        title = "SK Cattery Hyderabad | Premium Persian & Himalayan Kittens For Sale";
        desc = "Buy premium, healthy Persian and Himalayan kittens for sale in Hyderabad. SK Cattery offers elite, house-raised, vet-tested, and fully vaccinated kitten breeds with high-safety home delivery to Gachibowli, Jubilee Hills, Kondapur, Hafeezpet, Aditya Nagar, and adjacent areas.";
        break;
      case "kittens":
        title = "Available Premium Kittens in Hyderabad | Breeder Prices - SK Cattery";
        desc = "Browse gorgeous, active available Persian, Himalayan, British Shorthair, and Ragdoll kittens ready for adoption in Hyderabad. Centered near Hafeezpet and Kondapur.";
        keywords = "available Persian kittens, Himalayan point kittens Hyderabad, British Shorthair price Hyderabad, purebred pedigree kittens Telangana";
        break;
      case "about":
        title = "About Us | SK Cattery Hyderabad | Ethically Raised Pedigree Cats";
        desc = "Learn about our premium cattery in Hafeezpet, Hyderabad. We provide direct family-level care, full vaccination assurance, and safe door-to-door transportation.";
        keywords = "about SK Cattery, cat breeders Hyderabad, house raised Persian, ethical cattery Telangana, Hafeezpet cattery location";
        break;
      case "services":
        title = "Our Luxury Services | Comprehensive Kitten Support Hyderabad";
        desc = "Explore our premium kitten-rearing, delivery, health monitoring, and advisory services. From pristine deworming protocols to personal courier deliveries in Hyderabad.";
        keywords = "kitten delivery Hyderabad, cat vaccinations Telangana, veterinary guidance cattery, premium kitten care service";
        break;
      case "gallery":
        title = "Luxury Cat & Kitten Gallery | Real Photos - SK Cattery Hyderabad";
        desc = "Discover our gallery of beautiful cats, healthy playful parents, and real happy clients in Gachibowli, Jubilee Hills, and Hafeezpet. See premium standards in real time.";
        keywords = "Persian kitten photos Hyderabad, Himalayan kittens gallery, real cat pictures cattery, happy pet owners Hyderabad";
        break;
      case "reviews":
        title = "Kind Words & Verified Reviews | Trusted Cat Families Hyderabad";
        desc = "See real experiences and five-star reviews from cat owners who adopted their precious companions from SK Cattery in Hyderabad and surrounding suburbs.";
        keywords = "SK Cattery reviews, cat buyer testimonials, reliable kitten seller Hyderabad, pet store rating Telangana";
        break;
      case "faq":
        title = "Kitten Care & Adoption FAQs | Veterinary Health Guide Hyderabad";
        desc = "Have questions about kitten prices, grooming tools, food charts, or vaccine delivery windows? Read our comprehensive FAQ compiled by Hyderabad cattery experts.";
        keywords = "Persian cat food guide, kitten vaccines timeline, cat breeding FAQs, how to adopt pet Hyderabad";
        break;
      case "contact":
        title = "Reserve Your Dream Kitten | Contact SK Cattery Hyderabad";
        desc = "Get in touch with SK Cattery in Hafeezpet/Aditya Nagar, Hyderabad. Dial or message +918801592068 to book a luxury breed consultation or secure a kitten now.";
        keywords = "contact cat breeder, WhatsApp SK Cattery, adopt kitten Gachibowli, cat shop number Hyderabad";
        break;
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", desc);
      document.head.appendChild(metaDesc);
    }

    // Update Meta Keywords
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys) {
      metaKeys.setAttribute("content", keywords);
    } else {
      metaKeys = document.createElement("meta");
      metaKeys.setAttribute("name", "keywords");
      metaKeys.setAttribute("content", keywords);
      document.head.appendChild(metaKeys);
    }
  }, [currentPage]);

    // Elegant navigation page switcher with luxury transition loader
  const handlePageChange = (pageId: string) => {
    if (pageId === currentPage) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        window.scrollTo(0, 0);
      }
      return;
    }

    setTransitionLoading(true);
    // Instant scroll to top using fully-compatible traditional method to avoid iOS crash
    window.scrollTo(0, 0);

    // Elegant timeout to allow loader to present beautifully
    setTimeout(() => {
      setCurrentPage(pageId);
      setTransitionLoading(false);
    }, 250);
  };

  return (
    <div className="relative min-h-screen bg-cream select-none antialiased text-charcoal">
      {/* 1. Brand Loader Cover Checks */}
      <AnimatePresence>
        {initialLoading && <Loader key="initial-loader" />}
        {transitionLoading && <Loader key="transition-loader" />}
      </AnimatePresence>

      {/* 2. Premium Sticky Header */}
      <Header activeSection={currentPage} onNavClick={handlePageChange} />

      {/* 3. Main View Renderer with Animated Transitions */}
      <main id="main-content" className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-[75vh]"
          >
            {/* HOME PAGE VIEW */}
            {currentPage === "home" && (
              <>
                <Hero onExploreClick={() => handlePageChange("kittens")} />
                <TrustBar />
                {/* Available Kittens Breeds Grid */}
                <AvailableKittens />
                {/* Specialties highlights block using customized points */}
                <div id="home-specialties">
                  <WhyChooseUs />
                </div>
                {/* Luxury representation of About Us section */}
                <About />
                {/* Embedded luxury interactive view of the Cattery Photo Gallery */}
                <Gallery />
              </>
            )}

            {/* KITTENS PAGE VIEW */}
            {currentPage === "kittens" && (
              <>
                <AvailableKittens />
              </>
            )}

            {/* ABOUT PAGE VIEW */}
            {currentPage === "about" && (
              <>
                <About />
                <TrustBar />
                <HowItWorks />
              </>
            )}

            {/* SERVICES PAGE VIEW */}
            {currentPage === "services" && (
              <>
                <Services />
                <TrustBar />
              </>
            )}

            {/* GALLERY PAGE VIEW */}
            {currentPage === "gallery" && (
              <>
                <Gallery />
              </>
            )}

            {/* REVIEWS PAGE VIEW */}
            {currentPage === "reviews" && (
              <>
                <ReviewSection />
              </>
            )}

            {/* FAQ PAGE VIEW */}
            {currentPage === "faq" && (
              <>
                <FaqSection />
                <HowItWorks />
              </>
            )}

            {/* CONTACT PAGE VIEW */}
            {currentPage === "contact" && (
              <>
                <ContactForm />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Global Information Footer */}
      <Footer onNavClick={handlePageChange} />

      {/* 5. Overlay WhatsApp Widgets */}
      <WhatsAppButtons />
    </div>
  );
}
