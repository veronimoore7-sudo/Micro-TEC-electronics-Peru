import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Cpu, Menu, X, MessageSquare, ChevronDown, Smartphone, Headphones, BatteryCharging, Cable, Monitor, Tv, Laptop, Cpu as CpuIcon, HelpCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PRODUCTS_MENU = [
  {
    category: "Celulares",
    icon: Smartphone,
    href: "#productos",
    items: ["iPhone", "Samsung", "Xiaomi", "Motorola", "Huawei", "Otros"],
  },
  {
    category: "Accesorios",
    icon: ShoppingBag,
    href: "#productos",
    items: ["Fundas anime", "Fundas deportivas", "Protectores pantalla", "Soportes", "Otros"],
  },
  {
    category: "Audífonos",
    icon: Headphones,
    href: "#productos",
    items: ["AirPods", "Samsung Buds", "Sony", "JBL", "Otros"],
  },
  {
    category: "Cables",
    icon: Cable,
    href: "#productos",
    items: ["USB-C", "Lightning", "HDMI", "Micro USB", "Otros"],
  },
  {
    category: "Cargadores",
    icon: BatteryCharging,
    href: "#productos",
    items: ["Inalámbrico", "Rápido GaN", "Power Bank", "Solar", "Otros"],
  },
];

const REPAIRS_MENU = [
  { label: "Televisores", icon: Tv, desc: "LCD, OLED, Smart TV" },
  { label: "Laptops", icon: Laptop, desc: "Mac, Windows, Chromebook" },
  { label: "Computadores", icon: CpuIcon, desc: "PC de escritorio, All-in-One" },
  { label: "Smartphones", icon: Smartphone, desc: "iPhone, Samsung y más" },
  { label: "Monitores", icon: Monitor, desc: "Gaming, oficina, 4K" },
  { label: "Otros", icon: HelpCircle, desc: "Tablets, consolas, gadgets" },
];

function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] glass border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-6 z-50">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        Explorar productos
      </p>
      <div className="grid grid-cols-3 gap-4">
        {PRODUCTS_MENU.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.category}>
              <a
                href={group.href}
                onClick={onClose}
                className="flex items-center gap-2 text-white font-semibold text-sm mb-2 hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4 text-primary" />
                {group.category}
              </a>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href={group.href}
                      onClick={onClose}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors block py-0.5 pl-6"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-5 pt-4 border-t border-white/10">
        <a
          href="#productos"
          onClick={onClose}
          className="text-sm text-primary hover:underline font-medium"
        >
          Ver todos los productos →
        </a>
      </div>
    </div>
  );
}

function RepairsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] glass border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-6 z-50">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        ¿Qué dispositivo necesita reparación?
      </p>
      <div className="grid grid-cols-2 gap-3">
        {REPAIRS_MENU.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href="#reparaciones"
              onClick={onClose}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href="#agendar"
          onClick={onClose}
          className="text-sm text-primary hover:underline font-medium"
        >
          Agendar reparación →
        </a>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"productos" | "reparaciones" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: "productos" | "reparaciones") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Micro<span className="text-primary"> TEC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </a>

            {/* Productos dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("productos")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#productos"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  activeDropdown === "productos" ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                Productos
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "productos" && "rotate-180")} />
              </a>
              {activeDropdown === "productos" && (
                <ProductsDropdown onClose={closeDropdown} />
              )}
            </div>

            {/* Reparaciones dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("reparaciones")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#reparaciones"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  activeDropdown === "reparaciones" ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                Reparaciones
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "reparaciones" && "rotate-180")} />
              </a>
              {activeDropdown === "reparaciones" && (
                <RepairsDropdown onClose={closeDropdown} />
              )}
            </div>

            <a href="#agendar" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Agendar
            </a>
            <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>

            <a href="https://wa.me/1234567890?text=Hola,%20necesito%20información" target="_blank" rel="noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 shadow-2xl shadow-black/50 max-h-[80vh] overflow-y-auto">
          <div className="p-4 flex flex-col space-y-1">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-white hover:bg-white/5 rounded-lg"
            >
              Inicio
            </a>

            {/* Mobile Productos */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "productos" ? null : "productos")}
                className="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-white hover:bg-white/5 rounded-lg"
              >
                Productos
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === "productos" && "rotate-180")} />
              </button>
              {mobileExpanded === "productos" && (
                <div className="pl-4 py-2 space-y-3">
                  {PRODUCTS_MENU.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.category}>
                        <div className="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-primary">
                          <Icon className="w-3.5 h-3.5" />
                          {group.category}
                        </div>
                        {group.items.map((item) => (
                          <a
                            key={item}
                            href={group.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-8 py-1 text-sm text-muted-foreground hover:text-white"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Reparaciones */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "reparaciones" ? null : "reparaciones")}
                className="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-white hover:bg-white/5 rounded-lg"
              >
                Reparaciones
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === "reparaciones" && "rotate-180")} />
              </button>
              {mobileExpanded === "reparaciones" && (
                <div className="pl-4 py-2 space-y-1">
                  {REPAIRS_MENU.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href="#reparaciones"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-white hover:bg-white/5 rounded-lg"
            >
              Agendar
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-white hover:bg-white/5 rounded-lg"
            >
              Testimonios
            </a>

            <div className="pt-2">
              <a
                href="https://wa.me/1234567890?text=Hola,%20necesito%20información"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contáctanos por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
