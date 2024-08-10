import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Card, CardContent } from "./_components/ui/card"

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
        {children}
        <footer>
          <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © 2023 Copyright <span className="font-bold">JN Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
      </body>
      <link rel="icon" href="./icon.png" />
    </html>
  )
}
