import { Metadata } from "next";
import { TRenderMetadata } from "./type";

export const renderMetadata = ({ title, description }: TRenderMetadata) => {
  const metadata: Metadata = {
    title,
    description,
  };
  return metadata;
};
