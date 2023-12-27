import React from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-[#1D86DC] flex justify-center">
            <div
                className="container lg bg-[#1D86DC] flex flex-row justify-center md:items-center pb-16 md:pb-32">
                <div className="flex sm:flex-row flex-col items-start md:items-center">
                    <img className="w-24 h-auto md:w-36 md:h-auto mr-2" src={"riverbank_logo_color.png"}
                         alt={"riverbank_logo_color.png"}/>
                    <p className="w-auto text-xs sm:text-lg text-black">©Copyright 2003 All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}
