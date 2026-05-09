import React from "react";
import { ParkingCircle, Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ParkingCircle className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl tracking-wider text-white">
                BRILLIANT <span className="text-primary">PARKING</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Leaders in Quality Parking Infrastructure. End-to-end parking solutions for commercial, retail, and institutional facilities across Tamil Nadu.
            </p>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:brilliantparkingsolutions@gmail.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm break-all">brilliantparkingsolutions@gmail.com</span>
              </a>
              <a
                href="tel:+919600122258"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">+91 96001 22258</span>
              </a>
              <a
                href="tel:+918610174467"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">+91 86101 74467</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; 2020 Brilliant Parking Solutions. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Registered Firm &bull; Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
