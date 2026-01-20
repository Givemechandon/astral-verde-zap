import { useState } from "react";
import { Send, User, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5511959100002";

export function ContactFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `Olá! Vim pelo formulário do site.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email || "Não informado"}

*Dúvida:*
${formData.message || "Gostaria de mais informações sobre os serviços."}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio da mensagem no WhatsApp.",
    });

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Fale Conosco
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              Preencha o formulário abaixo e entraremos em contato pelo WhatsApp
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl bg-background border border-border shadow-card p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Nome *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-11"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Celular *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-11"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Dúvida ou Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full text-sm sm:text-base py-3 sm:py-4 mt-2"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar pelo WhatsApp"}
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-2">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
