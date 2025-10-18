import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Ellipse3 from "./components/ui/Ellipse3";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DevFest Kocaeli 2025 - Teknoloji, İnovasyon ve Topluluk",
  description: "Google Developer Groups tarafından düzenlenen Kocaeli'nin en büyük teknoloji etkinliği. Modern teknolojiler, uzman konuşmacılar ve networking fırsatları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} antialiased relative min-h-screen bg-black`}
      >
        {/* Corner Blur Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Top Left Corner */}
          <div 
            className="absolute -top-96 -left-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(66, 133, 244, 0.4) 0%, rgba(66, 133, 244, 0.15) 30%, transparent 60%)',
              filter: 'blur(150px)',
            }}
          />
          
          {/* Top Right Corner */}
          <div 
            className="absolute -top-96 -right-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.35) 0%, rgba(138, 43, 226, 0.12) 30%, transparent 60%)',
              filter: 'blur(130px)',
            }}
          />
          
          {/* Bottom Left Corner */}
          <div 
            className="absolute -bottom-96 -left-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(75, 0, 130, 0.4) 0%, rgba(75, 0, 130, 0.15) 30%, transparent 60%)',
              filter: 'blur(140px)',
            }}
          />
          
          {/* Bottom Right Corner */}
          <div 
            className="absolute -bottom-96 -right-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(30, 144, 255, 0.3) 0%, rgba(30, 144, 255, 0.1) 30%, transparent 60%)',
              filter: 'blur(120px)',
            }}
          />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
