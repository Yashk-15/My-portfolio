import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Yash Kaushik | Full Stack Developer",
  description:
    "Portfolio of Yash Kaushik — Full Stack Developer & AWS Certified Cloud Practitioner. Specializing in React, Next.js, and cloud technologies.",
  keywords: ["Yash Kaushik", "Full Stack Developer", "React", "Next.js", "AWS", "Portfolio"],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-anim-wrapper">
          <div className="bg-glow-teal" />
          <div className="bg-glow-blue" />
          <div className="bg-grid" />
        </div>

        {/* Main Content Wrapper */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
