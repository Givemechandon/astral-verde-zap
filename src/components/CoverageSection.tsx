import { CheckCircle } from "lucide-react";

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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Área de Atuação
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Onde atendemos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos estrategicamente localizados em Jundiaí para oferecer{" "}
            <strong className="text-foreground">atendimento rápido</strong> em toda a região.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Google Maps */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117289.82713751987!2d-46.95929339335939!3d-23.18655449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf24293cc00531%3A0xf686a1c1163c6bbb!2sJundia%C3%AD%20-%20Aglomera%C3%A7%C3%A3o%20Urbana%20de%20Jundia%C3%AD%2C%20Jundia%C3%AD%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1705600000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Astral Saúde Ambiental - Jundiaí e Região"
                className="w-full"
              />
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-4 left-4 rounded-xl bg-background px-4 py-3 shadow-elevated border border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">Atendimento Rápido</p>
                  <p className="text-xs text-muted-foreground">Em toda região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div className="order-1 lg:order-2">
            <h3 className="mb-6 font-display text-xl font-bold text-foreground">
              Cidades atendidas:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cities.map((city, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3 transition-all hover:bg-secondary"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground font-medium">{city}</span>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              Não encontrou sua cidade? Entre em contato conosco! Atendemos também outras localidades da região metropolitana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
