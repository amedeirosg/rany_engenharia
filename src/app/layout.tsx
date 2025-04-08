import type { Metadata } from "next";
import "./globals.css";
import GTM from "@/Components/GTM";
import NavBar from "@/Components/navBar/navbar";
import Customers from "@/Components/customers/customers";
import Certifications from "@/Components/certifications/certifications";
import Contact from "@/Components/contact/contact";
import Footer from "@/Components/footer/footer";
import WppIco from "@/Components/wppIco/wppico";

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
      <head>
        <meta
          name="facebook-domain-verification"
          content="t99klkntvep3i50rm78gzm70598hob"
        />
      </head>
      <body className=" bg-[#FBFAFB]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKVCZ8CG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GTM />
        <NavBar />
        {children}
        <Customers />
        <Certifications />
        <Contact />
        <Footer />
        <WppIco />
      </body>
    </html>
  );
}
