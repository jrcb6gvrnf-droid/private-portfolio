import type { Metadata } from "next";
import { PortfolioPage } from "@/components/public-components";

export const metadata: Metadata = {
  title: "Private Portfolio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Portfolio() {
  return <PortfolioPage />;
}

