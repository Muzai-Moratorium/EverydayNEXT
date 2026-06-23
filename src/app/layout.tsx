import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday Next - Daily Code Specimen",
  description:
    "Everyday Next is a digital specimen archiving 30 minutes of daily coding exercises built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
