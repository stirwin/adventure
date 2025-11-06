import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Footer from "@/components/Footer"
import TermsBanner from "@/components/TermsBanner"

export const metadata: Metadata = {
  title: "Adventure by Colombia - Luxury Tourism in Cartagena | Yacht Rentals & Colonial Villas",
  description:
    "Experience timeless luxury in Cartagena with Adventure by Colombia. Premium yacht rentals, colonial house stays, luxury villas, and personalized travel experiences in Colombia's most beautiful destinations.",
  keywords:
    "Cartagena tourism, luxury travel Colombia, yacht rentals Cartagena, colonial houses, luxury villas, boat rentals, travel packages Colombia, Rosario Islands, Tayrona Park",
  authors: [{ name: "Adventure by Colombia" }],
  creator: "Adventure by Colombia",
  publisher: "Adventure by Colombia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adventurebycolombia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adventure by Colombia - Luxury Tourism in Cartagena",
    description:
      "Experience timeless luxury in Cartagena with premium yacht rentals, colonial villas, and personalized travel experiences.",
    url: "https://adventurebycolombia.com",
    siteName: "Adventure by Colombia",
    images: [
      {
        url: "/images/tropical-beach.webp",
        width: 1200,
        height: 630,
        alt: "Luxury beach resort in Cartagena, Colombia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure by Colombia - Luxury Tourism in Cartagena",
    description: "Experience timeless luxury in Cartagena with premium yacht rentals and colonial villas.",
    images: ["/images/tropical-beach.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
       
            {children}
          
          <Footer />
          <TermsBanner />
        </div>
      </body>
    </html>
  )
}
