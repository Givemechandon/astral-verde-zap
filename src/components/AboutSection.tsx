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
    <section id="sobre" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={equipeImage} 
                alt="Equipe Astral Jundiaí em serviço" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-secondary shadow-soft -z-10" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl gradient-primary opacity-50 -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre Nós
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
              Proteção especializada para seu lar e negócio
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Astral Saúde Ambiental</strong> é líder em controle de pragas na região de Jundiaí. 
              Com anos de experiência, oferecemos soluções eficazes e seguras para eliminar pragas 
              urbanas de residências, comércios e indústrias.
            </p>

            <ul className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Visual Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Home, title: "Residencial" },
                { icon: Building2, title: "Comercial" },
                { icon: Factory, title: "Industrial" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
