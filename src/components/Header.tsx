import { Phone, Menu } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import logo from "@/assets/logo-astral.webp";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Astral Saúde Ambiental" 
            className="h-8 sm:h-10 md:h-11 w-auto"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="tel:+5511959100002" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (11) 95910-0002
          </a>
          
          {/* Mobile: Icon only */}
          <a 
            href="tel:+5511959100002" 
            className="flex md:hidden items-center justify-center h-10 w-10 rounded-full bg-secondary text-primary"
            aria-label="Ligar"
          >
            <Phone className="h-5 w-5" />
          </a>
          
          <WhatsAppButton size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
            <span className="hidden xs:inline">Orçamento</span>
            <span className="xs:hidden">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
