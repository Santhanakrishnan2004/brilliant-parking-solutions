import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop"
          alt="Parking Infrastructure"
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #0B1120 0%, #0f1e3a 50%, #0B1120 100%)"
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(237,185,46,0.08) 60px, rgba(237,185,46,0.08) 62px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(237,185,46,0.04) 60px, rgba(237,185,46,0.04) 62px)"
        }} />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center pt-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src="/logo.png"
            alt="Brilliant Parking Solutions"
            className="h-20 md:h-28 w-auto object-contain mx-auto brightness-0 invert"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase"
            style={{ borderColor: "rgba(237,185,46,0.3)", backgroundColor: "rgba(237,185,46,0.08)", color: "#EDB92E" }}
          >
            Est. 2004 &nbsp;&bull;&nbsp; Chennai, Tamil Nadu
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-5 uppercase leading-none">
            Leaders in<br />
            <span style={{ color: "#EDB92E" }}>Parking</span>{" "}
            <span className="text-white">Infrastructure</span>
          </h1>

          <p className="text-base md:text-xl text-white/50 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            End-to-end parking solutions — from planning & design to day-to-day management — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:brilliantparkingsolutions@gmail.com"
              className="h-14 px-10 text-base font-bold tracking-wider rounded-lg inline-flex items-center justify-center transition-all w-full sm:w-auto"
              style={{ backgroundColor: "#EDB92E", color: "#0B1120" }}
              data-testid="link-hero-contact"
            >
              Get a Quote
            </a>
            <button
              onClick={scrollToAbout}
              className="h-14 px-10 text-base font-bold tracking-wider rounded-lg inline-flex items-center justify-center transition-all w-full sm:w-auto border border-white/15 text-white hover:border-amber hover:text-amber"
              data-testid="button-hero-explore"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-colors"
        style={{ color: "rgba(255,255,255,0.3)" }}
        data-testid="button-scroll-down"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
