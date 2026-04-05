import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Repairs } from "@/components/Repairs";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LeadPopup } from "@/components/LeadPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <Products />
        <Repairs />
        <Booking />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <LeadPopup />
    </div>
  );
}
