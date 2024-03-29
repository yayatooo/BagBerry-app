import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import ReactQueryClientProvider from "./provider/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bagberry",
  description: "E-Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
