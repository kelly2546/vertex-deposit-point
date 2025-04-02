
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, DollarSign } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Payment method logos
const paymentMethods = [
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

// Currency conversion rate
const USD_TO_KSH_RATE = 135;

// Form schema
const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [kshAmount, setKshAmount] = useState("0.00");
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
      phone: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      savePaymentMethod: false,
    },
  });

  // Update KSH amount whenever the USD amount changes
  useEffect(() => {
    const amount = form.watch("amount");
    if (amount && !isNaN(Number(amount))) {
      const convertedAmount = (Number(amount) * USD_TO_KSH_RATE).toFixed(2);
      setKshAmount(convertedAmount);
    } else {
      setKshAmount("0.00");
    }
  }, [form.watch("amount")]);

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Deposit initiated",
      description: `Processing deposit of $${data.amount} (KSH ${kshAmount}) using ${data.paymentMethod}`,
    });
  }

  const handleMethodSelection = (methodId: string) => {
    setSelectedMethod(methodId);
    form.setValue("paymentMethod", methodId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fund Your <span className="text-[#F2FF44]">Trading Account</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Securely deposit funds to your Vertex Trading account using your preferred payment method.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border border-white/10 bg-[#111319] text-white shadow-lg">
              <CardHeader>
                <CardTitle>Make a Deposit</CardTitle>
                <CardDescription className="text-white/60">
                  Choose your preferred payment method below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
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

                    <div className="space-y-3">
                      <Label className="text-white">Select Payment Method</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {paymentMethods.map((method) => (
                          <div 
                            key={method.id}
                            onClick={() => handleMethodSelection(method.id)}
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
                      {form.formState.errors.paymentMethod && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.paymentMethod.message}
                        </p>
                      )}
                    </div>

                    {selectedMethod === "mpesa" && (
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">M-Pesa Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your M-Pesa registered number"
                                className="bg-background/40 border-white/10 text-white" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {selectedMethod === "airtel" && (
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Airtel Money Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your Airtel Money number"
                                className="bg-background/40 border-white/10 text-white" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {selectedMethod === "card" && (
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
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
                            control={form.control}
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
                            control={form.control}
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
                          control={form.control}
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
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              <Card className="border border-white/10 bg-[#111319] text-white shadow-lg">
                <CardHeader>
                  <CardTitle>Deposit Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Amount (USD)</span>
                    <span className="font-semibold">
                      ${form.watch("amount") || "0.00"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Amount (KSH)</span>
                    <span className="font-semibold">KSH {kshAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Processing Fee</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                    <span className="font-medium">Total</span>
                    <div className="flex flex-col items-end">
                      <span className="text-xl font-bold text-[#F2FF44]">
                        ${form.watch("amount") || "0.00"}
                      </span>
                      <span className="text-sm text-white/60">
                        KSH {kshAmount}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-white/10 bg-[#111319] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">Secure Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    All transactions are encrypted and secure. Your financial information is never stored on our servers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-white/10 bg-[#111319] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70 mb-4">
                    If you're having trouble with your deposit, our customer support team is here to help.
                  </p>
                  <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
