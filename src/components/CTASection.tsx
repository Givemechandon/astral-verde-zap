import { Shield, Clock, Zap, Phone, Star, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import ctaBackground from "@/assets/cta-background.jpg";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="Veículo Astral Saúde Ambiental" 
          className="h-full w-full object-cover scale-105"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/90 to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(134_64%_50%/0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(134_64%_40%/0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-primary/5 blur-2xl" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-primary-foreground/20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary-foreground/15 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary-foreground/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary-foreground/10 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Main Content Card */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-foreground/5 to-transparent pointer-events-none" />
            
            <div className="relative text-center">
              {/* Urgency Badge */}
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-primary/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground border border-primary-foreground/20 animate-glow-pulse">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                <span className="tracking-wide uppercase">Atendimento Imediato 24h</span>
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              </div>

              {/* Main Headline */}
              <h2 className="mb-4 sm:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] animate-slide-up">
                <span className="block">Não conviva com</span>
                <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80">
                  pragas!
                </span>
              </h2>

              <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Resolva <span className="text-primary-foreground font-bold underline decoration-primary-foreground/40 underline-offset-4">hoje mesmo</span> com quem entende.
              </p>

              {/* Stats Row */}
              <div className="mb-8 sm:mb-10 grid grid-cols-3 gap-3 sm:gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">20+</div>
                  <div className="text-[10px] sm:text-xs text-primary-foreground/70 uppercase tracking-wide mt-1">Anos de Experiência</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">5k+</div>
                  <div className="text-[10px] sm:text-xs text-primary-foreground/70 uppercase tracking-wide mt-1">Clientes Atendidos</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                  <div className="flex justify-center items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-star text-star" />
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs text-primary-foreground/70 uppercase tracking-wide mt-1">Avaliação</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <WhatsAppButton 
                  variant="whatsappOutline" 
                  size="lg" 
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow-pulse"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Falar com Especialista
                </WhatsAppButton>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { icon: Shield, label: "Garantia Total" },
                  { icon: Clock, label: "Resposta Rápida" },
                  { icon: CheckCircle, label: "Orçamento Grátis" },
                  { icon: Star, label: "5 Estrelas" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center gap-2 p-2 sm:p-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/10"
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/80" />
                    <span className="text-[10px] sm:text-xs font-medium text-primary-foreground/90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}