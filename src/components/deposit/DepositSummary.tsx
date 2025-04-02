
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormWatch } from "react-hook-form";
import { FormValues } from "./PaymentMethodSelection";

interface DepositSummaryProps {
  watch: UseFormWatch<FormValues>;
  kshAmount: string;
}

const DepositSummary = ({ watch, kshAmount }: DepositSummaryProps) => {
  return (
    <div className="space-y-6">
      <Card className="border border-white/10 bg-[#111319] text-white shadow-lg">
        <CardHeader>
          <CardTitle>Deposit Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Amount (USD)</span>
            <span className="font-semibold">
              ${watch("amount") || "0.00"}
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
                ${watch("amount") || "0.00"}
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
    </div>
  );
};

export default DepositSummary;
