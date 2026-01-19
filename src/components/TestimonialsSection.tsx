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
    <section id="depoimentos" className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
              
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
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
