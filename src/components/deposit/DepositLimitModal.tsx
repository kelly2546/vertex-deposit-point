
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface DepositLimitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  maxDepositAmount: number;
}

const DepositLimitModal = ({ open, onOpenChange, maxDepositAmount }: DepositLimitModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#111319] text-white border border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-[#F2FF44]" />
            First Deposit Limit
          </DialogTitle>
          <DialogDescription className="text-white/70">
            As a new user, your first deposit is limited to ${maxDepositAmount}. After your first successful deposit, you can deposit any amount!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
          >
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DepositLimitModal;
