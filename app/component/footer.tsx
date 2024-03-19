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
                <p>사업자 등록번호 : 601-86-03065</p>
                <p>대표자명 : 성종헌</p>
                <p>서울특별시 강남구 강남대로112길 47, 2층-에이 1602호(논현동)</p>
                <p>대표번호 : 010-2003-3870</p>
            </div>
        </div>
    )
}
