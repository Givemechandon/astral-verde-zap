import { CheckCircle, Building2, Home, Factory } from "lucide-react";

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
          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre Nós
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
              Proteção especializada para seu lar e negócio
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Astral Jundiaí Detetizadora</strong> é referência em controle de pragas na região de Jundiaí. 
              Com anos de experiência, oferecemos soluções eficazes e seguras para eliminar pragas 
              urbanas de residências, comércios e indústrias.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
            {[
              { icon: Home, title: "Residencial", desc: "Proteção para sua família" },
              { icon: Building2, title: "Comercial", desc: "Ambientes livres de pragas" },
              { icon: Factory, title: "Industrial", desc: "Soluções para grandes áreas" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl gradient-primary">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
