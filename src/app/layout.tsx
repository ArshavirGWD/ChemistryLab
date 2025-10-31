import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/page";
export const metadata: Metadata = {
  title: "Chemistry Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/vazir-font/dist/font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body dir="rtl" style={{fontFamily : 'Vazir'}}>
        <main className="max-h-screen">
        <Navbar/>
          {children}</main>
      </body>
    </html>
  );
}
