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
    <section className="relative overflow-hidden gradient-hero py-12 md:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323993A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              <Shield className="h-4 w-4" />
              Líder no controle de pragas em Jundiaí
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl">
              Sua casa livre de pragas{" "}
              <span className="text-gradient">com garantia!</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Atendimento <strong className="text-foreground">rápido e seguro</strong> em Jundiaí.{" "}
              Produtos regulamentados e <strong className="text-foreground">orçamento 100% gratuito</strong>.
            </p>

            {/* CTA */}
            <div className="mb-8">
              <WhatsAppButton size="xl">
                Solicitar Orçamento Grátis
              </WhatsAppButton>
              <p className="mt-3 text-sm text-muted-foreground">
                ⚡ Resposta em até 5 minutos
              </p>
            </div>

            {/* Trust Badges - Mobile */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-background/80 p-3 shadow-soft backdrop-blur"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                    <badge.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Técnico Astral Jundiaí com equipamentos profissionais de dedetização" 
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
        <div className="mt-12 hidden lg:grid lg:grid-cols-4 gap-4">
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
