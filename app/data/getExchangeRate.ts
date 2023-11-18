import axios from "axios";

export interface ExchangeRate {
    currencyUnit: string; // cur_unit
    currencyName: string; // cur_nm
    receivingRate: string; // ttb
    sendingRate: string; // tts
    basicRate: string; // deal_bas_r
    bookPrice: string; // bkpr
    annualRateOfExchangeRate: string; // yy_efee_r
    tenDayExchangeRate: string; // ten_dd_efee_r
    kftcExchangeBaseRate: string; // kftc_deal_bas_r
    kftcBookPrice: string; //kftc_bkpr

}

export const getExchangeRate = async (): Promise<ExchangeRate[]> => {
    const request = await axios.get(`https://mqyzukd700.execute-api.ap-northeast-2.amazonaws.com/v1/exchangeRate`);
    return request.data.map((item: any) => {
        return {
            currencyUnit: item.cur_unit,
            currencyName: item.cur_nm,
            receivingRate: item.ttb,
            sendingRate: item.tts,
            basicRate: item.deal_bas_r,
            bookPrice: item.bkpr,
            annualRateOfExchangeRate: item.yy_efee_r,
            tenDayExchangeRate: item.ten_dd_efee_r,
            kftcExchangeBaseRate: item.kftc_deal_bas_r,
            kftcBookPrice: item.kftc_bkpr,
        }
    })
}
