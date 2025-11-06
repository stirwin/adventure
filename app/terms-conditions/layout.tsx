import type React from "react"
import Navbar from "@/components/NavbarNew"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative bg-transparent">
      <Navbar />
      <main className="">
        {children}
      </main>
    </div>
  )
}
