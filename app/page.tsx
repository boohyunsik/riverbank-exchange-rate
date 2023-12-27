"use client";
import React, {useState} from "react";
import Script from "next/script";

export default function Home() {
    const [menu, setMenu] = useState(0);
    const onClickMenu = (item: number) => {
        setMenu(item);
    }

    return (
        <div className="w-full bg-gradient-to-b from-[#DEFBFF] from-0% via-[#7BDDE3] via-61.46% to-[#1D86DC] to-100%">
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
                className="container lg mx-auto flex flex-col items-center pt-40">
                <div className="flex flex-col mb-4 text-center">
                    <h1 className="text-4xl sm:text-6xl font-black">Riverbank</h1>
                    <h2 className="sm:text-xl font-black">Online KRW exchange & prepaid card</h2>
                </div>
                <div className="max-w-5xl">
                    <img className="container md" src="card.png" alt="card.png"/>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#00beca] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Online currency exchange</h2>
                        <p>Don&apos;t wait in line at the currency exchange anymore. Use Riverbank for easy online
                            currency
                            exchange and make your payment.</p>
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#2295FF] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Use KRW prepaid card!</h2>
                        <p>Conveniently top up and make payments using credit cards and various mobile payment
                            services!</p>
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#004EE6] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Search Exchange rate easily</h2>
                        <p>You can search exchange rate and market location in Riverbank!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
