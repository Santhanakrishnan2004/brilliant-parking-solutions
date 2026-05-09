import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  { num: "01", label: "Planning" },
  { num: "02", label: "Designing" },
  { num: "03", label: "Budgeting" },
  { num: "04", label: "Managing" },
  { num: "05", label: "Sales" },
  { num: "06", label: "Services" },
];

const highlights = [
  "Registered firm adhering to all statutory obligations",
  "All requirements handled under one umbrella",
  "Reliable services with a personal touch",
  "Reduces expenditure by consolidating all services",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#111D35" }}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(-45deg, #EDB92E 0px, #EDB92E 1px, transparent 1px, transparent 12px)"
      }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ backgroundColor: "rgba(237,185,46,0.1)", color: "#EDB92E", border: "1px solid rgba(237,185,46,0.25)" }}>
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8 text-white leading-tight">
              Everything<br />Under One<br />
              <span style={{ color: "#EDB92E" }}>Umbrella</span>
            </h2>
            <div className="space-y-4 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#EDB92E" }} />
                  <span className="text-white/60 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-all"
              style={{ backgroundColor: "#EDB92E", color: "#0B1120" }}
            >
              View Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  className="rounded-xl border p-6 flex flex-col gap-3 group hover:border-amber/40 transition-all duration-300"
                  style={{ backgroundColor: "rgba(13,21,38,0.8)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="font-black text-2xl" style={{ color: "rgba(237,185,46,0.4)" }}>{cap.num}</div>
                  <div className="text-white font-bold uppercase tracking-widest text-sm group-hover:text-amber transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>{cap.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
