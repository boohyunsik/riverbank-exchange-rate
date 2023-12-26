"use client";
import {useExchangeMarketList} from "@/app/hook/useExchangeMarketList";
import React, {useEffect} from "react";

export default function Map() {
    const [marketList] = useExchangeMarketList();
    console.log(marketList);
    useEffect(() => {
        const openedInfoWindow: any[] = [];
        const initMap = () => {
            const map = new google.maps.Map(
                document.getElementById('map') as HTMLElement,
                {
                    zoom: 17,
                    center: {lat: 37.56674575805664, lng: 126.97835540771484},
                }
            );
            if (marketList.length > 0) {
                for (const market of marketList) {
                    const marker = new google.maps.Marker({
                        map,
                        position: new google.maps.LatLng(market.lat, market.lng)
                    })

                    const infoWindow = new google.maps.InfoWindow({
                        content: `${market.name} - ${market.address}`
                    });
                    marker.addListener('click', () => {
                        openedInfoWindow.forEach((window) => window.close());
                        infoWindow.open(map, marker);
                        openedInfoWindow.push(infoWindow);
                    })
                }
            }
        };

        if (typeof google !== 'undefined') {
            initMap();
        }
    }, [marketList]);

    return (
        <div id={"container"} className={"w-96 h-full"}>
            <meta name="description" content="Find korean exchange market location."/>
            <h1 id={"title"}>KRW exchange market location</h1>
            <h2>Find KRW exchange market in Korea easily!</h2>
            <div className={"h-4"}/>
            <div id={"map"} className={"w-full h-96"}/>
            <div>My location</div>
        </div>
    )
}