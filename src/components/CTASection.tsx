import { Shield, Clock, Zap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTASection() {
  return (
    <section className="relative overflow-hidden gradient-primary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground">
            <Zap className="h-4 w-4" />
            Atendimento Imediato
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Não conviva com pragas!
            <br />
            Resolva hoje mesmo.
          </h2>

          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Fale agora com um especialista e receba seu{" "}
            <strong className="text-primary-foreground">orçamento gratuito</strong> em minutos.
          </p>

          <WhatsAppButton variant="whatsappOutline" size="xl">
            Falar com Especialista no WhatsApp
          </WhatsAppButton>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Garantia de Serviço</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
