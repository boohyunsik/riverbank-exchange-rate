"use client";
import {FormEvent, useEffect, useState} from "react";
import {ExchangeRate, getExchangeRate} from "@/app/data/getExchangeRate";
import {countries, Country, prices} from "@/app/data/constants";
import {Flag} from "@/app/component/flag";
import Script from "next/script";

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
      if (e.currentTarget.value.trim() === '') {
          setInputB('0.00');
      }
  })

  const handleInputBChange = ((e: FormEvent<HTMLInputElement>) => {
      setInputB(e.currentTarget.value);
  })

  const onClickCountry = (country: Country) => {
      setSelectedCountry(country);
  }

  const showCurrency = (country: Country) => {
      if (country.divideUnit == 100) {
          return '100';
      }

      return '1';
  }

  const calculateExchangeRate = (country: Country) => {
      const find = exchangeRates.find((item) => item.currency === country.currencyUnit);
      if (!find) {
          return '0';
      }
      return (find.krwStandard / find.value).toFixed(2);
  }

  const calculateExchangedAmount = (input: string, country: Country) => {
      if (input.trim() === '') {
          return '0.00';
      }
      const rate = calculateExchangeRate(country).replace(',', '');
      let result = (parseFloat(input) * parseFloat(rate))
      result = result / country.divideUnit;
      return result.toFixed(2);
  }

  return (
    <div id={"container"}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QQHRRJX8TE"></Script>
      <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QQHRRJX8TE');   
          `}
      </Script>
      <div id={"logo_container"}>
          <h1 id={"title"}>KRW exchange rate</h1>
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
              <img id={"country_img"} src={selectedCountry.img} alt={selectedCountry.img}/>
              <input id={"exchange_input"} type={"number"} value={inputA} onChange={handleInputAChange}/>
              <div><b>{ selectedCountry.currencyUnit }</b></div>
          </div>
          <div id={"exchange_input_container"}>
              <img id={"country_img"} src={"korea.png"} alt={"korea.png"}/>
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
