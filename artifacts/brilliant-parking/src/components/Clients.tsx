import React, { useState } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// HOW TO ADD YOUR CLIENT LOGOS
// ─────────────────────────────────────────────────────────────
// 1. Place your PNG or AVIF image files in the folder:
//      artifacts/brilliant-parking/public/clients/
// 2. Name them exactly:
//      client-1.png  (or .avif)
//      client-2.png
//      ... up to client-5.png (or however many you have)
// 3. Save — images appear automatically. No code changes needed.
// 4. To add more clients, duplicate a line below and increment the id/src.
// ─────────────────────────────────────────────────────────────
const clients = [
  { id: 1, src: "/clients/client-1.png", name: "Client 1" },
  { id: 2, src: "/clients/client-2.png", name: "Client 2" },
  { id: 3, src: "/clients/client-3.png", name: "Client 3" },
  { id: 4, src: "/clients/client-4.png", name: "Client 4" },
];

function ClientCard({ client }: { client: typeof clients[0] }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center rounded-2xl border group transition-all duration-300 min-h-[120px] hover:border-amber/25 overflow-hidden"
      style={{ backgroundColor: "#0D1526", borderColor: "rgba(255,255,255,0.06)" }}
    >
      {!failed ? (
        <div className="w-full h-full flex items-center justify-center p-5 rounded-xl m-3" style={{ backgroundColor: "#ffffff" }}>
          <img
            src={client.src}
            alt={client.name}
            onError={() => setFailed(true)}
            className="max-h-12 max-w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed" style={{ borderColor: "rgba(237,185,46,0.2)" }}>
            <span className="text-lg font-black" style={{ color: "rgba(237,185,46,0.25)" }}>{client.id}</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.2)" }}>
            {client.name}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 relative" style={{ backgroundColor: "#0B1120" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: "rgba(237,185,46,0.1)", color: "#EDB92E", border: "1px solid rgba(237,185,46,0.25)" }}>
            Trusted By
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Our <span style={{ color: "#EDB92E" }}>Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
