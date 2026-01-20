import { Shield, Clock, Award, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import heroImage from "@/assets/hero-tecnico.jpg";
import { motion, type Variants } from "framer-motion";

const trustBadges = [
  { icon: Clock, text: "Atendimento Rápido" },
  { icon: Shield, text: "Técnicos Especializados" },
  { icon: Award, text: "Garantia no Serviço" },
  { icon: MapPin, text: "Jundiaí e Região" },
];

const benefits = [
  "Produtos regulamentados pela ANVISA",
  "Orçamento 100% gratuito",
  "Atendimento em até 24h",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/30" />
        {/* Subtle radial glow */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(134 64% 36% / 0.3) 0%, transparent 50%)",
          }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-16 right-8 w-48 h-48 rounded-full bg-primary/8 blur-3xl hidden lg:block"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-primary-foreground"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">Líder no controle de pragas em Jundiaí</span>
              <span className="sm:hidden">Líder em Jundiaí</span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground leading-[1.15]"
          >
            Sua casa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">livre de pragas</span>
              <motion.span
                className="absolute -inset-1 rounded-lg bg-primary/15 blur-md"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <br />
            <span className="text-primary-foreground/90">com garantia!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mb-4 sm:mb-5 text-sm sm:text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl"
          >
            Atendimento <strong className="text-primary-foreground">rápido e seguro</strong> em Jundiaí e região.
          </motion.p>

          {/* Benefits list */}
          <motion.div variants={itemVariants} className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <WhatsAppButton 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
              >
                Solicitar Orçamento Grátis
              </WhatsAppButton>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-background/10 backdrop-blur-md border border-primary-foreground/10 p-2.5 sm:p-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + index * 0.08, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: "rgba(255,255,255,0.12)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary/20 flex-shrink-0">
                  <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-primary-foreground/90 leading-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Stats Card - Desktop */}
        <motion.div
          className="absolute bottom-8 right-8 hidden xl:block"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="rounded-xl bg-background/95 backdrop-blur-md p-4 shadow-elevated border border-primary/20"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-primary shadow-md">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-foreground">+500</p>
                <p className="text-xs text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
