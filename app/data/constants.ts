export interface Country {
    id: string;
    img: string;
    currencyUnit: string;
    originalCurrencyUnit: string;
    divideUnit: number;
}

export const countries: Country[] = [
    {
        id: 'US',
        img: 'us.png',
        currencyUnit: 'USD',
        originalCurrencyUnit: 'USD',
        divideUnit: 1,
    },
    {
        id: 'CHINA',
        img: 'china.png',
        currencyUnit: 'CNY',
        originalCurrencyUnit: 'CNY',
        divideUnit: 1,
    },
    {
        id: 'JAPAN',
        img: 'japan.png',
        currencyUnit: 'JPY',
        originalCurrencyUnit: 'JPY(100)',
        divideUnit: 100,
    },
    {
        id: 'VIETNAM',
        img: 'vietnam.png',
        currencyUnit: 'VND',
        originalCurrencyUnit: 'VND',
        divideUnit: 1,
    },
    {
        id: 'THAILAND',
        img: 'thailand.png',
        currencyUnit: 'THB',
        originalCurrencyUnit: 'THB',
        divideUnit: 1,
    },
    {
        id: 'EU',
        img: 'eu.png',
        currencyUnit: 'EUR',
        originalCurrencyUnit: 'EUR',
        divideUnit: 1,
    },
    {
        id: 'INDONESIA',
        img: 'indonesia.png',
        currencyUnit: 'IDR',
        originalCurrencyUnit: 'IDR(100)',
        divideUnit: 100,
    },
    {
        id: 'SINGAPORE',
        img: 'singapore.png',
        currencyUnit: 'SGD',
        originalCurrencyUnit: 'SGD',
        divideUnit: 1,
    },
    {
        id: 'TAIWAN',
        img: 'taiwan.png',
        currencyUnit: 'TWD',
        originalCurrencyUnit: 'TWD',
        divideUnit: 1,
    },
    {
        id: 'PHILIPPINES',
        img: 'philippines.png',
        currencyUnit: 'PHP',
        originalCurrencyUnit: 'PHP',
        divideUnit: 1,
    },
    {
        id: 'MALAYSIA',
        img: 'malaysia.png',
        currencyUnit: 'MYR',
        originalCurrencyUnit: 'MYR',
        divideUnit: 1
    },
    {
        id: 'HONGKONG',
        img: 'hongkong.png',
        currencyUnit: 'HKD',
        originalCurrencyUnit: 'HKD',
        divideUnit: 1,
    },
    {
        id: 'RUSSIA',
        img: 'russia.png',
        currencyUnit: 'RUB',
        originalCurrencyUnit: 'RUB',
        divideUnit: 1,
    }
];

export interface Price {
    id: string;
    icon: string;
    price: number;
}

export const prices: Price[] = [
    {
        id: 'chicken',
        icon: '🍗',
        price: 20000
    },
    {
        id: 'subway',
        icon: '🚇️',
        price: 1400
    },
    {
        id: 'bus',
        icon: '🚌',
        price: 1300
    },
    {
        id: 'hamburger',
        icon: '🍔',
        price: 8000
    },
    {
        id: 'hotel',
        icon: '🏨',
        price: 100000
    },
    {
        id: 'taxi',
        icon: '🚕',
        price: 4800
    },
    {
        id: 'restaurant',
        icon: '🍴',
        price: 10000
    }
];
