import { Shield, Clock, Star, CheckCircle, Phone, Award } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import ctaBackground from "@/assets/cta-background.jpg";

const stats = [
  { value: "20+", label: "Anos" },
  { value: "5k+", label: "Clientes" },
  { value: "100%", label: "Garantia" },
];

const features = [
  { icon: Shield, text: "Garantia Total" },
  { icon: Clock, text: "Resposta Rápida" },
  { icon: CheckCircle, text: "Orçamento Grátis" },
  { icon: Award, text: "Certificado" },
];

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/92 to-primary/85" />
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl" />

      <div className="container relative px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-primary-foreground border border-primary-foreground/20">
                <Phone className="h-3.5 w-3.5" />
                <span>Atendimento 24h</span>
              </div>

              {/* Headline */}
              <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground leading-tight">
                Não conviva com pragas!
              </h2>

              <p className="mb-5 sm:mb-6 text-sm sm:text-base text-primary-foreground/85 leading-relaxed max-w-md mx-auto lg:mx-0">
                Resolva <strong className="text-primary-foreground">hoje mesmo</strong> com quem tem mais de 20 anos de experiência em Jundiaí.
              </p>

              {/* Stats - Inline */}
              <div className="flex justify-center lg:justify-start gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-primary-foreground/70 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <WhatsAppButton 
                variant="whatsappOutline" 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Falar com Especialista
              </WhatsAppButton>
            </div>

            {/* Right Column - Features Card */}
            <div className="lg:pl-4">
              <div className="rounded-2xl bg-primary-foreground/8 backdrop-blur-md border border-primary-foreground/15 p-5 sm:p-6">
                {/* Rating */}
                <div className="flex items-center justify-center gap-3 mb-5 pb-5 border-b border-primary-foreground/10">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-star text-star" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary-foreground">5.0 no Google</span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-200 hover:bg-primary-foreground/10"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/25 flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-primary-foreground/90">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom text */}
                <p className="mt-5 text-center text-xs text-primary-foreground/60">
                  Produtos regulamentados pela ANVISA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
