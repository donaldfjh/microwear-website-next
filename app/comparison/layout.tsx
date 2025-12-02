import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Products - MicroWear Smartwatches",
  description:
    "Compare up to 3 MicroWear smartwatches side by side. View detailed specifications, features, and pricing to find the perfect smartwatch for your needs.",
  openGraph: {
    title: "Compare Products - MicroWear Smartwatches",
    description:
      "Compare up to 3 MicroWear smartwatches side by side. View detailed specifications, features, and pricing to find the perfect smartwatch for your needs.",
  },
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
