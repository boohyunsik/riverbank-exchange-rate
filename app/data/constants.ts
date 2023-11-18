export interface Country {
    id: string;
    img: string;
    currencyUnit: string;
}

export const countries: Country[] = [
    {
        id: 'US',
        img: 'us.png',
        currencyUnit: 'USD',
    },
    {
        id: 'CHINA',
        img: 'china.png',
        currencyUnit: 'CNH'
    },
    {
        id: 'JAPAN',
        img: 'japan.png',
        currencyUnit: 'JPY(100)'
    },
    // {
    //     id: 'VIETNAM',
    //     img: 'vietnam.png',
    //     currencyUnit: ''
    // },
    {
        id: 'THAILAND',
        img: 'thailand.png',
        currencyUnit: 'THB'
    },
    {
        id: 'EU',
        img: 'eu.png',
        currencyUnit: 'EUR'
    },
    {
        id: 'INDONESIA',
        img: 'indonesia.png',
        currencyUnit: 'IDR(100)'
    },
    {
        id: 'SINGAPORE',
        img: 'singapore.png',
        currencyUnit: 'SGD'
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
