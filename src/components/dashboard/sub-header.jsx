"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const SubHeader = ({ title, description, previousLink }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center mb-4">
        <Link href={previousLink ?? "#"}>
          <Button
            size="icon"
            variant="outline"
            onClick={() => previousLink || router.back()}
          >
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className="text-secondary text-xl mx-auto font-bold">{title}</h1>
      </div>

      {description && (
        <div className="p-4 my-4 rounded border border-green-500 bg-green-100">
          {description}
        </div>
      )}
    </>
  );
};

export default SubHeader;
