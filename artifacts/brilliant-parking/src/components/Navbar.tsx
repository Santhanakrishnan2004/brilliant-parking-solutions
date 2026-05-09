import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/5 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="flex items-center"
            data-testid="link-logo"
          >
            <img
              src="/logo.png"
              alt="Brilliant Parking Solutions"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-xs font-semibold tracking-widest text-white/60 hover:text-amber transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:brilliantparkingsolutions@gmail.com">
              <Button className="bg-amber hover:bg-amber-light text-navy font-bold tracking-wider text-xs px-5">
                Get a Quote
              </Button>
            </a>
          </nav>

          <button
            className="md:hidden text-white/80 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-deep border-b border-white/5 p-5 flex flex-col gap-5 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block text-sm font-semibold tracking-widest text-white/70 hover:text-amber"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:brilliantparkingsolutions@gmail.com" className="w-full">
            <Button className="w-full bg-amber hover:bg-amber-light text-navy font-bold tracking-wider">
              Get a Quote
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
