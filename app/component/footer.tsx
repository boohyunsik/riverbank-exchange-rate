import React from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-[#1D86DC] flex justify-center">
            <div
                className="container lg bg-[#1D86DC] flex flex-col justify-center md:items-center pt-16 mb-16 md:mb-32">
                <div className="flex sm:flex-row flex-col items-start md:items-center">
                    <img className="w-24 h-auto md:w-36 md:h-auto mr-2" src={"riverbank_logo_color.png"}
                         alt={"riverbank_logo_color.png"}/>
                    <p className="w-auto text-xs sm:text-lg text-black">©Copyright 2003 All Right Reserved.</p>
                </div>
                <p>Business registration number : 601-86-03065</p>
                <p>Representative : Jongheon Sung</p>
                <p>2F-A 1602Ho, 47, Gangnam-daero 112-gil, Gangnam-gu, Seoul</p>
                <p>Phone : +82-10-2003-3870</p>
            </div>
        </div>
    )
}
