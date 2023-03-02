import React from "react";
import Link from "next/link";

export default function Footer(){

    return(
        <footer className="text-white bg-blue-900 py-12 flex justify-center items-center absolute bottom-0 w-screen">
            <a href="http://www.Ricochet.com"
                className="hover:opacity-90 hover:transition"
            >
                Ricochet
            </a>
        </footer>
    )
}