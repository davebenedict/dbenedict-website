import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benedict Business - Professional Services",
  description: "Professional business services and solutions",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
