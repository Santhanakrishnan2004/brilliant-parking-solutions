import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Commercial Mall Parking",
    location: "Chennai, Tamil Nadu",
    description: "End-to-end parking infrastructure for a high-footfall retail mall — covering layout planning, boom barriers, CCTV, valet service, and MIS reporting.",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1974&auto=format&fit=crop",
    tag: "Completed",
  },
  {
    title: "Corporate Campus Parking",
    location: "Chennai, Tamil Nadu",
    description: "Designed and managed multi-level parking operations for a large corporate campus, including card swiping integration, manpower training, and 24/7 operations.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop",
    tag: "Completed",
  },
  {
    title: "Hospital Parking Infrastructure",
    location: "Chennai, Tamil Nadu",
    description: "Comprehensive parking solution for a major hospital facility — valet service, slot markings, boom barrier systems, and emergency vehicle priority lanes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop",
    tag: "Ongoing",
  },
  {
    title: "Residential Complex Parking",
    location: "Chennai, Tamil Nadu",
    description: "Modern parking management system for a large residential complex with e-wallet integration, visitor management, and automated slot allocation.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074&auto=format&fit=crop",
    tag: "Ongoing",
  },
  {
    title: "Retail Plaza Parking",
    location: "Tamil Nadu",
    description: "Full-scale parking operations management including daily MIS reports, handheld device integration, thermal roll management, and trained valet staff.",
    image: "https://images.unsplash.com/photo-1581447109200-bf2769116351?q=80&w=2070&auto=format&fit=crop",
    tag: "Ongoing",
  },
];

const tagColors: Record<string, string> = {
  Completed: "bg-primary text-background",
  Ongoing: "bg-secondary text-white border border-primary/40",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering robust parking infrastructure across Chennai and Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tagColors[project.tag]}`}>
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{project.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
