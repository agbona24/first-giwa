import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import MobileActionBar from "@/components/layout/MobileActionBar";
import FloatingActionButton from "@/components/layout/FloatingActionButton";
import DesktopFloatingActions from "@/components/layout/DesktopFloatingActions";
import LiveChatWidget from "@/components/chat/LiveChatWidget";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";

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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "First-Giwa Feeds & Agro Tech Ltd",
    images: [
      {
        url: "/images/logo_new.png",
        width: 1200,
        height: 630,
        alt: "First-Giwa Feeds & Agro Tech Ltd",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Azeez Agbona - Harzotech" }],
  creator: "Azeez Agbona - Harzotech",
  other: {
    "developed-by": "Azeez Agbona - Harzotech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "First-Giwa Feeds & Agro Tech Ltd",
    url: "https://firstgiwa.com",
    telephone: ["+2347068964154", "+2347069716822", "+2347059867340", "+2348131949352"],
    email: "info@firstgiwa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Giwa Feedmill bus-stop Ikangba, Along Agoro Road",
      addressLocality: "Odogbolu",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    creator: {
      "@type": "Person",
      name: "Azeez Agbona",
      affiliation: "Harzotech",
      telephone: "+2347069716822",
      sameAs: "https://wa.me/2347069716822?text=Hi%20Harzotech%2C%20I%20saw%20a%20project%20you%20did%20for%20First-Giwa%20Feeds.%20I%20will%20like%20to%20discuss%20a%20project.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2347069716822",
        contactType: "technical support",
        availableLanguage: "English",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <MobileActionBar />
            <FloatingActionButton />
            <DesktopFloatingActions />
            <LiveChatWidget />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
