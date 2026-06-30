import "./globals.css";
import { Geist, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata = {
  title: "Yash Kaushik | Full Stack Developer",
  description:
    "Portfolio of Yash Kaushik — Full Stack Developer & AWS Certified Cloud Practitioner. Specializing in React, Next.js, and cloud technologies.",
  keywords: ["Yash Kaushik", "Full Stack Developer", "React", "Next.js", "AWS", "Portfolio"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
