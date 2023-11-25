import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Korean exchange rate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Riverbank Exchange" />
      <meta property="og:description" content="Check KRW exchange rate easy!" />
      <meta property="og:image" content="https://riverbank-exchange.s3.ap-northeast-2.amazonaws.com/riverbank_logo_color_og.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
