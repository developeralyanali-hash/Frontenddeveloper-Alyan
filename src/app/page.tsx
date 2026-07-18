

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/Casestudies";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";


export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">
      <Navbar />
      <Hero />

      <Services />

      <CaseStudies/>

      <About />

      <Contact />

      <Footer />
    </main>
  );
}
