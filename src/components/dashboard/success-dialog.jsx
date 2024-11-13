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
import Image from "next/image";

const SuccessDialog = ({
  title = "Operation Succesful",
  description = "",
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Image
            src="/images/success.svg"
            width={167}
            height={135}
            alt="Operation successful image"
            className="block mx-auto"
          />

          <DialogTitle className="text-secondary text-xl text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
