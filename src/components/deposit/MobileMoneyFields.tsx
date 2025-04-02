
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormValues } from "./PaymentMethodSelection";

interface MobileMoneyFieldsProps {
  control: Control<FormValues>;
  paymentType: "mpesa" | "airtel";
}

const MobileMoneyFields = ({ control, paymentType }: MobileMoneyFieldsProps) => {
  const label = paymentType === "mpesa" ? "M-Pesa Phone Number" : "Airtel Money Number";
  const placeholder = paymentType === "mpesa" 
    ? "Enter your M-Pesa registered number" 
    : "Enter your Airtel Money number";

  return (
    <FormField
      control={control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">{label}</FormLabel>
          <FormControl>
            <Input 
              placeholder={placeholder}
              className="bg-background/40 border-white/10 text-white" 
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MobileMoneyFields;
