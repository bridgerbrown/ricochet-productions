import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    const navItemStyle: string = `text-slate-100 hover:transition hover:opacity-80 text-lg font-light tracking-wider font-sans`

    return(
        <nav id="navbar" className="pr-8 flex justify-between items-center bg-slate-900 h-20 relative w-screen">
            <div className="w-96">
                <Image
                    src="/logo.png"
                    width={3374}
                    height={829}
                    alt="ricochet productions logo"
                    className="w-11/12"
                />
                {/* <h1 className="text-blue-300 text-2xl font-base tracking-wide">Ricochet Productions</h1> */}
            </div>
            <div className="flex space-x-4">
                <a href="#navbar" className={navItemStyle}>
                    Home
                </a>
                <a href="#about" className={navItemStyle}>
                    About
                </a>
                <a href="#podcasts" className={navItemStyle}>
                    Podcasts
                </a>
                <a href="#team" className={navItemStyle}>
                    Team
                </a>
                <a href="#contact" className={navItemStyle}>
                    Contact
                </a>
            </div>
        </nav>
    )
}