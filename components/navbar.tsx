import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    const navItemStyle: string = `text-slate-100 hover:transition hover:opacity-80 text-base md:text-lg font-light tracking-wider font-sans`
    const burgerItemStyle: string = "w-full text-center text-2xl font-light tracking-wide active:bg-white/10 transition border-transparent border hover:bg-slate-800 hover:transition px-7 py-5"
    const [backdropMenu, setBackdropMenu] = useState<boolean>(false)

    const backdropToggle = () => {
        setBackdropMenu(!backdropMenu)
    }

    return(
        <div>
            <nav id="navbar" className="pr-8 flex justify-between items-center bg-slate-900 h-20 relative w-screen">
                <div className="w-96">
                    <Image
                        src="/logo.png"
                        width={3374}
                        height={829}
                        alt="ricochet productions logo"
                        className="w-10/12"
                    />
                    {/* <h1 className="text-blue-300 text-2xl font-base tracking-wide">Ricochet Productions</h1> */}
                </div>
                <div className="hidden sm:flex mt-2 space-x-4">
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
                {
                            backdropMenu ?
                            <div className='p-6 absolute sm:hidden top-2 right-4'>
                                <Image
                                    src="/x-icon.png"
                                    width={200}
                                    height={200}
                                    alt="exit out of nav menu"
                                    className='cursor-pointer h-7 w-7'
                                    id='burger-close'
                                    onClick={backdropToggle}
                                />
                            </div>
                            :
                            <div id="burger-menu" className="p-6 absolute sm:hidden top-2 right-4 space-y-2 cursor-pointer"
                                onClick={backdropToggle}
                            >
                                <div className="w-8 h-1 bg-white"></div>
                                <div className="w-8 h-1 bg-white"></div>
                                <div className="w-8 h-1 bg-white"></div>
                            </div>
                        }
            </nav>
            {
                backdropMenu ?
                <nav id="backdrop-menu" className='absolute sm:hidden z-10 opacity-95 bg-slate-900 w-screen h-screen'>
                    <div className='font-Hind pt-4 flex-col flex text-white items-center justify-center'>
                        <a href="#navbar" className={burgerItemStyle}>
                            Home
                        </a>
                        <a href="#about" className={burgerItemStyle}>
                            About
                        </a>
                        <a href="#podcasts" className={burgerItemStyle}>
                            Podcasts
                        </a>
                        <a href="#team" className={burgerItemStyle}>
                            Team
                        </a>
                        <a href="#contact" className={burgerItemStyle}>
                            Contact
                        </a>
                    </div>
                </nav>
                :
                <div></div>
            }
        </div>
    )
}