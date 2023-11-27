import { TSidebarProps } from "@/contants/type";
import React from "react";

const UpgradeProModal: React.FC<
  Pick<TSidebarProps, "isProPlan" | "className">
> = ({ isProPlan, className }) => {
  return <div>UpgradeProModal</div>;
};

export default UpgradeProModal;
