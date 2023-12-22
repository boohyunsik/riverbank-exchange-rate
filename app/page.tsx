"use client";
import React, {FormEvent, ReactElement, useEffect, useState} from "react";
import Script from "next/script";
import ExchangeRate from "@/app/pages/exchageRate";
import ExchangeMap from "@/app/pages/exchangeMap";
import {Wrapper} from "@googlemaps/react-wrapper/src";
import {Status} from "@googlemaps/react-wrapper";

export default function Home() {
  const [menu, setMenu] = useState(0);
  const onClickMenu = (item: number) => {
      setMenu(item);
  }

  const render = (status: Status): ReactElement => {
      if (status === Status.FAILURE) return <div>Error!</div>
      return <div>Loading...</div>
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
            <div className="fixed top-0 w-96">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="riverbank_logo_color.png" alt="riverbank_logo_color.png"/>
                    </div>
                    <div className="flex flex-row">
                        <div className="cursor-pointer" onClick={(e) => onClickMenu(0)}>Exchange rate</div>
                        <div className="w-4"></div>
                        <div className="cursor-pointer" onClick={(e) => onClickMenu(1)}>Location</div>
                    </div>
                </div>
            </div>
            {
                menu == 0 ? <ExchangeRate /> : <ExchangeMap />
            }
        </div>
  )
}
