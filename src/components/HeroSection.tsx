import { Shield, Clock, Award, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const trustBadges = [
  { icon: Clock, text: "Atendimento Rápido" },
  { icon: Shield, text: "Técnicos Especializados" },
  { icon: Award, text: "Garantia no Serviço" },
  { icon: MapPin, text: "Jundiaí e Região" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323993A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
            <Shield className="h-4 w-4" />
            Empresa Certificada em Jundiaí
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Livre-se das pragas{" "}
            <span className="text-gradient">de vez!</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Dedetização profissional em Jundiaí com{" "}
            <strong className="text-foreground">atendimento rápido</strong>,{" "}
            <strong className="text-foreground">produtos seguros</strong> e{" "}
            <strong className="text-foreground">orçamento 100% gratuito</strong>.
          </p>

          {/* CTA */}
          <div className="mb-12">
            <WhatsAppButton size="xl">
              Solicitar Orçamento Grátis
            </WhatsAppButton>
            <p className="mt-3 text-sm text-muted-foreground">
              ⚡ Resposta em até 5 minutos
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
      </div>
    </section>
  );
}
