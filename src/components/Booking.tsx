import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarDays, Clock, Smartphone, Wrench, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitBooking } from "@/hooks/use-local-forms";

const bookingSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  phone: z.string().min(8, "Teléfono inválido"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  device: z.string().min(2, "Indica tu dispositivo"),
  date: z.string().min(1, "Selecciona una fecha"),
  time: z.string().min(1, "Selecciona un horario"),
  problem: z.string().min(10, "Describe el problema (min 10 caract.)"),
});

export function Booking() {
  const mutation = useSubmitBooking();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "", phone: "", email: "", service: "", device: "", date: "", time: "", problem: ""
    }
  });

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    mutation.mutate(values, {
      onSuccess: () => form.reset()
    });
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="agendar" className="py-24 bg-background relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Agendar <span className="text-primary">Reparación</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Completa el formulario y asegura tu turno. Te atenderemos sin demoras.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan Pérez" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 234 567 8900" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="correo@ejemplo.com" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Tipo de Servicio</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white focus:ring-primary">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-border text-white">
                          <SelectItem value="pantalla"><Wrench className="w-4 h-4 inline mr-2"/>Cambio de Pantalla</SelectItem>
                          <SelectItem value="bateria"><Wrench className="w-4 h-4 inline mr-2"/>Cambio de Batería</SelectItem>
                          <SelectItem value="software"><Wrench className="w-4 h-4 inline mr-2"/>Software / Desbloqueo</SelectItem>
                          <SelectItem value="agua"><Wrench className="w-4 h-4 inline mr-2"/>Daño por Agua</SelectItem>
                          <SelectItem value="otro"><Wrench className="w-4 h-4 inline mr-2"/>Otro problema</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="device"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Modelo de Dispositivo</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input placeholder="Ej. iPhone 13 Pro Max" className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Fecha Preferida</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                          <Input 
                            type="date" 
                            min={today}
                            className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary [color-scheme:dark]" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Hora Preferida</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white focus:ring-primary">
                            <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                            <SelectValue placeholder="Selecciona la hora" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-border text-white">
                          {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map(t => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="problem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Descripción del problema</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe brevemente qué le sucede a tu equipo..." 
                        className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary min-h-[120px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Procesando Reserva...
                  </>
                ) : "Confirmar Cita de Reparación"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
