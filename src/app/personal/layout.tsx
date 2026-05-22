import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Benedict - Personal Site",
  description: "Personal website and blog of David Benedict",
};

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
