import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { NextUIProvider, cn } from "@nextui-org/react"
import { ReactQueryProvider } from "@providers/react-query"
import { ModalProvider } from "@providers/modal"

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
      <body className={cn([roboto.className, "bg-stone-700"])}>
        <NextUIProvider>
          <ReactQueryProvider>
            <ModalProvider>{children}</ModalProvider>
          </ReactQueryProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
