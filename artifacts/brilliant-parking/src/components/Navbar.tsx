import React, { useState, useEffect } from "react";
import { ParkingCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CLIENTS", href: "#clients" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2 group">
            <ParkingCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg md:text-xl tracking-wider text-white">
              BRILLIANT <span className="text-primary">PARKING</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="font-bold tracking-wider"
              onClick={(e) => scrollToSection(e as any, "#contact")}
            >
              Get a Quote
            </Button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-sm font-medium tracking-widest text-white hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="w-full font-bold tracking-wider"
            onClick={(e) => scrollToSection(e as any, "#contact")}
          >
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
