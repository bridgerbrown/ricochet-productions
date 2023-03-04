import React from "react";
import Link from "next/link";

export default function Navbar(){
    const navItemStyle: string = `text-slate-100 hover:transition hover:opacity-80 text-lg font-light tracking-wider font-sans`

    return(
        <nav className="px-8 flex justify-between items-center bg-slate-900 h-20 relative w-screen">
            <div>
                <h1 className="text-blue-300 text-2xl font-base tracking-wide">Ricochet Productions</h1>
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