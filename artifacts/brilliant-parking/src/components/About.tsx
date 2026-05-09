import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Under One <span className="text-primary">Umbrella</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                We are a registered firm adhering to all statutory obligations. From <strong className="text-white font-semibold">Planning</strong> and <strong className="text-white font-semibold">Designing</strong> to <strong className="text-white font-semibold">Budgeting</strong>, <strong className="text-white font-semibold">Managing</strong>, <strong className="text-white font-semibold">Sales</strong>, and <strong className="text-white font-semibold">Services</strong> — all your requirements are handled seamlessly under one roof.
              </p>
              
              <p>
                We offer reliable services with a personal touch. By consolidating all your parking infrastructure needs with Brilliant Parking Solutions, we significantly reduce your expenditure while elevating operational quality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border/50">
              {['Planning', 'Designing', 'Budgeting', 'Managing'].map((item, i) => (
                <div key={item} className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-primary font-bold text-2xl mb-1">0{i+1}</div>
                  <div className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
