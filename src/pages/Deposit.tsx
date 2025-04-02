
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import DepositLimitModal from "@/components/deposit/DepositLimitModal";
import PaymentForm from "@/components/deposit/PaymentForm";
import DepositSummary from "@/components/deposit/DepositSummary";
import { formSchema, FormValues } from "@/components/deposit/PaymentMethodSelection";

// Currency conversion rate
const USD_TO_KSH_RATE = 135;

// Maximum deposit amount for new users
const MAX_DEPOSIT_AMOUNT = 17;

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [kshAmount, setKshAmount] = useState("0.00");
  const [showLimitModal, setShowLimitModal] = useState(false);
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
      
      // Show limit modal if user tries to enter more than the maximum amount
      if (Number(amount) > MAX_DEPOSIT_AMOUNT) {
        setShowLimitModal(true);
        // Reset the amount to the maximum allowed
        form.setValue("amount", MAX_DEPOSIT_AMOUNT.toString());
      }
    } else {
      setKshAmount("0.00");
    }
  }, [form.watch("amount")]);

  function onSubmit(data: FormValues) {
    // Check if amount is within limit before submission
    if (Number(data.amount) > MAX_DEPOSIT_AMOUNT) {
      setShowLimitModal(true);
      form.setValue("amount", MAX_DEPOSIT_AMOUNT.toString());
      return;
    }
    
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
      
      <DepositLimitModal 
        open={showLimitModal} 
        onOpenChange={setShowLimitModal} 
        maxDepositAmount={MAX_DEPOSIT_AMOUNT} 
      />
      
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
                <PaymentForm 
                  form={form}
                  kshAmount={kshAmount}
                  selectedMethod={selectedMethod}
                  onMethodSelect={handleMethodSelection}
                  onSubmit={onSubmit}
                />
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DepositSummary watch={form.watch} kshAmount={kshAmount} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
