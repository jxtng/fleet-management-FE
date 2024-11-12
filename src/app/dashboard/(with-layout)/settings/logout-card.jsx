import Button from "@/components/button";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutCard = () => {
  return (
    <div className="card rounded-md bg-gray-100 border p-8">
      <h1 className="text-lg mb-4 text-bold text-center text-secondary">
        Log Out
      </h1>
      <p className="mb-4 whitespace-pre-wrap">
        Taking a break? Your session will time out after a while, but your
        account and info are always safe here. See you soon!
      </p>

      <div className="btn-group flex justify-around">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">
          Log Out
          <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default LogoutCard;
