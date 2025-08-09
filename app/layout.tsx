import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Attractions Thailand - สถานที่ท่องเที่ยวในไทย",
  description: "เว็บแสดงรายการสถานที่ท่องเที่ยวในประเทศไทย พร้อมรายละเอียดและภาพประกอบ",
  keywords: ["attractions", "thailand", "travel", "tourism", "สถานที่ท่องเที่ยว", "ไทย"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Attractions Thailand",
    description: "สถานที่ท่องเที่ยวในประเทศไทย",
    type: "website",
    locale: "th_TH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
