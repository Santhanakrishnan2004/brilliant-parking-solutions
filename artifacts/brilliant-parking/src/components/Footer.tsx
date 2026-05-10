import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 border-t" style={{ backgroundColor: "#080E1B", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Brilliant Parking Solutions"
              className="h-10 w-auto object-contain mb-5 brightness-0 invert"
              style={{ opacity: 0.9 }}
            />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Leaders in Quality Parking Infrastructure. End-to-end solutions for commercial, retail, and institutional facilities across Tamil Nadu.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#EDB92E" }} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm font-medium transition-colors hover:text-amber"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:brilliantparkingsolutions@gmail.com"
                className="flex items-start gap-3 transition-colors hover:text-amber group"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#EDB92E" }} />
                <span className="text-sm break-all">brilliantparkingsolutions@gmail.com</span>
              </a>
            
              <a
                href="tel:+918610174467"
                className="flex items-center gap-3 transition-colors hover:text-amber"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#EDB92E" }} />
                <span className="text-sm">+91 86101 74467</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p className="text-sm text-center md:text-left" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; 2020 Brilliant Parking Solutions. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
            Registered Firm &bull; Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
