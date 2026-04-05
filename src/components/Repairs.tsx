import { MonitorSmartphone, Battery, BugPlay, Droplets } from "lucide-react";

const SERVICES = [
  {
    icon: MonitorSmartphone,
    title: "Cambio de Pantalla",
    desc: "Pantallas originales o compatibles de alta calidad con garantía. Recupera la nitidez y el táctil de tu equipo."
  },
  {
    icon: Battery,
    title: "Cambio de Batería",
    desc: "Restaura la autonomía de tu dispositivo. Baterías certificadas para que tu equipo dure todo el día."
  },
  {
    icon: BugPlay,
    title: "Reparación de Software",
    desc: "Eliminación de virus, actualizaciones del sistema, recuperación de bootloops y reseteos de fábrica seguros."
  },
  {
    icon: Droplets,
    title: "Daño por Agua",
    desc: "Diagnóstico profundo, limpieza por ultrasonido y recuperación de datos vitales de equipos mojados."
  }
];

export function Repairs() {
  return (
    <section id="reparaciones" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute w-full h-[1px] top-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Expertos en <span className="text-primary">Reparación</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tu tecnología es vital. Nuestro equipo de técnicos certificados utiliza repuestos de la más alta calidad y herramientas de precisión para devolverle la vida a tus dispositivos.
            </p>
            <div className="flex gap-4 mb-8 flex-wrap">
              <div className="bg-background/50 border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                Diagnóstico Gratis
              </div>
              <div className="bg-background/50 border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                Técnicos Certificados
              </div>
              <div className="bg-background/50 border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                Garantía 90 Días
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
