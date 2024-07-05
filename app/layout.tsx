import type { Metadata } from "next"
import { Header } from "@/_components/header"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  style: "normal",
  preload: true,
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Buy Beaver",
  description: "Bookkeeping"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
