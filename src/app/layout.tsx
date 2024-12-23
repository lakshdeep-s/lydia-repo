import type { Metadata, Viewport} from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Cyclesync - Feel Better, Work Smarter, Live Healthier",
    template: "%s | Cyclesync"
  },
  description: "Cyclesync helps women track menstrual cycles, gain AI insights, and explore personalized fitness and nutrition for smarter period management",
  keywords:"menstual cycle tracker, women's health app, period tracker, nutrition, fitness, AI insights, lifestyle, cyclesync",
  authors: [{name: "Lakshdeep Singh", url: "https://www.linkedin.com/in/lakshdeepsingh2003"}, {name: "Kamatham Soujanya", url: "https://www.linkedin.com/in/kamatham-soujanya-linkdin"}],
  creator: "Cylesync Team",
  publisher: "Cyclesync",
  metadataBase: new URL('https://www.cyclesync.in'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  category: "Health & Fitness",
  verification: {
    google: "P_M_8FVsu3FK6y7cYPWw9vnVQBNOSiiMKrK2JOOdiA8"
  },
  alternates: {
    canonical: "https://www.cyclesync.in/"
  },

  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://www.cyclesync.in",
    title: "Cyclesync - AI-Powered Menstrual Cycle Tracking & Wellness",
    description: "Transform your health with personalized period tracking, AI insights, and wellness recommendations tailored to your cycle.",
    siteName: "Cyclesync",
    images: [
      {
        url: "/assets/ogimg.png",
        width: 1200,
        height: 630,
        alt: "Cyclesync - Women's Health & Wellness Platform"
      },
      {
        url: "/assets/ogimg-sq.png",
        width: 256,
        height: 256,
        alt: "Cyclesync - Women's Health & Wellness Platform"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
