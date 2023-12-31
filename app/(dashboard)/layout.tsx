import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/mobile/mobile-sidebar";
import UpgradeProModal from "@/components/sidebar/upgrade-promodal";
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
          className={cn(
            "fixed left-0 z-20 w-80 hidden [&:has(is-navbar-minimal)]:w-fit",
            "lg:block"
          )}
        />
        <MobileSidebar userLimitCount={1} isProPlan={false} />
        <UpgradeProModal isProPlan={false} />
        <div
          className={cn(
            "bg-background h-[calc(100vh-56px)]",
            "lg:rounded-3xl lg:p-7"
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
