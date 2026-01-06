import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "MeshMight - Consistent Cut. Every Time.",
  description: "Premium abrasives with consistent quality and value",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="antialiased">
        <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
