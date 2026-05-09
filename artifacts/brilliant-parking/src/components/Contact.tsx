import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-mid relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(90deg, #EDB92E 0px, #EDB92E 2px, transparent 2px, transparent 60px)"
      }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            Contact <span className="text-amber">Us</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Ready to upgrade your parking infrastructure? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-navy-deep border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-amber" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Location</div>
              <div className="text-white font-semibold text-lg leading-snug">Chennai<br />Tamil Nadu, India</div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy-deep border border-amber/20 rounded-2xl p-8 flex flex-col items-center text-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-amber" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Email</div>
              <div className="text-white font-semibold mb-5 text-sm break-all leading-relaxed">
                brilliantparkingsolutions@gmail.com
              </div>
            </div>
            <a
              href="mailto:brilliantparkingsolutions@gmail.com"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-light text-navy font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg transition-colors w-full justify-center"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy-deep border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-amber" />
            </div>
            <div className="flex-1 w-full">
              <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Phone</div>
              <div className="space-y-2 mb-5">
                <a
                  href="tel:+919600122258"
                  className="block text-white font-semibold hover:text-amber transition-colors"
                  data-testid="link-phone-1"
                >
                  +91 96001 22258
                </a>
                <a
                  href="tel:+918610174467"
                  className="block text-white font-semibold hover:text-amber transition-colors"
                  data-testid="link-phone-2"
                >
                  +91 86101 74467
                </a>
              </div>
            </div>
            <a
              href="tel:+919600122258"
              className="inline-flex items-center gap-2 border border-amber/40 hover:bg-amber/10 text-amber font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg transition-colors w-full justify-center"
              data-testid="link-call"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Careers strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-5xl mx-auto bg-navy-deep border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-amber" />
            </div>
            <div>
              <div className="text-white font-bold">Join Our Team</div>
              <div className="text-white/40 text-sm">We're always looking for skilled parking professionals</div>
            </div>
          </div>
          <a
            href="mailto:brilliantparkingsolutions@gmail.com?subject=Job Application"
            className="inline-flex items-center gap-2 border border-amber/30 hover:bg-amber/10 text-amber font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            data-testid="link-careers"
          >
            <ExternalLink className="w-4 h-4" />
            Send Your CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
