import { 
  Gift, 
  MessageCircle, 
  UserCheck, 
  ShieldCheck, 
  BadgeCheck, 
  MapPin 
} from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Orçamento 100% Gratuito",
    description: "Avaliação sem compromisso e sem custos",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Rápido",
    description: "Resposta imediata pelo WhatsApp",
  },
  {
    icon: UserCheck,
    title: "Técnicos Qualificados",
    description: "Profissionais treinados e experientes",
  },
  {
    icon: ShieldCheck,
    title: "Produtos Seguros",
    description: "Produtos regulamentados e aprovados",
  },
  {
    icon: BadgeCheck,
    title: "Garantia no Serviço",
    description: "Garantia de resultado em todos serviços",
  },
  {
    icon: MapPin,
    title: "Atuação Local",
    description: "Atendemos Jundiaí e toda a região",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-secondary/50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Diferenciais
          </span>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Por que escolher a Astral?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            O melhor serviço de dedetização com qualidade, segurança e preço justo.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-secondary transition-all duration-300 group-hover:gradient-primary">
                <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-1 sm:mb-2 font-display text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
