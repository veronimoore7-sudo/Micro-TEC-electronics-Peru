import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Simulates a network request for frontend-only functionality
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useSubmitBooking() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: any) => {
      await delay(1200);
      // Simulate validation or random errors if needed, but we'll assume success
      console.log("Booking submitted:", data);
      return data;
    },
    onSuccess: () => {
      toast({
        title: "¡Reserva Confirmada!",
        description: "Hemos recibido tu solicitud. Te contactaremos pronto.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo procesar la reserva. Intenta nuevamente.",
        variant: "destructive",
      });
    }
  });
}

export function useSubmitLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: any) => {
      await delay(800);
      localStorage.setItem('survey_completed', 'true');
      console.log("Lead captured:", data);
      return data;
    },
    onSuccess: () => {
      toast({
        title: "¡Gracias por tu respuesta!",
        description: "Esto nos ayuda a brindarte un mejor servicio.",
      });
    }
  });
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: any) => {
      await delay(1000);
      console.log("Contact form submitted:", data);
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Mensaje Enviado",
        description: "Nos pondremos en contacto contigo a la brevedad.",
      });
    }
  });
}
