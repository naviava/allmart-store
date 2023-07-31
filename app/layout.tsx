import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// Components.
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Providers.
import ModalProvider from "@/providers/modal-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to AllMart",
  description: "Shop till you drop!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
