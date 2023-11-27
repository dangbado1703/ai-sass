import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { TLayoutProps } from "@/contants/type";
import { cn } from "@/lib/utils";
import React from "react";

const DashboardLayout = ({ children }: TLayoutProps) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}
      >
        <Sidebar
          userLimitCount={1}
          isProPlan={false}
          className={cn("fixed left-0 z-20 w-80 hidden [&:has]")}
        />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
