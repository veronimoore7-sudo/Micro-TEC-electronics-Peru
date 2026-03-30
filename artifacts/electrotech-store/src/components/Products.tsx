import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export function Products() {
  const [activeCat, setActiveCat] = useState("Todos");
  const [, navigate] = useLocation();

  const filtered = PRODUCTS.filter(p => activeCat === "Todos" || p.cat === activeCat);

  return (
    <section id="productos" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Nuestros <span className="text-primary">Productos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de equipos y accesorios de alta calidad, testeados por nuestros expertos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map(product => {
              const Icon = product.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group flex flex-col"
                >
                  {/* Clickable image area */}
                  <button
                    onClick={() => navigate(`/producto/${product.id}`)}
                    className="aspect-square bg-gradient-to-br from-secondary to-background p-8 flex items-center justify-center relative overflow-hidden w-full text-left"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-24 h-24 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="absolute bottom-3 right-3 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Ver más <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>

                  <div className="p-6 flex flex-col flex-1">
                    <button
                      onClick={() => navigate(`/producto/${product.id}`)}
                      className="text-left mb-1 hover:text-primary transition-colors"
                    >
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    </button>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{product.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-6">${product.price}</div>

                    <div className="flex flex-col gap-2 mt-auto">
                      <Button
                        onClick={() => navigate(`/producto/${product.id}`)}
                        className="w-full bg-white text-black hover:bg-gray-200"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ver producto
                      </Button>
                      <a
                        href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="outline" className="w-full border-border hover:bg-secondary hover:text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Consultar
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
