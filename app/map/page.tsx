"use client";
import {useExchangeMarketList} from "@/app/hook/useExchangeMarketList";
import React, {useEffect} from "react";

const color = {
    'google-blue 100': `#4285F4`,
    'white 100': `rgb(255, 255, 255)`,
}

export default function Map() {
    const [marketList] = useExchangeMarketList();
    let map: google.maps.Map | null = null;
    useEffect(() => {
        const openedInfoWindow: any[] = [];
        const initMap = () => {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position);
                if (marketList.length > 0) {
                    map = new google.maps.Map(
                        document.getElementById('map') as HTMLElement,
                        {
                            zoom: 17,
                            center: {lat: position.coords.latitude, lng: position.coords.longitude},
                        }
                    );

                    const blueDot = {
                        fillColor: color['google-blue 100'],
                        fillOpacity: 1,
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        strokeColor: color['white 100'],
                        strokeWeight: 2,
                    };
                    const locationMarker = new google.maps.Marker({
                        icon: blueDot,
                        position: {lat: position.coords.latitude, lng: position.coords.longitude},
                        title: 'You are here!'
                    })
                    locationMarker.setMap(map);

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
            })
        };

        if (typeof google !== 'undefined') {
            initMap();
        }
    }, [marketList]);

    const setCenter = (lat: number, lng: number) => {
        if (map != null) {
            map.setCenter({
                lat: lat,
                lng: lng
            });
        }
    }

    const onClickMyLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setCenter(position.coords.latitude, position.coords.longitude);
        });
    }

    return (
        <div id={"container"} className="w-80 sm:w-96 mt-10">
            <meta name="description" content="Find korean exchange market location."/>
            <h1 id={"title"}>KRW exchange market location</h1>
            <h2>Find KRW exchange market in Korea!</h2>
            <div className={"h-4"}/>
            <div id={"map"} className={"w-full h-96 mb-4"}/>
            <div className="bg-[#004EE6] text-white font-bold pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer"
                 onClick={(e) => {
                     onClickMyLocation()
                 }}>My
                location
            </div>
        </div>
    )
}