import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Footer from "@/components/Footer"
import Link from "next/link"

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
             {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/573054384698"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="currentColor"
          role="img"
        >
          <title>WhatsApp</title>
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </Link>
        </div>
      </body>
    </html>
  )
}
