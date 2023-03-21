import React from "react";
import Image from "next/image";

export default function Landing(){
    return(
        <main className="h-screen w-screen pb-24 bg-slate-900 flex items-center justify-center">
            <div className="w-full flex justify-center">
                <div className="sm:w-1/3 xl:w-1/2 flex justify-end pr-4">
                    <Image
                        src="/logo-simple.png"
                        width={608}
                        height={821}
                        alt="ricochet productions logo"
                        className="w-48 sm:w-52 xl:w-80 object-scale-down"
                    />
                </div>
                <div className="sm:pr-0 lg:pr-4 mr-0 xl:mr-28 flex justify-center flex-col space-y-2 xl:space-y-4 text-xl w-1/2 sm:px-0 lg:px-4">
                    <h1 className="text-blue-300 font-bold text-2xl sm:text-3xl xl:text-5xl">Ricochet Productions</h1>
                    <h2 className="sm:text-lg md:text-2xl text-lg text-slate-200">Storytelling through audio</h2>
                    <h3 className="text-slate-400 font-light text-base md:text-lg sm:text-base w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloribus molestias! Vero consectetur laudantium cumque.</h3>
                </div>
            </div>
        </main>
    )
}
