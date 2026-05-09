import React from "react";
import { motion } from "framer-motion";
import { PenTool, Monitor, Calculator, GraduationCap, Users, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Planning",
    icon: PenTool,
    items: ["Parking layout", "Traffic layouts", "Capital requirements", "Pillar marking designs", "Specifications", "Costing"]
  },
  {
    title: "Designing",
    icon: Monitor,
    items: ["Hardware/software specs", "Competitor proposals", "Manpower expenses", "Signboard requirements", "Cash flow models"]
  },
  {
    title: "Budgeting",
    icon: Calculator,
    items: ["Training cost", "Operation documents", "Business model diagrams", "CCTV & lighting", "Civil requirements", "Safety equipment"]
  },
  {
    title: "Training",
    icon: GraduationCap,
    items: ["HR grooming", "Traffic signals training", "Awareness", "Motivation", "Lost & found", "Customer relations", "Valet safety"]
  },
  {
    title: "Management",
    icon: Users,
    items: ["Manpower management", "Police verification", "Skill development", "Statutory requirements", "Asset management", "MIS reports", "Valet service"]
  },
  {
    title: "Sales & Service",
    icon: ShoppingCart,
    items: ["Hardware/software supply", "Thermal rolls", "Handheld devices", "Card swiping/e-wallet", "Boom barrier servicing", "Parking slot markings"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Comprehensive <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end solutions for modern parking infrastructure, delivering efficiency and reliability.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full bg-secondary/20 border-border/50 hover:border-primary/50 transition-colors duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-wider uppercase">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
