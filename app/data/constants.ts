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
        currencyUnit: 'CNH',
        originalCurrencyUnit: 'CHN',
        divideUnit: 1,
    },
    {
        id: 'JAPAN',
        img: 'japan.png',
        currencyUnit: 'JPY',
        originalCurrencyUnit: 'JPY(100)',
        divideUnit: 100,
    },
    // {
    //     id: 'VIETNAM',
    //     img: 'vietnam.png',
    //     currencyUnit: ''
    // },
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
    }
    // {
    //     id: 'TAIWAN',
    //     img: 'taiwan.png',
    //     currencyUnit: ''
    // }
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
