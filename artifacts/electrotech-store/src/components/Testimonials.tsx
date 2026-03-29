import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "María García",
    initial: "M",
    color: "bg-blue-500",
    text: "Llevé mi iPhone con pantalla rota y en menos de 2 horas lo tenía como nuevo. Excelente servicio y precio justo."
  },
  {
    name: "Carlos Rodríguez",
    initial: "C",
    color: "bg-emerald-500",
    text: "Compré un Samsung Galaxy aquí y el precio fue mejor que en cualquier otra tienda. 100% recomendado para compras."
  },
  {
    name: "Ana Martínez",
    initial: "A",
    color: "bg-purple-500",
    text: "Me salvaron el teléfono después de que se cayó al agua. Recuperaron todos mis datos. Son increíbles profesionales."
  },
  {
    name: "Roberto Silva",
    initial: "R",
    color: "bg-orange-500",
    text: "Atención personalizada y técnicos muy honestos. Te explican exactamente el problema. Ya soy cliente fijo."
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-secondary/30 relative border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Lo que dicen <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            La confianza se gana con resultados. Únete a miles de clientes satisfechos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${r.color}`}>
                  {r.initial}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{r.name}</h4>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
