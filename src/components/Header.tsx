import { Phone } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import logo from "@/assets/logo-astral.webp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Astral Saúde Ambiental - Líder no controle de pragas" 
            className="h-10 w-auto md:h-12"
          />
        </a>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+5511999999999" 
            className="hidden items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors md:flex"
          >
            <Phone className="h-4 w-4" />
            (11) 95910-0002
          </a>
          <WhatsAppButton size="sm" className="hidden sm:flex">
            Orçamento Grátis
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
