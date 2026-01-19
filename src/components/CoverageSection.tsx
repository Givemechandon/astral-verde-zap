import { CheckCircle } from "lucide-react";

const cities = [
  "Jundiaí (Centro e bairros)",
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
    <section id="cobertura" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Área de Atuação
          </span>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Onde atendemos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Localizados em Jundiaí para oferecer{" "}
            <strong className="text-foreground">atendimento rápido</strong> em toda a região.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12 items-start">
          {/* Google Maps */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated border-2 sm:border-4 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117289.82713751987!2d-46.95929339335939!3d-23.18655449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf24293cc00531%3A0xf686a1c1163c6bbb!2sJundia%C3%AD%20-%20Aglomera%C3%A7%C3%A3o%20Urbana%20de%20Jundia%C3%AD%2C%20Jundia%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1705600000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Astral Saúde Ambiental - Jundiaí e Região"
                className="w-full sm:h-[350px] md:h-[400px]"
              />
            </div>
            
            {/* Badge overlay - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4 rounded-lg sm:rounded-xl bg-background px-3 sm:px-4 py-2 sm:py-3 shadow-elevated border border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full gradient-primary">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-xs sm:text-sm">Atendimento Rápido</p>
                  <p className="text-xs text-muted-foreground">Em toda região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div className="order-1 lg:order-2">
            <h3 className="mb-4 sm:mb-6 font-display text-lg sm:text-xl font-bold text-foreground">
              Cidades atendidas:
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {cities.map((city, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 sm:gap-3 rounded-lg bg-secondary/50 p-2.5 sm:p-3 transition-all hover:bg-secondary"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{city}</span>
                </div>
              ))}
            </div>
            
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
              Não encontrou sua cidade? Entre em contato! Atendemos outras localidades da região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
