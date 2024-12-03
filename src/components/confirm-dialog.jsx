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

const ConfirmDialog = ({
  title = "Are you sure you want to proceed?",
  description = "",
  children,
  confirm,
  cancel,
  onConfirm,
  onCancel,
  defaultOpen,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-secondary text-xl text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            {cancel ? (
              cancel
            ) : (
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </DialogClose>
          {confirm ? confirm : <Button onClick={onConfirm}>Proceed</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
