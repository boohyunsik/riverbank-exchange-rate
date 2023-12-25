"use client";
import React, {FormEvent, ReactElement, useEffect, useState} from "react";
import Script from "next/script";
import Rate from "@/app/rate/page";
import Map from "@/app/map/page";
import {Wrapper} from "@googlemaps/react-wrapper/src";
import {Status} from "@googlemaps/react-wrapper";
import Link from "next/link";

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
        </div>
  )
}
