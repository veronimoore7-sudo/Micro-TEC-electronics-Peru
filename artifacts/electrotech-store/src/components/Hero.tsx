import { motion } from "framer-motion";
import { ArrowRight, Wrench, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/tech-grid.png`}
          alt="Tech Grid Background"
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Servicio Técnico Especializado</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Reparamos, vendemos y <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
              potenciamos tu tecnología
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Soluciones rápidas y confiables para tus dispositivos. Desde pantallas rotas hasta los últimos gadgets del mercado, somos tu aliado tecnológico.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#productos">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-full">
                Ver Productos
              </Button>
            </a>
            <a href="#agendar">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 border-0 shadow-lg shadow-primary/25">
                Agendar Reparación
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: ShieldCheck, title: "+5 años de experiencia", desc: "Expertos en la industria" },
            { icon: Zap, title: "Servicio rápido", desc: "Reparaciones en el día" },
            { icon: Wrench, title: "Garantía total", desc: "90 días de cobertura" },
          ].map((badge, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center hover:bg-white/5 transition-colors border-glow">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
