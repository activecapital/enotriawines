import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enotria — Members-Only Wine Community · San Antonio",
  description: "San Antonio's premier wine resource. Weekly tastings, wine events, home delivery, and a huge selection with a commitment to value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Libre+Baskerville:ital,wght@0,400;1,400&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
