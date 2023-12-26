"use client";
import React, {useState} from "react";
import Script from "next/script";

export default function Home() {
    const [menu, setMenu] = useState(0);
    const onClickMenu = (item: number) => {
        setMenu(item);
    }

    return (
        <div>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QQHRRJX8TE"></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-QQHRRJX8TE');   
                `}
            </Script>
            <div
                className="flex flex-col w-full sm:w-96 items-center pt-20 bg-gradient-to-b from-[#DEFBFF] from-0% via-[#7BDDE3] via-61.46% to-[#1D86DC] to-100%">
                <div className="flex flex-col mt-20 mb-4">
                    <h1 className="text-4xl font-black">Riverbank</h1>
                    <h2 className="font-black">Online KRW exchange</h2>
                </div>
                <div className="w-full">
                    <img src="card.png" alt="card.png"/>
                </div>
                <div className="flex flex-col w-72 sm:w-96 p-8 bg-[#00beca] mb-4 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-3">Online currency exchange</h2>
                    <p>Don&apos;t wait in line at the currency exchange anymore. Use Riverbank for easy online currency
                        exchange and make your payment.</p>
                </div>
                <div className="flex flex-col w-72 sm:w-96 p-8 bg-[#2295FF] mb-4 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-3">Search Exchange rate easily</h2>
                    <p>You can search exchange rate in Riverbank!</p>
                </div>
                <div className="flex flex-col w-72 sm:w-96 p-8 bg-[#004EE6] mb-4 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-3">Find Exchange market location</h2>
                    <p>Find exchange market location!</p>
                </div>
            </div>
        </div>
    )
}
