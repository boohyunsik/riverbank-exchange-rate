"use client";
import {FormEvent, useEffect, useState} from "react";
import {ExchangeRate, getExchangeRate} from "@/app/data/getExchangeRate";
import {countries, Country, prices} from "@/app/data/constants";
import {Flag} from "@/app/component/flag";

export default function Home() {
  const [inputA, setInputA] = useState(`0`);
  const [inputB, setInputB] = useState(`0`);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  useEffect(() => {
      getExchangeRate().then((r) => {
          setExchangeRates(r);
      })
  }, [])

  const handleInputAChange = ((e: FormEvent<HTMLInputElement>) => {
      setInputA(e.currentTarget.value);
  })

  const handleInputBChange = ((e: FormEvent<HTMLInputElement>) => {
      setInputB(e.currentTarget.value);
  })

  const onClickCountry = (country: Country) => {
      console.log(`onClickCountry: ${country}`);
      setSelectedCountry(country);
  }

  const showCurrency = (country: Country) => {
      console.log(`showCurrency`, country);
      if (country.divideUnit == 100) {
          return '100';
      }

      return '1';
  }

  const calculateExchangeRate = (country: Country) => {
      console.log(`calculateExchangeRate`, country);
      const find = exchangeRates.find((item) => item.currencyUnit === country.originalCurrencyUnit);
      if (find == null) {
          return '0';
      }
      return find.sendingRate;
  }

  const calculateExchangedAmount = (input: string, country: Country) => {
      const rate = calculateExchangeRate(country).replace(',', '');
      let result = (parseFloat(input) * parseFloat(rate))
      result = result / country.divideUnit;
      return result.toFixed(2);
  }

  return (
    <div id={"container"}>
      <div id={"logo_container"}>
          <div id={"title"}>Korean exchange rate</div>
      </div>
      <div id={"main_container"}>
          <div id={"country_container"}>
              {
                  countries.map((country) => {
                      return (
                          <Flag key={country.id}
                                id={"country_img"}
                                src={country.img}
                                name={country.currencyUnit}
                                onClick={event => onClickCountry(country)} />
                      )
                  })
              }
          </div>
          <div id={"exchange_input_container"}>
              <img id={"country_img"} src={selectedCountry.img}/>
              <input id={"exchange_input"} type={"number"} value={inputA} onChange={handleInputAChange}/>
              <div><b>{ selectedCountry.currencyUnit }</b></div>
          </div>
          <div id={"exchange_input_container"}>
              <img id={"country_img"} src={"korea.png"}/>
              <input id={"exchange_input"} value={calculateExchangedAmount(inputA, selectedCountry)} onChange={handleInputBChange}/>
              <div><b>KRW</b></div>
          </div>
          <div id={"exchange_rate_container"}>
              {/*<div id={"refresh_exchange_rate"} onClick={event => refreshExchangeRate()}>*/}
              {/*    <img id={"refresh_icon"} src={"refresh.png"}/>*/}
              {/*    Refresh exchange rate*/}
              {/*</div>*/}
              <div id={"exchange_rate_text"}>
                  <b>Rate</b> {showCurrency(selectedCountry)} {selectedCountry.currencyUnit.split('(')[0]} = {calculateExchangeRate(selectedCountry)} KRW
              </div>
          </div>
      </div>
      <div id={"price_title"}>Price in Korea</div>
      <div id={"price_container"}>
          {
              prices.map((price) => {
                  return (
                      <div key={price.id} id={"price_component"}>{`${price.icon} ₩ ${price.price.toLocaleString('kr-KR')}`}</div>
                  )
              })
          }
      </div>
      <div>
          <img id={"logo"} src={"riverbank_logo_color.png"}/>
      </div>

    </div>
  )
}
