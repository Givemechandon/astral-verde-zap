import { CheckCircle, Building2, Home, Factory } from "lucide-react";
import equipeImage from "@/assets/equipe-trabalho.jpg";

const features = [
  "Atendimento residencial, comercial e industrial",
  "Equipe técnica especializada e treinada",
  "Produtos registrados e seguros para sua família",
  "Compromisso com resultados e satisfação total",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={equipeImage} 
                alt="Equipe Astral em serviço" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Decorative elements - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 h-20 w-20 lg:h-24 lg:w-24 rounded-2xl bg-secondary shadow-soft -z-10" />
            <div className="hidden sm:block absolute -left-4 -top-4 h-12 w-12 lg:h-16 lg:w-16 rounded-xl gradient-primary opacity-50 -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre Nós
            </span>
            <h2 className="mb-4 sm:mb-6 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Proteção especializada para seu lar e negócio
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Astral Saúde Ambiental</strong> é líder em controle de pragas na região de Jundiaí. 
              Com anos de experiência, oferecemos soluções eficazes e seguras para eliminar pragas 
              urbanas de residências, comércios e indústrias.
            </p>

            <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm sm:text-base text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Visual Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Home, title: "Residencial" },
                { icon: Building2, title: "Comercial" },
                { icon: Factory, title: "Industrial" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-border bg-card p-3 sm:p-4 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl gradient-primary">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-foreground text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
