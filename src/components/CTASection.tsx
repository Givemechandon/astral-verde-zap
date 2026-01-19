import { Shield, Clock, Zap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import ctaBackground from "@/assets/cta-background.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
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

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            Atendimento Imediato
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Não conviva com pragas!
            <br />
            Resolva hoje mesmo.
          </h2>

          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Fale agora com um especialista e receba seu{" "}
            <strong className="text-primary-foreground">orçamento gratuito</strong> em minutos.
          </p>

          <WhatsAppButton variant="whatsappOutline" size="xl">
            Falar com Especialista no WhatsApp
          </WhatsAppButton>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Garantia de Serviço</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
