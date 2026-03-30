import { Phone, MapPin, Clock, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/use-local-forms";
import { useState } from "react";

export function Contact() {
  const mutation = useSubmitContact();
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg) return;
    mutation.mutate({ message: msg }, {
      onSuccess: () => setMsg("")
    });
  };

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Visítanos o <span className="text-primary">Escríbenos</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Estamos ubicados en el centro de la ciudad. Tráenos tu equipo o consúltanos cualquier duda sin compromiso.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">Avenida Carlos Alberto Izaquierre<br/>Lima, 15109, Perú</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Horario de Atención</h4>
                  <p className="text-muted-foreground">Lunes a Sábado: 9:00 AM - 8:00 PM<br/>Domingos: Cerrado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfono Directo</h4>
                  <p className="text-muted-foreground">+51 999 770 175</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@electrotech.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Contacto Rápido</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Tu Nombre" className="bg-black/40 border-border" required />
                  <Input type="email" placeholder="Tu Email" className="bg-black/40 border-border" required />
                </div>
                <Textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="bg-black/40 border-border min-h-[100px]" 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required 
                />
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-white text-black hover:bg-gray-200" disabled={mutation.isPending}>
                    {mutation.isPending ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                  <a href="https://wa.me/51999770175?text=Hola,%20tengo%20una%20consulta" target="_blank" rel="noreferrer" className="flex-1">
                    <Button type="button" className="w-full bg-[#25D366] hover:bg-[#20b858] text-white">
                      <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden bg-secondary border border-border relative">
              {/* Fake Map Placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border flex items-center shadow-lg">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold text-white">ElectroTech Central</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
