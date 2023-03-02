import React from "react";
import Link from "next/link";

export default function Navbar(){
    const navItemStyle: string = `hover:transition hover:opacity-80 text-lg font-sans`

    return(
        <nav className="px-8 font-serif text-white flex justify-between items-center bg-blue-900 h-24 relative w-screen">
            <div>
                <h1 className="text-2xl">Ricochet Productions</h1>
            </div>
            <div className="flex space-x-4">
                <Link href="/" className={navItemStyle}>
                    Home
                </Link>
                <Link href="/" className={navItemStyle}>
                    Mission
                </Link>
                <Link href="/" className={navItemStyle}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}