
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { z } from "zod";

// Payment method logos
export const paymentMethods = [
  {
    id: "mpesa",
    name: "M-Pesa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg",
  },
  {
    id: "airtel",
    name: "Airtel Money",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Airtel_logo.svg",
  },
  {
    id: "card",
    name: "Visa/Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  }
];

// Form schema
export const formSchema = z.object({
  amount: z.string()
    .min(1, { message: "Amount is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, { 
      message: "Amount must be a positive number" 
    }),
  paymentMethod: z.string({ required_error: "Please select a payment method" }),
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .optional()
    .or(z.literal("")),
  cardNumber: z.string()
    .min(16, { message: "Card number must be at least 16 digits" })
    .optional()
    .or(z.literal("")),
  cardExpiry: z.string()
    .optional()
    .or(z.literal("")),
  cardCvv: z.string()
    .min(3, { message: "CVV must be at least 3 digits" })
    .optional()
    .or(z.literal("")),
  savePaymentMethod: z.boolean().default(false).optional(),
});

export type FormValues = z.infer<typeof formSchema>;

interface PaymentMethodSelectionProps {
  selectedMethod: string;
  control: Control<FormValues>;
  onMethodSelect: (methodId: string) => void;
}

const PaymentMethodSelection = ({ 
  selectedMethod, 
  control, 
  onMethodSelect 
}: PaymentMethodSelectionProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-white">Select Payment Method</Label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            onClick={() => onMethodSelect(method.id)}
            className={`border rounded-lg p-4 cursor-pointer transition-all flex flex-col items-center justify-center h-32 ${
              selectedMethod === method.id 
                ? "border-[#F2FF44] bg-white/5" 
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <div className="w-20 h-16 flex items-center justify-center">
              <img 
                src={method.logo} 
                alt={method.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-center text-white">
              {method.name}
            </p>
          </div>
        ))}
      </div>
      <FormItem>
        <FormControl>
          <input type="hidden" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </div>
  );
};

export default PaymentMethodSelection;
