import { Shield, Clock, Zap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import ctaBackground from "@/assets/cta-background.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="Veículo Astral Saúde Ambiental" 
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/90 to-primary/85" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency Badge */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Atendimento Imediato
          </div>

          <h2 className="mb-4 sm:mb-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Não conviva com pragas!
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Resolva hoje mesmo.
          </h2>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-primary-foreground/90">
            Fale agora com um especialista e receba seu{" "}
            <strong className="text-primary-foreground">orçamento gratuito</strong>.
          </p>

          <WhatsAppButton variant="whatsappOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10">
            Falar com Especialista
          </WhatsAppButton>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Garantia de Serviço</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
