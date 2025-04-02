
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormValues } from "./PaymentMethodSelection";

interface AmountInputProps {
  control: Control<FormValues>;
  kshAmount: string;
}

const AmountInput = ({ control, kshAmount }: AmountInputProps) => {
  return (
    <FormField
      control={control}
      name="amount"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Amount</FormLabel>
          <FormControl>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">$</span>
              <Input 
                placeholder="0.00"
                className="pl-8 bg-background/40 border-white/10 text-white" 
                {...field}
                type="number"
                step="0.01"
              />
              {field.value && !isNaN(Number(field.value)) && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-[#F2FF44]/10 text-[#F2FF44] text-sm">
                  KSH {kshAmount}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AmountInput;
