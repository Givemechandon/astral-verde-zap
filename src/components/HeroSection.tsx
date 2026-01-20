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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] sm:min-h-[85vh] lg:min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
        {/* Animated radial glow */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(134 64% 36% / 0.4) 0%, transparent 60%)",
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl hidden lg:block"
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/15 blur-2xl hidden lg:block"
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse" />
              <span className="hidden sm:inline">Líder no controle de pragas em Jundiaí</span>
              <span className="sm:hidden">Líder em Jundiaí</span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 sm:mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-foreground leading-[1.1]"
          >
            Sua casa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">livre de pragas</span>
              <motion.span
                className="absolute -inset-1 rounded-lg bg-primary/20 blur-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            <br />
            <span className="text-primary-foreground/90">com garantia!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl"
          >
            Atendimento <strong className="text-primary-foreground">rápido e seguro</strong> em Jundiaí e região.
          </motion.p>

          {/* Benefits list */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 text-primary-foreground/90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mb-8 sm:mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <WhatsAppButton 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                Solicitar Orçamento Grátis
              </WhatsAppButton>
            </motion.div>
            <motion.p
              className="mt-3 text-xs sm:text-sm text-primary-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              ⚡ Resposta em menos de 5 minutos
            </motion.p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 rounded-xl bg-background/10 backdrop-blur-md border border-primary-foreground/10 p-3 sm:p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/20 flex-shrink-0">
                  <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-primary-foreground/90 leading-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Stats Card - Desktop */}
        <motion.div
          className="absolute bottom-10 right-10 hidden xl:block"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="rounded-2xl bg-background/95 backdrop-blur-md p-5 shadow-elevated border border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-primary shadow-lg">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">+500</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
