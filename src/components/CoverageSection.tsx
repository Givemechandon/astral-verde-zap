import { MapPin, CheckCircle } from "lucide-react";

const cities = [
  "Jundiaí (Centro e todos os bairros)",
  "Várzea Paulista",
  "Campo Limpo Paulista",
  "Itupeva",
  "Louveira",
  "Vinhedo",
  "Cajamar",
  "Francisco Morato",
  "Franco da Rocha",
  "Caieiras",
];

export function CoverageSection() {
  return (
    <section id="cobertura" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Map Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl gradient-primary p-8 shadow-elevated">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <MapPin className="mb-4 h-20 w-20 text-primary-foreground animate-bounce-subtle" />
                <h3 className="mb-2 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  Jundiaí e Região
                </h3>
                <p className="text-primary-foreground/90">
                  Atendimento rápido em toda a região metropolitana
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-secondary shadow-soft" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-primary/20" />
          </div>

          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Área de Atuação
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
              Onde atendemos
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Estamos estrategicamente localizados em Jundiaí para oferecer{" "}
              <strong className="text-foreground">atendimento rápido</strong> em toda a região.
              Nossa equipe está pronta para atender você!
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
