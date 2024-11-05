import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";

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
        className={`${inter.className} antialiased relative overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
