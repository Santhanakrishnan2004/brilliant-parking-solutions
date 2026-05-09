import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop"
          alt="Parking Infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
            Est. 2004 • Chennai
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-tight">
            Brilliant <br />
            <span className="text-primary">Parking Solutions</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-10">
            Leaders in Quality Parking Infrastructure
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-lg font-bold tracking-wider w-full sm:w-auto" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold tracking-wider w-full sm:w-auto text-white border-white/20 hover:bg-white/10" onClick={scrollToAbout}>
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-primary transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
