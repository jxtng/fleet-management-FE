import LogoutDialog from "@/components/auth/logout-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutCard = () => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl mb-4 text-bold text-center text-secondary">
          Log Out
        </h1>
      </CardHeader>
      <CardContent>
        <p className="mb-4 whitespace-pre-wrap">
          Taking a break? Your session will time out after a while, but your
          account and info are always safe here. See you soon!
        </p>
      </CardContent>

      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <LogoutDialog>
          <Button>
            Log Out
            <LogOut />
          </Button>
        </LogoutDialog>
      </CardFooter>
    </Card>
  );
};

export default LogoutCard;
