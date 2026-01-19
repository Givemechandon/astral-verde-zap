import { Bug, Rat, TreeDeciduous, Footprints, Skull, Zap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import servicoImage from "@/assets/servico-externo.jpg";
import tecnicoImage from "@/assets/tecnico-equipamento.jpg";

const services = [
  {
    icon: Bug,
    title: "Dedetização de Baratas",
    description: "Eliminação completa com produtos de ação prolongada",
  },
  {
    icon: Rat,
    title: "Controle de Ratos",
    description: "Desratização eficiente para ambientes livres",
  },
  {
    icon: TreeDeciduous,
    title: "Controle de Cupins",
    description: "Proteção contra cupins de madeira e solo",
  },
  {
    icon: Footprints,
    title: "Controle de Formigas",
    description: "Eliminação de formigueiros e colônias",
  },
  {
    icon: Skull,
    title: "Controle de Escorpiões",
    description: "Proteção contra escorpiões para sua segurança",
  },
  {
    icon: Zap,
    title: "Mosquitos e Pernilongos",
    description: "Controle de mosquitos transmissores",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Nossos Serviços
          </span>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Soluções completas em controle de pragas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Atendemos residências, comércios e indústrias.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-8 sm:mb-12 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={servicoImage} 
              alt="Técnico realizando dedetização em área externa" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-primary-foreground">
              <p className="font-display font-bold text-base sm:text-lg">Áreas Externas</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Jardins, quintais e condomínios</p>
            </div>
          </div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card group">
            <img 
              src={tecnicoImage} 
              alt="Técnico Astral com equipamentos de proteção" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-primary-foreground">
              <p className="font-display font-bold text-base sm:text-lg">Equipe Preparada</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Profissionais qualificados</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-elevated hover:border-primary/30"
            >
              <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-secondary/50 transition-all duration-300 group-hover:bg-primary/10" />
              
              <div className="relative">
                <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl gradient-primary shadow-soft">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-1 sm:mb-2 font-display text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            Solicitar Orçamento Gratuito
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
