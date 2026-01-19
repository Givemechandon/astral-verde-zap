import { MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-astral.webp";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Astral Saúde Ambiental" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/70">
              Líder no controle de pragas. Soluções profissionais para residências, comércios e indústrias em Jundiaí e região.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-bold">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: (11) 99999-9999
              </a>
              <a 
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                Telefone: (11) 99999-9999
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                Jundiaí – SP
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-display font-bold">Institucional</h4>
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

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Astral Saúde Ambiental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
