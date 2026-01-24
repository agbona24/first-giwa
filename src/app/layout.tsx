import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstgiwa.com"),
  title: {
    default: "First-Giwa Feeds & Agro Tech Ltd | Premium Animal Feeds Nigeria",
    template: "%s | First-Giwa Feeds",
  },
  description:
    "Nigeria's trusted supplier of premium animal feeds, raw ingredients, and agro solutions for poultry farms, fish farms, and livestock operations in Ogun State.",
  keywords: [
    "animal feeds Nigeria",
    "poultry feed",
    "fish feed",
    "livestock feed",
    "agribusiness Nigeria",
    "feed supplier Ogun State",
    "First-Giwa Feeds",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "First-Giwa Feeds & Agro Tech Ltd",
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
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
