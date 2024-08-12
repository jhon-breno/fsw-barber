import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Card, CardContent } from "./_components/ui/card"
import { Toaster } from "./_components/ui/sonner"
import Footer from "./_components/footer"
import AuthProvider from "./_providers/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JN Barber",
  description: "Aplicação para barbearias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
      <link rel="icon" href="./icon.png" />
    </html>
  )
}
