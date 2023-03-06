import React from "react";
import Image from "next/image";

export default function Landing(){
    return(
        <main className="h-screen w-screen pb-24 bg-slate-900 flex items-center justify-center">
            <div className="w-4/5 flex justify-center">
                <div className="w-1/2 flex justify-end pr-4">
                    <Image
                        src="/logo-simple.png"
                        width={608}
                        height={821}
                        alt="ricochet productions logo"
                        className="w-7/12"
                    />
                </div>
                <div className="flex justify-center flex-col space-y-4 text-xl w-1/2 px-4">
                    <h1 className="text-blue-300 font-bold text-5xl">Ricochet Productions</h1>
                    <h2 className="text-2xl text-slate-200">Storytelling through audio</h2>
                    <h3 className="text-slate-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloribus molestias! Vero consectetur laudantium cumque.</h3>
                </div>
            </div>
        </main>
    )
}
