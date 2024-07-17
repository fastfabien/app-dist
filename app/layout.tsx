import { Header } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "API Distrib",
  description: "Lorem ipsum gran van leison",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-2xl my-0 mx-auto`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
