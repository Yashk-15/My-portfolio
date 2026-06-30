import "./globals.css";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
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

// Inline script: runs synchronously before the first paint.
// Reads localStorage / system preference and sets data-theme on <html>
// so CSS variables are correct from the very first pixel — no layout shift,
// no blank screen, no flash of wrong theme.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: data-theme is set by the inline script before
    // React hydrates, so the attribute will differ from the SSR default — this
    // suppresses the harmless mismatch warning.
    <html lang="en" className={`${sora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
