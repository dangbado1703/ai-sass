import { TLayoutProps } from "@/contants/type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing page",
  description: "This is a landing page",
};
const LandingLayout = ({ children }: TLayoutProps) => {
  return <div>{children}</div>;
};

export default LandingLayout;
