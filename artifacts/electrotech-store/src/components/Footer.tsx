import { Cpu, Facebook, Instagram, Twitter } from "lucide-react";

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
                Electro<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Tu centro especializado de confianza para reparación y compra de tecnología. Calidad, rapidez y garantía en cada servicio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-muted-foreground hover:text-primary transition-colors">Catálogo de Productos</a></li>
              <li><a href="#reparaciones" className="text-muted-foreground hover:text-primary transition-colors">Servicios de Reparación</a></li>
              <li><a href="#agendar" className="text-muted-foreground hover:text-primary transition-colors">Agendar Cita</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Garantías</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reembolsos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ElectroTech. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Diseñado con <span className="text-red-500 mx-1">❤</span> para amantes de la tecnología.
          </p>
        </div>
      </div>
    </footer>
  );
}
