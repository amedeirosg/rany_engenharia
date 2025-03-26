import type { Metadata } from "next";
import "./globals.css";
import GTM from "@/Components/GTM";

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
      <head></head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKVCZ8CG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GTM />
        {children}
      </body>
    </html>
  );
}
