import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/app/component/header";

const inter = Inter({subsets: ['latin']})

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
        <meta property="og:title" content="Riverbank - Korea money exchange"/>
        <meta property="og:description"
              content="Non-face-to-face korea money exchange. Pay, use t-money in korea with Riverbank card and save your korea trip budget!"/>
        <meta name="description"
              content="Online KRW exchange. Buy/sell KRW, find exchange rate, and find exchange market location in Korea."/>
        <meta property="og:url" content="https://www.riverbank.world"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:locale" content="ko_KR"/>
        <meta property="og:locale" content="vi_VN"/>
        <meta property="og:locale" content="zn_CN"/>
        <meta property="og:locale" content="zn_HK"/>
        <meta property="og:locale" content="zn_MO"/>
        <meta property="og:locale" content="ja_JP"/>
        <meta property="og:image"
              content="https://riverbank-exchange.s3.ap-northeast-2.amazonaws.com/riverbank_logo_color_og.png"/>
        {/*<link rel="canonical" href="https://www.riverbank.world"/>*/}
        <meta name="facebook-domain-verification" content="fnr755kdfj9dtaokhqsz5xeel2kb3l" />
        <link rel="icon" href="/app/favicon.ico"/>
        <script async
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCouOdyOcxG7pH4uuohbjIN6_q5zpaHwlk&callback=console.debug&libraries=maps,marker&v=beta">
        </script>
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
