import React, {useEffect} from "react";
import {useExchangeMarketList} from "@/app/hook/useExchangeMarketList";

const GoogleMap = () => {
    const [marketList] = useExchangeMarketList();
    console.log(marketList);
    useEffect(() => {
        const initMap = () => {
            const map = new google.maps.Map(
                document.getElementById('map') as HTMLElement,
                {
                    zoom: 17,
                    center: { lat: 37.5407622, lng: 127.0706095 },
                }
            );
            for (const market of marketList) {
                const marker = new google.maps.Marker({
                    map,
                    label: market.name,
                    position: new google.maps.LatLng(market.lat, market.lng)
                })
            }
        };

        if (typeof google !== 'undefined') {
            initMap();
        }
    }, []);
};
export default GoogleMap;