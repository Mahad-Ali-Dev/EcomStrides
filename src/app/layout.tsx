import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | EcomStride Agency",
    default: "EcomStride – Amazon & eCommerce Service Agency",
  },
  description: "Scale your Amazon business with data-driven strategies. From product hunting to full account management, we help brands grow.",
  keywords: ["Amazon Agency", "FBA", "PPC", "Account Management", "EcomStride"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
