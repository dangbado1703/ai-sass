"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "../ui/use-toast";

interface SubcriptionButtonProps {
  isPro?: boolean;
  className?: string;
}
const SubscriptionButton: React.FC<SubcriptionButtonProps> = ({
  isPro,
  className,
}) => {
  const [loading, setLoading] = useState(false);
  const handleSubcribe = async () => {
    try {
      setLoading(true);
      const { data, status } = await axios.get("/api/stripe");
    } catch (error) {
      console.log("error::", error);
      toast({
        title: "Hello",
        description: "Test",
        variant: "success",
        duration: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white"
        )}
      >
        <span>{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubscriptionButton;
