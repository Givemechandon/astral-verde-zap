import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  variant?: "whatsapp" | "whatsappOutline" | "default" | "outline";
  size?: "default" | "sm" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
  floating?: boolean;
}

const WHATSAPP_NUMBER = "5511999999999"; // Número de exemplo
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento gratuito para dedetização.";

export function WhatsAppButton({ 
  variant = "whatsapp", 
  size = "lg", 
  children, 
  className = "",
  floating = false 
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full gradient-cta shadow-cta transition-all duration-300 hover:scale-110 hover:shadow-elevated md:hidden animate-pulse-soft"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-primary-foreground" />
      </a>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" />
        {children}
      </a>
    </Button>
  );
}
