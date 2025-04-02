
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./PaymentMethodSelection";
import AmountInput from "./AmountInput";
import PaymentMethodSelection from "./PaymentMethodSelection";
import MobileMoneyFields from "./MobileMoneyFields";
import CardFields from "./CardFields";

interface PaymentFormProps {
  form: UseFormReturn<FormValues>;
  kshAmount: string;
  selectedMethod: string;
  onMethodSelect: (methodId: string) => void;
  onSubmit: (data: FormValues) => void;
}

const PaymentForm = ({ 
  form, 
  kshAmount, 
  selectedMethod, 
  onMethodSelect, 
  onSubmit 
}: PaymentFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <AmountInput control={form.control} kshAmount={kshAmount} />

        <PaymentMethodSelection 
          selectedMethod={selectedMethod}
          control={form.control}
          onMethodSelect={onMethodSelect}
        />

        {selectedMethod === "mpesa" && (
          <MobileMoneyFields control={form.control} paymentType="mpesa" />
        )}
        
        {selectedMethod === "airtel" && (
          <MobileMoneyFields control={form.control} paymentType="airtel" />
        )}
        
        {selectedMethod === "card" && (
          <CardFields control={form.control} />
        )}
        
        <Button 
          type="submit"
          disabled={!form.formState.isValid || !selectedMethod}
          className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center justify-center gap-2 py-6"
        >
          <span>Proceed to Payment</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </Form>
  );
};

export default PaymentForm;
