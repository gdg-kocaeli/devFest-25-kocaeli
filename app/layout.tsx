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
  keywords: ["DevFest", "Kocaeli", "GDG", "Google Developer Groups", "Teknoloji", "Yazılım", "Konferans", "2025"],
  authors: [{ name: "GDG Kocaeli" }],
  creator: "GDG Kocaeli",
  publisher: "GDG Kocaeli",
  metadataBase: new URL('https://devfest-kocaeli.com'),
  openGraph: {
    title: "DevFest Kocaeli 2025",
    description: "Google Developer Groups tarafından düzenlenen Kocaeli'nin en büyük teknoloji etkinliği",
    url: "https://devfest-kocaeli.com",
    siteName: "DevFest Kocaeli 2025",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Kocaeli 2025",
    description: "Google Developer Groups tarafından düzenlenen Kocaeli'nin en büyük teknoloji etkinliği",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute -top-96 -left-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(66, 133, 244, 0.4) 0%, rgba(66, 133, 244, 0.15) 30%, transparent 60%)',
              filter: 'blur(150px)',
            }}
          />
          
          <div 
            className="absolute -top-96 -right-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.35) 0%, rgba(138, 43, 226, 0.12) 30%, transparent 60%)',
              filter: 'blur(130px)',
            }}
          />
          
          <div 
            className="absolute -bottom-96 -left-96 w-192 h-192 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(75, 0, 130, 0.4) 0%, rgba(75, 0, 130, 0.15) 30%, transparent 60%)',
              filter: 'blur(140px)',
            }}
          />
          
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
