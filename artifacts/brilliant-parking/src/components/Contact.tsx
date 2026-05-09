import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your parking operations? Reach out for a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Location</div>
                    <div className="text-white font-medium">Chennai, Tamil Nadu, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email</div>
                    <a
                      href="mailto:brilliantparkingsolutions@gmail.com"
                      className="text-white font-medium hover:text-primary transition-colors break-all"
                    >
                      brilliantparkingsolutions@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Phone</div>
                    <div className="space-y-1">
                      <a href="tel:+919600122258" className="block text-white font-medium hover:text-primary transition-colors">
                        +91 96001 22258
                      </a>
                      <a href="tel:+918610174467" className="block text-white font-medium hover:text-primary transition-colors">
                        +91 86101 74467
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Careers</div>
                  <p className="text-white font-medium mb-1">Join Our Team</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Send your CV to us and we'll be in touch.
                  </p>
                  <a
                    href="mailto:brilliantparkingsolutions@gmail.com?subject=Job Application"
                    className="text-sm text-primary hover:underline font-semibold"
                  >
                    brilliantparkingsolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    data-testid="input-name"
                    className="bg-background/50 border-border/70 focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    data-testid="input-email"
                    className="bg-background/50 border-border/70 focus:border-primary h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Parking Infrastructure Consultation"
                  required
                  data-testid="input-subject"
                  className="bg-background/50 border-border/70 focus:border-primary h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your parking infrastructure needs..."
                  required
                  rows={5}
                  data-testid="input-message"
                  className="bg-background/50 border-border/70 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                data-testid="button-submit"
                className="w-full h-14 text-base font-bold tracking-wider gap-2"
              >
                {submitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
