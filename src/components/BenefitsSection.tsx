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
    description: "Avaliação sem compromisso e sem custos para você",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Rápido",
    description: "Resposta imediata pelo WhatsApp, 7 dias por semana",
  },
  {
    icon: UserCheck,
    title: "Técnicos Qualificados",
    description: "Profissionais treinados e com experiência comprovada",
  },
  {
    icon: ShieldCheck,
    title: "Produtos Seguros",
    description: "Utilizamos apenas produtos regulamentados e aprovados",
  },
  {
    icon: BadgeCheck,
    title: "Garantia no Serviço",
    description: "Garantia de resultado em todos os nossos serviços",
  },
  {
    icon: MapPin,
    title: "Atuação Local",
    description: "Atendemos Jundiaí e toda a região com agilidade",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Diferenciais
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher a Astral?
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos o melhor serviço de dedetização com qualidade, segurança e preço justo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all duration-300 group-hover:gradient-primary">
                <benefit.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
