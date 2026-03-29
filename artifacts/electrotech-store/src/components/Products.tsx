import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Headphones, BatteryCharging, Watch, Laptop, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["Todos", "Celulares", "Accesorios", "Audio", "Energía"];

const PRODUCTS = [
  { id: 1, name: "iPhone 14 Pro", price: 899, desc: "Nuevo, garantía oficial", cat: "Celulares", icon: Smartphone },
  { id: 2, name: "Samsung Galaxy S23", price: 749, desc: "Snapdragon 8 Gen 2", cat: "Celulares", icon: Smartphone },
  { id: 3, name: "AirPods Pro 2", price: 199, desc: "Cancelación de ruido", cat: "Audio", icon: Headphones },
  { id: 4, name: "Cable USB-C 100W", price: 15, desc: "Carga rápida reforzada", cat: "Accesorios", icon: BatteryCharging },
  { id: 5, name: "Cargador Anker 65W", price: 35, desc: "GaN technology ultra", cat: "Energía", icon: BatteryCharging },
  { id: 6, name: "Funda iPhone 14", price: 25, desc: "Protección premium caídas", cat: "Accesorios", icon: Smartphone },
  { id: 7, name: "Samsung Buds2 Pro", price: 149, desc: "Hi-Fi audio inmersivo", cat: "Audio", icon: Headphones },
  { id: 8, name: "Power Bank 20000mAh", price: 45, desc: "Carga inalámbrica Magsafe", cat: "Energía", icon: BatteryCharging },
];

export function Products() {
  const [activeCat, setActiveCat] = useState("Todos");

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
            {filtered.map(product => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-secondary to-background p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <product.icon className="w-24 h-24 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{product.desc}</p>
                  <div className="text-2xl font-bold text-primary mb-6">${product.price}</div>
                  
                  <div className="flex flex-col gap-2">
                    <Button className="w-full bg-white text-black hover:bg-gray-200">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar
                    </Button>
                    <a href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20producto:%20${product.name}`} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="w-full border-border hover:bg-secondary hover:text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
