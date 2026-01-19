import { MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-astral.webp";

const WHATSAPP_URL = "https://web.whatsapp.com/send?phone=5511959100002&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+dos+servi%C3%A7os+da+Astral";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-8 sm:py-10 md:py-12 text-primary-foreground">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Astral Saúde Ambiental" 
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Líder no controle de pragas. Soluções profissionais para residências, comércios e indústrias em Jundiaí e região.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-display font-bold text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 sm:space-y-3 text-sm">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span>WhatsApp: (11) 95910-0002</span>
              </a>
              <a 
                href="tel:+5511959100002"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>Telefone: (11) 95910-0002</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Jundiaí – SP</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-display font-bold text-sm sm:text-base">Institucional</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="#" 
                className="block text-primary-foreground/70 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="block text-primary-foreground/70 hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-primary-foreground/10 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Astral Saúde Ambiental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
