import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, ShoppingCart, Shield, Zap, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();

  const product = PRODUCTS.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} className="bg-primary text-primary-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const Icon = product.icon;
  const whatsappUrl = `https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}%20-%20$${product.price}`;

  const lines = product.fullDescription.split("\n");

  return (
    <div className="min-h-screen bg-background text-white">
      <FloatingWhatsApp />

      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver a productos</span>
          </button>
          <span className="text-border/50">|</span>
          <span className="text-sm text-muted-foreground truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gradient-to-br from-secondary to-background rounded-3xl border border-border/50 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20 z-10">
                {product.cat}
              </div>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              ) : (
                <Icon className="w-40 h-40 text-primary opacity-80" />
              )}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Shield, text: "Garantía oficial" },
                { icon: Zap, text: "Envío rápido" },
                { icon: Wrench, text: "Soporte técnico" },
              ].map(({ icon: BadgeIcon, text }) => (
                <div key={text} className="bg-card border border-border/50 rounded-xl p-3 flex flex-col items-center gap-1.5 text-center">
                  <BadgeIcon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(48 reseñas)</span>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.desc}</p>
            </div>

            <div className="text-5xl font-bold text-primary">${product.price}</div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 bg-white text-black hover:bg-gray-200 font-semibold h-14 text-base"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar ahora
              </Button>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold h-14 text-base"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </Button>
              </a>
            </div>

            {/* Description */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Descripción</h2>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                {lines.map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={i} className="font-semibold text-white mt-4 first:mt-0">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <p key={i} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{line.slice(2)}</span>
                      </p>
                    );
                  }
                  if (line.trim() === "") return null;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Especificaciones</h2>
              <div className="divide-y divide-border/40">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3">
                    <span className="text-muted-foreground text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium text-right max-w-[55%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
