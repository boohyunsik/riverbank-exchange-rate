"use client";
import React, {useState} from "react";
import Script from "next/script";
import Footer from "@/app/component/footer";
import GetYourCard from "@/app/component/getYourCard";
import Marquee from "react-fast-marquee";

export default function Home() {
    const [menu, setMenu] = useState(0);
    const onClickMenu = (item: number) => {
        setMenu(item);
    }

    return (
        <div
            className="w-full bg-gradient-to-b from-[#DEFBFF] from-0% via-[#7BDDE3] via-61.46% to-[#1D86DC] to-100%">
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
                    <h1 className="text-4xl sm:text-6xl font-black mb-2">Riverbank</h1>
                    <h2 className="sm:text-xl font-black">Prepare everything for traveling Korea!</h2>
                </div>
                <div className="flex flex-col items-center mb-4 text-center">
                    <a href="https://exchange.riverbank.world" target="_blank" rel="noreferrer">
                        <button
                            className="flex flex-row items-center shadow-2xl rounded-lg bg-[#2295FF] hover:bg-[#004EE6] text-white px-4 py-4 text-2xl font-extrabold mx-4">
                            Apply
                            uncontact
                            KRW
                            exchange NOW!
                            <img className="ml-2 stroke-white" src="point.svg"/>
                        </button>
                    </a>
                </div>
                <div className="max-w-5xl">
                    <img className="container md" src="card.png" alt="card.png"/>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#00beca] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Currency Exchange</h2>
                        <p>Looking for a currency exchange?<br/>Waiting in line at the exchange office?<br/>Spending
                            hours
                            comparing the best exchange rates?<br/><br/>Now you don&apos;t have to. Experience
                            contactless
                            currency exchange at the best rates with Riverbank.
                        </p>
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#2295FF] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Prepare E-SIM</h2>
                        <p>By using an E-SIM, you can access mobile internet in Korea with just a QR scan, without the need to wait at the airport.</p>
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#004EE6] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Transportation and T-money</h2>
                        <p>Enjoy all of South Korea&apos;s mobility with a single card. Buses, subways, and taxis. No
                            need to find a kiosk to top up your transportation card - do it from the comfort of your
                            app. Having trouble booking a train? Riverbank&apos;s AI assistant is here to help.</p>
                    </div>
                </div>
            </div>

            <div className="container lg mx-auto flex flex-col items-center pt-20 mb-10">
                <h1 className="text-3xl sm:text-5xl font-black mb-10">How to use Riverbank exchange?</h1>
                <div
                    className="min-w-72 w-full max-w-xl flex flex-row justify-between bg-white rounded-lg pl-6 pt-4 pb-4 shadow-md mb-4">
                    <div className="flex flex-col pt-2">
                        <div className="flex flex-row pb-8">
                            <div className="rounded-full bg-[#6c4abc] text-white px-2 mr-2">1</div>
                            <p className="text-[#6c4abc] font-bold">Exchange</p>
                        </div>
                        <p className="font-bold text-lg">Press the currency exchange button.</p>
                    </div>
                    <img src="how_to_use_asset1.png" alt="how_to_use_asset1.png" width={219} height={176}/>
                </div>
                <div
                    className="min-w-72 w-full max-w-xl flex flex-row justify-between bg-white rounded-lg pl-6 pt-4 pb-4 shadow-md mb-4">
                    <div className="flex flex-col pt-2">
                        <div className="flex flex-row pb-8">
                            <div className="rounded-full bg-[#6c4abc] text-white px-2 mr-2">2</div>
                            <p className="text-[#6c4abc] font-bold">Information</p>
                        </div>
                        <p className="font-bold text-lg">Information required for currency exchange.</p>
                    </div>
                    <img src="how_to_use_asset2.png" alt="how_to_use_asset2.png" width={219} height={176}/>
                </div>
                <div
                    className="min-w-72 w-full max-w-xl flex flex-row justify-between bg-white rounded-lg pl-6 pt-4 pb-4 shadow-md mb-4">
                    <div className="flex flex-col pt-2">
                        <div className="flex flex-row pb-8">
                            <div className="rounded-full bg-[#6c4abc] text-white px-2 mr-2">3</div>
                            <p className="text-[#6c4abc] font-bold">Waiting for pickup</p>
                        </div>
                        <p className="font-bold text-lg">Please be at the agreed pickup location.</p>
                    </div>
                    <img src="how_to_use_asset3.png" alt="how_to_use_asset3.png" width={219} height={176}/>
                </div>
                <div
                    className="min-w-72 w-full max-w-xl flex flex-row justify-between bg-white rounded-lg pl-6 pt-4 pb-4 shadow-md">
                    <div className="flex flex-col pt-2">
                        <div className="flex flex-row pb-8">
                            <div className="rounded-full bg-[#6c4abc] text-white px-2 mr-2">4</div>
                            <p className="text-[#6c4abc] font-bold">Perfect currency exchange</p>
                        </div>
                        <p className="font-bold text-lg">Exchange money safely and quickly</p>
                    </div>
                    <img src="how_to_use_asset4.png" alt="how_to_use_asset4.png" width={219} height={176}/>
                </div>
            </div>

            <div className="container lg mx-auto flex flex-col items-center pt-20 mb-20">
                <h1 className="text-3xl sm:text-5xl font-black mb-10">Why Riverbank prepaid card?</h1>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#00beca] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Safe and Security</h2>
                        <p className="text-sm sm:text-lg">Our card offers secure transactions and peace of mind for your
                            travel expenses.</p>
                        {/*<p className="text-sm sm:text-lg">We are going to one-stop online*/}
                        {/*    bank.</p>*/}
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#2295FF] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">Wide Acceptance</h2>
                        <p className="text-sm sm:text-lg">Accepted at a variety of establishments, ensuring you can use
                            it almost anywhere.</p>
                        {/*<p className="text-sm sm:text-lg">We are going to one-stop online*/}
                        {/*    bank.</p>*/}
                    </div>
                </div>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#004EE6] mb-4 rounded-lg text-white">
                        <h2 className="text-2xl font-bold mb-3">24/7 Support</h2>
                        <p className="text-sm sm:text-lg">Customer support available around the clock to assist you.</p>
                        {/*<p className="text-sm sm:text-lg">We are going to one-stop online*/}
                        {/*    bank.</p>*/}
                    </div>
                </div>
            </div>
            <Marquee className="w-full bg-gradient-to-r from-[#1B67FF] from-0% to-[#00B3F2] to-100% py-1.5 md:py-3">
                <GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/><GetYourCard/>
            </Marquee>

            <div className="container lg mx-auto flex flex-col items-center mb-40">
                <h2 className="text-3xl sm:text-5xl font-black mt-12 mb-10">FAQ</h2>
                <div className="min-w-72 w-full max-w-xl pr-2 pl-2">
                    <div className="flex flex-col w-full p-8 bg-[#004EE6] mb-4 rounded-lg text-white">
                        <p className="text-2xl font-black text-white mb-2">How does the Riverbank Prepaid Card Work?</p>
                        <p className="text-lg text-white mb-12">It&apos;s just like a regular debit card. The only
                            difference is that you can load, exchange, and make payments all from the app.</p>
                        <p className="text-2xl font-black text-white mb-2">How can I get a Riverbank Prepaid Card?</p>
                        <p className="text-lg text-white mb-12">Sign up for the pre-registration and we would
                            contact you right after release.</p>
                        <p className="text-2xl font-black text-white mb-2">What currencies will I load onto the
                            card?</p>
                        <p className="text-lg text-white mb-12">We plan to prioritize USD, CNY, JPY, TWD, CAD, EUR, HKD,
                            SGD and VND, and will work quickly to support all currencies.</p>
                        <p className="text-2xl font-black text-white mb-2">Can I use the card for online purchase?</p>
                        <p className="text-lg text-white mb-12">Online purchasing is an import part of our roadmap.</p>
                        <p className="text-2xl font-black text-white mb-2">Can I use the card outside of Korea?</p>
                        <p className="text-lg text-white">For now, it&apos;s not going to be possible with this
                            card.
                            However, there are long-term plans to partner with Visa and Mastercard to create a globally
                            accepted card.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
