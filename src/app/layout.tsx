import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rany Engenharia | Soluções em Projetos",
  description: "Soluções em Projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
