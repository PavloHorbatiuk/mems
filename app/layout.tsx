import type { Metadata } from "next";

import "@/styles/globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Look mems",
  description: "mems prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
