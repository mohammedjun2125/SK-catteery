import { Cat, Heart, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-[#F5EBDD] pt-16 pb-24 md:pb-12 text-left" id="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#F5EBDD]/10">
          
          {/* Column 1: Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavClick("home")}>
              <div className="bg-softbrown text-[#FFF8F0] p-1.5 rounded-full">
                <Cat className="h-5 w-5" />
              </div>
              <span className="font-heading text-lg font-extrabold text-[#FFF8F0]">
                SK <span className="text-[#B68D6C]">Cattery</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F5EBDD]/70 leading-relaxed font-sans">
              Dedicated to raising healthy, socially active, and purebred Persian and Himalayan kittens inside Hyderabad. We place physical care, clinical hygiene, and customer trust above all.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#FFF8F0] uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#F5EBDD]/70">
              <button onClick={() => onNavClick("home")} className="hover:text-[#B68D6C] text-left transition-colors">Home</button>
              <button onClick={() => onNavClick("about")} className="hover:text-[#B68D6C] text-left transition-colors">About Us</button>
              <button onClick={() => onNavClick("kittens")} className="hover:text-[#B68D6C] text-left transition-colors font-semibold text-[#B68D6C]">Kittens</button>
              <button onClick={() => onNavClick("services")} className="hover:text-[#B68D6C] text-left transition-colors">Services</button>
              <button onClick={() => onNavClick("reviews")} className="hover:text-[#B68D6C] text-left transition-colors">Reviews</button>
              <button onClick={() => onNavClick("gallery")} className="hover:text-[#B68D6C] text-left transition-colors">Gallery</button>
              <button onClick={() => onNavClick("faq")} className="hover:text-[#B68D6C] text-left transition-colors">FAQ</button>
              <button onClick={() => onNavClick("contact")} className="hover:text-[#B68D6C] text-left transition-colors">Contact</button>
            </div>
          </div>

          {/* Column 3: Contact quick links */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#FFF8F0] uppercase tracking-wider">Contact Coordinates</h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F5EBDD]/70">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#B68D6C] shrink-0 mt-0.5" />
                <p>3-334, New Hafeezpet, Aditya Nagar, Hafeezpet, Hyderabad, Telangana 500049</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#B68D6C] shrink-0" />
                <a href="tel:+918801592068" className="hover:text-[#B68D6C] transition-colors">+91 88015 92068 (Open 24/7)</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-[#B68D6C] shrink-0" />
                <a href="mailto:support@skcattery.com" className="hover:text-[#B68D6C] transition-colors">support@skcattery.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom meta coordinates */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F5EBDD]/40">
          <p>© {currentYear} SK Cattery Hyderabad. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Raised with <Heart className="h-3 w-3 fill-current text-red-500 text-xs inline-block animate-pulse-subtle" /> in Aditya Nagar, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
