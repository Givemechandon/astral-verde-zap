import { Shield, Clock, Award, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import heroImage from "@/assets/hero-tecnico.jpg";

const trustBadges = [
  { icon: Clock, text: "Atendimento Rápido" },
  { icon: Shield, text: "Técnicos Especializados" },
  { icon: Award, text: "Garantia no Serviço" },
  { icon: MapPin, text: "Jundiaí e Região" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-10 sm:py-12 md:py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323993A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-secondary-foreground">
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Líder no controle de pragas em Jundiaí</span>
              <span className="sm:hidden">Líder em Jundiaí</span>
            </div>

            {/* Headline */}
            <h1 className="mb-4 sm:mb-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Sua casa livre de pragas{" "}
              <span className="text-primary">com garantia!</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Atendimento <strong className="text-foreground">rápido e seguro</strong> em Jundiaí.{" "}
              <span className="hidden sm:inline">Produtos regulamentados e </span>
              <strong className="text-foreground">Orçamento 100% gratuito</strong>.
            </p>

            {/* CTA */}
            <div className="mb-6 sm:mb-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                Solicitar Orçamento Grátis
              </WhatsAppButton>
            </div>

            {/* Trust Badges - Mobile/Tablet */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-background/80 p-2.5 sm:p-3 shadow-soft backdrop-blur"
                >
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-secondary flex-shrink-0">
                    <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Desktop only */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Técnico Astral com equipamentos profissionais de dedetização" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-background p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">+500</p>
                  <p className="text-xs text-muted-foreground">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges - Desktop */}
        <div className="mt-10 hidden lg:grid lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-xl bg-background/80 p-4 shadow-soft backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
