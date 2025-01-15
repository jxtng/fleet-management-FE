import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

const SuccessDialog = ({
  title = "Operation Succesful",
  description = "",
  children,
  control,
  defaultOpen,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <BadgeCheck
            size={96}
            className="mx-auto text-background fill-green-500 animate-in zoom-in slide-in-from-bottom fade-in duration-500"
          />

          <DialogTitle className="text-secondary text-xl text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {control ? (
            control
          ) : (
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
