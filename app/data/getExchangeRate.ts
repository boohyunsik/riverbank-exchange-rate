import axios from "axios";

export interface ExchangeRate {
    currency: string;
    value: number;
    krwStandard: number;
}

export const getExchangeRate = async (): Promise<ExchangeRate[]> => {
    const request = await axios.get(`https://mqyzukd700.execute-api.ap-northeast-2.amazonaws.com/v1/rate`);
    const result = request.data.map((item: any) => {
        return {
            currency: item.currency,
            value: item.value,
            krwStandard: item.krwStandard
        }
    });
    console.log(`result`, result);
    return result;
}
