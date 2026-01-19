import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    location: "Vila Rami, Jundiaí",
    service: "Dedetização Residencial",
    text: "Excelente serviço! A equipe foi super profissional e pontual. Minha casa ficou livre das baratas. Recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    location: "Centro, Jundiaí",
    service: "Controle de Ratos - Comércio",
    text: "Resolveram meu problema de ratos no restaurante rapidamente. Atendimento muito bom e preço justo.",
    rating: 5,
  },
  {
    name: "Ana Paula Ferreira",
    location: "Jardim São Bento",
    service: "Controle de Cupins",
    text: "Fiquei impressionada com a rapidez do atendimento. Vieram no mesmo dia e resolveram o problema dos cupins!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-secondary/30 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 shadow-card"
            >
              <Quote className="absolute right-3 sm:right-4 top-3 sm:top-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/10" />
              
              {/* Stars */}
              <div className="mb-3 sm:mb-4 flex gap-0.5 sm:gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-display font-bold text-sm sm:text-base text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
