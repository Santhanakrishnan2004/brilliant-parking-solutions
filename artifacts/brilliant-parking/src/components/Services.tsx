import React from "react";
import { motion } from "framer-motion";
import { PenTool, Monitor, Calculator, GraduationCap, Users, ShoppingCart } from "lucide-react";

const services = [
  {
    title: "Planning",
    icon: PenTool,
    items: ["Parking layout design", "Traffic flow layouts", "Capital & operational requirements", "Pillar marking designs", "Specifications & costing"],
  },
  {
    title: "Designing",
    icon: Monitor,
    items: ["Hardware & software specs", "Competitor analysis & proposals", "Manpower expense planning", "Signboard requirements", "Estimated cash flow models"],
  },
  {
    title: "Budgeting",
    icon: Calculator,
    items: ["Training cost planning", "Operation documentation", "Business model diagrams", "CCTV & lighting requirements", "Civil & safety equipment"],
  },
  {
    title: "Training",
    icon: GraduationCap,
    items: ["HR grooming standards", "Traffic signal training", "Awareness programs", "Customer relationship training", "Valet service safety"],
  },
  {
    title: "Management",
    icon: Users,
    items: ["Manpower management", "Police verification certificates", "Skill development programs", "Statutory compliance", "MIS reports & valet service"],
  },
  {
    title: "Sales & Service",
    icon: ShoppingCart,
    items: ["Hardware & software supply", "Handheld devices & thermal rolls", "Card swiping & e-wallet services", "Boom barrier servicing", "Parking slot markings"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative" style={{ backgroundColor: "#0B1120" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: "rgba(237,185,46,0.1)", color: "#EDB92E", border: "1px solid rgba(237,185,46,0.25)" }}>
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Comprehensive <span style={{ color: "#EDB92E" }}>Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border p-7 flex flex-col gap-5 group hover:border-amber/30 transition-all duration-300"
              style={{ backgroundColor: "#0D1526", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: "rgba(237,185,46,0.1)", border: "1px solid rgba(237,185,46,0.15)" }}>
                  <service.icon className="w-6 h-6" style={{ color: "#EDB92E" }} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-widest text-white">{service.title}</h3>
              </div>
              <ul className="space-y-2.5 flex-1">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#EDB92E" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
