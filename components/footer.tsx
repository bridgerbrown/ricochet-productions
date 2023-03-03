import React from "react";
import Link from "next/link";

export default function Footer(){

    return(
        <footer className="text-slate-900 font-semibold tracking-wide text-lg bg-gray-300 py-16 flex justify-center items-center absolute bottom-0 w-screen">
            <a href="http://www.Ricochet.com"
                className="hover:opacity-90 hover:transition"
            >
                Ricochet
            </a>
        </footer>
    )
}