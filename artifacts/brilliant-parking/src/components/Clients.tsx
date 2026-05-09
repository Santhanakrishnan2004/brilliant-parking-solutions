import React, { useState } from "react";
import { motion } from "framer-motion";

// HOW TO ADD YOUR CLIENT LOGOS:
// 1. Drop your PNG or AVIF image files into the `public/clients/` folder.
// 2. Name them: client-1.png, client-2.png, ..., client-8.png (or .avif)
// 3. The images will automatically appear below — no code changes needed.
// If you have more or fewer than 8 clients, add/remove entries from this array.
const clients = [
  { id: 1, src: "/clients/client-1.png", name: "Client 1" },
  { id: 2, src: "/clients/client-2.png", name: "Client 2" },
  { id: 3, src: "/clients/client-3.png", name: "Client 3" },
  { id: 4, src: "/clients/client-4.png", name: "Client 4" },
  { id: 5, src: "/clients/client-5.png", name: "Client 5" },
];

function ClientCard({ client }: { client: typeof clients[0] }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/40 hover:bg-secondary/30 transition-all duration-300 group min-h-[120px]"
    >
      {!failed ? (
        <img
          src={client.src}
          alt={client.name}
          onError={() => setFailed(true)}
          className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground/50">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
            <span className="text-xl font-black text-muted-foreground/30">{client.id}</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-medium">{client.name}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading commercial, retail, and institutional facilities across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
