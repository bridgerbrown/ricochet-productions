import React from "react";
import Link from "next/link";

export default function Navbar(){
    const navItemStyle: string = `hover:transition hover:opacity-80 text-lg font-semibold tracking-wider font-sans`

    return(
        <nav className="px-8 text-slate-800 flex justify-between items-center bg-gray-300 h-24 relative w-screen">
            <div>
                <h1 className="text-2xl font-bold tracking-wide">Ricochet Productions</h1>
            </div>
            <div className="flex space-x-4">
                <Link href="/" className={navItemStyle}>
                    Home
                </Link>
                <Link href="/" className={navItemStyle}>
                    About
                </Link>
                <Link href="/" className={navItemStyle}>
                    Our team
                </Link>
                <Link href="/" className={navItemStyle}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}