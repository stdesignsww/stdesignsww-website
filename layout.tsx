import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STdesignsww | Custom Apparel & Branding",
  description:
    "Custom apparel, business uniforms, promotional merchandise, and branding mockups by STdesignsww.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
