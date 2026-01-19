import { Bug, Rat, TreeDeciduous, Footprints, Skull, Zap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const services = [
  {
    icon: Bug,
    title: "Dedetização de Baratas",
    description: "Eliminação completa de baratas com produtos de ação prolongada",
  },
  {
    icon: Rat,
    title: "Controle de Ratos",
    description: "Desratização eficiente para ambientes livres de roedores",
  },
  {
    icon: TreeDeciduous,
    title: "Controle de Cupins",
    description: "Proteção total contra cupins de madeira e solo",
  },
  {
    icon: Footprints,
    title: "Controle de Formigas",
    description: "Eliminação de formigueiros e colônias de formigas",
  },
  {
    icon: Skull,
    title: "Controle de Escorpiões",
    description: "Proteção contra escorpiões para sua segurança",
  },
  {
    icon: Zap,
    title: "Mosquitos e Pernilongos",
    description: "Controle de mosquitos transmissores de doenças",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nossos Serviços
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Soluções completas em controle de pragas
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos residências, comércios e indústrias com serviços especializados.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-elevated hover:border-primary/30"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/50 transition-all duration-300 group-hover:bg-primary/10" />
              
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-soft">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton size="lg">
            Solicitar Orçamento Gratuito
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
