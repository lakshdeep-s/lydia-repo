import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import Navigation from "@/components/nav/Navigation";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Lydia | The App",
  description: "Developed for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
