import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CoverageSection } from "@/components/CoverageSection";
import { CTASection } from "@/components/CTASection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CoverageSection />
        <CTASection />
        <ContactFormSection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button (Mobile) */}
      <WhatsAppButton floating />
    </div>
  );
};

export default Index;
