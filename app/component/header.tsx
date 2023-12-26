import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed xs:left-0 top-0 w-80 sm:w-96">
            <div className="flex w-full justify-between items-center">
                <div>
                    <Link href="/">
                        <img className="w-28 sm:w-32" src="riverbank_logo_color.png" alt="riverbank_logo_color.png"/>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <Link className="font-black" href="/rate">Exchange Rate</Link>
                    <div className="w-4"></div>
                    <Link className="font-black" href="/map">Location</Link>
                </div>
            </div>
        </div>
    )
}