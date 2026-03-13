import "./globals.css";

export const metadata = {
  title: "Yash Kaushik | Full Stack Developer",
  description:
    "Portfolio of Yash Kaushik — Full Stack Developer & AWS Certified Cloud Practitioner. Specializing in React, Next.js, and cloud technologies.",
  keywords: ["Yash Kaushik", "Full Stack Developer", "React", "Next.js", "AWS", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
