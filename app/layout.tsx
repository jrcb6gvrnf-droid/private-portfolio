import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteLoader } from "@/components/site-loader";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gené van Aswegen | Private Portfolio",
    template: "%s | Gené van Aswegen",
  },
  description:
    "Private design portfolio for Gené van Aswegen, multidisciplinary UI/UX designer and digital designer.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
