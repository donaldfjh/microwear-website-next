import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ComparisonProvider } from "@/contexts/ComparisonContext";

export const metadata: Metadata = {
  title: "MicroWear - Premium Smartwatches",
  description:
    "Premium smartwatches designed for the modern individual. Discover our collection of feature-rich wearables.",
  icons: {
    icon: "/images/logos/image.svg",
    shortcut: "/images/logos/image.svg",
    apple: "/images/logos/image.svg",
  },
  openGraph: {
    title: "MicroWear - Premium Smartwatches",
    description:
      "Premium smartwatches designed for the modern individual. Discover our collection of feature-rich wearables.",
    type: "website",
    locale: "en_US",
    siteName: "MicroWear",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ComparisonProvider>
          <Navigation />
          {children}
        </ComparisonProvider>
      </body>
    </html>
  );
}
