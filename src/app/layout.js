import "./globals.css";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${sora.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
