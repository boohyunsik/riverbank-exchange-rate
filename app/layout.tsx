import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riverbank - Korean exchange rate, Korean exchange location',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Riverbank Exchange" />
      <meta property="og:description" content="Check KRW exchange rate easily for traveling Korea!" />
      <meta name="description" content="Check KRW exchange rate easily for traveling Korea!" />
      <meta property="og:url" content="https://exchange.riverbank.world" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:locale" content="zn_CN" />
      <meta property="og:locale" content="zn_HK" />
      <meta property="og:locale" content="zn_MO" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content="https://riverbank-exchange.s3.ap-northeast-2.amazonaws.com/riverbank_logo_color_og.png" />
      <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCouOdyOcxG7pH4uuohbjIN6_q5zpaHwlk&callback=console.debug&libraries=maps,marker&v=beta">
      </script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
