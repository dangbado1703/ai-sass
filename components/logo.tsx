import { ClassValue } from "clsx";
import React from "react";
import { BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface LogoProps {
  className?: ClassValue[];
}

const popins = Poppins({ weight: "700", subsets: ["latin"] });

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <BrainCircuit color="#0ea5e9" size={40} />
      <span className={cn("ml-2 font-bold text-3xl", popins.className)}>
        BrainFast
      </span>
    </div>
  );
};

export default Logo;
