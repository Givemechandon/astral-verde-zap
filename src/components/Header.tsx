import { Bug, Phone } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
            <Bug className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-primary-dark leading-tight">
              Astral Jundiaí
            </span>
            <span className="text-xs text-muted-foreground">Detetizadora</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+5511999999999" 
            className="hidden items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors md:flex"
          >
            <Phone className="h-4 w-4" />
            (11) 99999-9999
          </a>
          <WhatsAppButton size="sm" className="hidden sm:flex">
            Orçamento Grátis
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
