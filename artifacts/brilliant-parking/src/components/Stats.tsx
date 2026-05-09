import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5+", label: "Happy Clients" },
  { value: "2+", label: "Projects Completed" },
  { value: "3+", label: "Ongoing Projects" },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#EDB92E" }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(0,0,0,0.06) 38px, rgba(0,0,0,0.06) 40px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(0,0,0,0.04) 38px, rgba(0,0,0,0.04) 40px)"
      }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-5xl md:text-7xl font-black leading-none mb-2" style={{ color: "#0B1120" }}>
                {stat.value}
              </div>
              <div className="w-8 h-0.5 mb-3" style={{ backgroundColor: "rgba(11,17,32,0.3)" }} />
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest" style={{ color: "rgba(11,17,32,0.65)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
