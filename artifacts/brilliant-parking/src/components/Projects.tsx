import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Commercial Mall Parking",
    location: "Chennai, Tamil Nadu",
    description: "End-to-end parking infrastructure for a high-footfall retail mall — layout planning, boom barriers, CCTV, valet service, and MIS reporting.",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1974&auto=format&fit=crop",
    tag: "Completed",
  },
  {
    title: "Corporate Campus Parking",
    location: "Chennai, Tamil Nadu",
    description: "Multi-level parking operations for a large corporate campus — card swiping integration, manpower training, and 24/7 management.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop",
    tag: "Completed",
  },
  {
    title: "Hospital Parking Infrastructure",
    location: "Chennai, Tamil Nadu",
    description: "Comprehensive parking for a major hospital — valet service, slot markings, boom barrier systems, and emergency vehicle priority lanes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop",
    tag: "Ongoing",
  },
  {
    title: "Residential Complex Parking",
    location: "Chennai, Tamil Nadu",
    description: "Modern parking management with e-wallet integration, visitor management, and automated slot allocation for a large residential complex.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074&auto=format&fit=crop",
    tag: "Ongoing",
  },
  {
    title: "Retail Plaza Parking",
    location: "Tamil Nadu",
    description: "Full-scale operations management — daily MIS reports, handheld device integration, thermal roll management, and trained valet staff.",
    image: "https://images.unsplash.com/photo-1581447109200-bf2769116351?q=80&w=2070&auto=format&fit=crop",
    tag: "Ongoing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative" style={{ backgroundColor: "#111D35" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: "rgba(237,185,46,0.1)", color: "#EDB92E", border: "1px solid rgba(237,185,46,0.25)" }}>
            Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Our <span style={{ color: "#EDB92E" }}>Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:border-amber/30"
              style={{ backgroundColor: "#0D1526", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{ opacity: 0.55 }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0D1526 0%, transparent 60%)" }} />
                <span
                  className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={project.tag === "Completed"
                    ? { backgroundColor: "#EDB92E", color: "#0B1120" }
                    : { backgroundColor: "rgba(237,185,46,0.12)", color: "#EDB92E", border: "1px solid rgba(237,185,46,0.3)" }
                  }
                >
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-black uppercase tracking-wide text-white mb-2 group-hover:text-amber transition-colors" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm mb-3" style={{ color: "rgba(237,185,46,0.7)" }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.location}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
