import axios from "axios";
import {useEffect, useState} from "react";

export interface ExchangeMarket {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
}

export const useExchangeMarketList = () => {
    const [value, setValue] = useState<ExchangeMarket[]>([]);
    useEffect(() => {
        axios.get('https://60vwm9p5e9.execute-api.ap-northeast-2.amazonaws.com/Prod/exchangeMarket').then((req) => {
            const data = req.data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    address: item.address,
                    lat: item.lat,
                    lng: item.lng,
                }
            });
            setValue(data);
        })
    }, [])

    return [value];
}