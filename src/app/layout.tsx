import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vandhuy Martins | Frontend Engineer Portfolio",
  description:
    "Explore the portfolio of Vandhuy Martins, a passionate frontend engineer specializing in crafting dynamic, responsive, and user-friendly web applications. Discover my skills, projects, and experience.",
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
