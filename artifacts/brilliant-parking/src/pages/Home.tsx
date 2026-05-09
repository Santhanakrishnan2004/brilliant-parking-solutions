import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
