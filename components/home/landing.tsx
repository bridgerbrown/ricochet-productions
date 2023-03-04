import React from "react";

export default function Landing(){
    return(
        <main className="h-screen w-screen pb-24 bg-gray-900 flex items-center justify-center">
            <div className="w-4/5 flex justify-center">
                <div className="w-1/2 h-92 flex justify-center">
                    <div className="ml-24 w-full h-full bg-slate-400"></div>
                </div>
                <div className="space-y-4 text-xl mx-12 w-1/2 px-4">
                    <h1 className="text-blue-300 font-bold text-5xl">Ricochet Productions</h1>
                    <h2 className="text-2xl text-slate-200">Storytelling through audio</h2>
                    <h3 className="text-slate-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloribus molestias! Vero consectetur laudantium cumque.</h3>
                </div>
            </div>
        </main>
    )
}
