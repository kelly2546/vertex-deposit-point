
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard } from "lucide-react";
import { Control } from "react-hook-form";
import { FormValues } from "./PaymentMethodSelection";

interface CardFieldsProps {
  control: Control<FormValues>;
}

const CardFields = ({ control }: CardFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Card Number</FormLabel>
            <FormControl>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
                <Input 
                  placeholder="•••• •••• •••• ••••"
                  className="pl-10 bg-background/40 border-white/10 text-white" 
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="cardExpiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Expiry Date</FormLabel>
              <FormControl>
                <Input 
                  placeholder="MM/YY"
                  className="bg-background/40 border-white/10 text-white" 
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="cardCvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">CVV</FormLabel>
              <FormControl>
                <Input 
                  placeholder="•••"
                  className="bg-background/40 border-white/10 text-white" 
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="savePaymentMethod"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-[#F2FF44] data-[state=checked]:text-black"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-white">
                Save card for future payments
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CardFields;
