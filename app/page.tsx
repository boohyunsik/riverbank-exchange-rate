"use client";
import React, {useState} from "react";
import Script from "next/script";
import Marquee from "react-fast-marquee";
import GetYourCard from "@/app/component/getYourCard";

export default function Home() {
    const [menu, setMenu] = useState(0);
    const onClickMenu = (item: number) => {
        setMenu(item);
    }

    return (
        <div
            className="w-full bg-gradient-to-b from-[#DEFBFF] from-0% via-[#7BDDE3] via-61.46% to-[#1D86DC] to-100% pb-20">
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

            <Marquee className="w-full bg-gradient-to-r from-[#1B67FF] from-0% to-[#00B3F2] to-100% py-1.5 md:py-3">
                <GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/>
            </Marquee>

            <div className="container lg mx-auto flex flex-col items-center pt-20 mb-20">
                <h1 className="text-3xl sm:text-5xl font-black mb-10">What is Riverbank?</h1>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#00beca] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Riverbank is KRW online exchange
                            service.</h2>
                        <p className="text-sm sm:text-lg">You can buy KRW with USD, JPY(YEN),
                            CPY(YUAN),
                            EUR,
                            VND,
                            etc...</p>
                        <p className="text-sm sm:text-lg">We are going to one-stop online
                            bank.</p>
                    </div>
                </div>
            </div>

            <div className="container lg mx-auto flex flex-col items-center">
                <h2 className="text-3xl sm:text-5xl font-black mb-10">Roadmap</h2>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#2295FF] mb-4 rounded-lg text-white">
                        <p className="text-2xl font-black text-white mb-2">2024 Q1</p>
                        <p className="text-lg mb-5 text-white mb-8">Open online KRW exchange service</p>
                        <p className="text-2xl font-black text-white mb-2">2024 Q4</p>
                        <p className="text-lg mb-5 text-white mb-8">Open KRW prepaid card service</p>
                        <p className="text-2xl font-black text-white mb-2">2025</p>
                        <p className="text-lg text-white">Open VISA/mastercard service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}