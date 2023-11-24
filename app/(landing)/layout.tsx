import { renderMetadata } from "@/contant/function";
import { TLayoutProps } from "@/contant/type";
import { Metadata } from "next";
import React from "react";

renderMetadata({
  title: "Landing page",
  description: "This is a landing page",
});
const LandingLayout = ({ children }: TLayoutProps) => {
  return <div>{children}</div>;
};

export default LandingLayout;
