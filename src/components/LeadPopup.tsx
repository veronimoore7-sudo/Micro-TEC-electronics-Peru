import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSubmitLead } from "@/hooks/use-local-forms";
import { Cpu, Loader2 } from "lucide-react";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const mutation = useSubmitLead();

  // Form State
  const [intent, setIntent] = useState("reparar");
  const [device, setDevice] = useState("");
  const [problem, setProblem] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const isCompleted = localStorage.getItem('survey_completed');
    if (!isCompleted) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = () => {
    mutation.mutate({ intent, device, problem, budget }, {
      onSuccess: () => {
        setOpen(false);
      }
    });
  };

  const handleNext = () => {
    if (step === 1 && !intent) return;
    if (step === 2 && !device) return;
    if (step === 3 && intent === 'reparar' && !problem) return;
    if (step === 3 && intent !== 'reparar' && !budget) return;
    
    if ((step === 3 && intent === 'reparar') || (step === 2 && intent !== 'reparar')) {
      // Final step reached
      handleSubmit();
    } else {
      setStep(s => s + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 shadow-2xl p-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="flex items-center gap-2 text-2xl font-display text-white">
              <Cpu className="w-6 h-6 text-primary" /> 
              ¿Cómo podemos ayudarte hoy?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Responde 3 breves preguntas para darte el mejor servicio.
            </DialogDescription>
          </DialogHeader>

          <div className="min-h-[200px] flex flex-col justify-center">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <Label className="text-lg text-white font-medium">¿Qué necesitas?</Label>
                <RadioGroup value={intent} onValueChange={setIntent} className="grid gap-3">
                  {[
                    { id: 'comprar', label: 'Comprar producto/accesorio' },
                    { id: 'reparar', label: 'Reparar un dispositivo' },
                    { id: 'consultar', label: 'Solo tengo una consulta' }
                  ].map(opt => (
                    <div key={opt.id} className="flex items-center space-x-3 bg-background border border-border/50 p-4 rounded-xl hover:border-primary/50 cursor-pointer">
                      <RadioGroupItem value={opt.id} id={opt.id} />
                      <Label htmlFor={opt.id} className="cursor-pointer flex-1 text-white">{opt.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <Label className="text-lg text-white font-medium">¿Qué dispositivo tienes?</Label>
                <Select value={device} onValueChange={setDevice}>
                  <SelectTrigger className="w-full h-12 bg-background border-border/50 text-white focus:ring-primary">
                    <SelectValue placeholder="Selecciona un equipo" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border text-white">
                    <SelectItem value="iphone">iPhone / iPad</SelectItem>
                    <SelectItem value="samsung">Samsung Galaxy</SelectItem>
                    <SelectItem value="xiaomi">Xiaomi / Poco</SelectItem>
                    <SelectItem value="laptop">Laptop / MacBook</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {intent !== 'reparar' && (
                  <div className="mt-6">
                    <Label className="text-lg text-white font-medium mb-2 block">¿Presupuesto aproximado?</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger className="w-full h-12 bg-background border-border/50 text-white focus:ring-primary">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border text-white">
                        <SelectItem value="50">Menos de $50</SelectItem>
                        <SelectItem value="100">$50 - $100</SelectItem>
                        <SelectItem value="200">$100 - $200</SelectItem>
                        <SelectItem value="mas">Más de $200</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            {step === 3 && intent === 'reparar' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <Label className="text-lg text-white font-medium block">¿Qué problema presenta?</Label>
                <Textarea 
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Ej. La pantalla está rota, la batería dura poco..."
                  className="min-h-[120px] bg-background border-border/50 text-white focus-visible:ring-primary resize-none"
                />
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => setStep(s => s - 1)} className="text-muted-foreground">Atrás</Button>
            ) : <div />}
            <Button 
              onClick={handleNext} 
              disabled={mutation.isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              {mutation.isPending ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Guardando...</>
              ) : (
                ((step === 3 && intent === 'reparar') || (step === 2 && intent !== 'reparar')) ? 'Finalizar' : 'Siguiente'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
