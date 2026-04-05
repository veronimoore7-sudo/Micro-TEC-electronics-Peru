import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola,%20visité%20su%20página%20y%20necesito%20ayuda"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute right-0 w-14 h-14 bg-[#25D366] rounded-full animate-ping opacity-75" />
      <div className="relative bg-[#25D366] hover:bg-[#20b858] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-transform group-hover:scale-110">
        <MessageCircle className="w-7 h-7" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda? ¡Chatea con nosotros!
        {/* Triangle pointer */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
      </div>
    </a>
  );
}
