import { Cpu, Globe, Share2, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Micro<span className="text-primary"> TEC</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Tu centro especializado de confianza para reparación y compra de tecnología.
            </p>
            <div className="flex gap-4">
              {/* Usamos estos 3 iconos que SI existen siempre */}
              <Globe className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Share2 className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
