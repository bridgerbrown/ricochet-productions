import React from "react";

export default function Landing(){
    return(
        <main className="h-screen w-screen pb-24 bg-gray-100 flex items-center justify-center">
            <div className="w-4/5 flex justify-center">
                <div className="w-1/2 flex justify-center">
                    <div className="ml-24 w-96 h-96 bg-slate-400"></div>
                </div>
                <div className="space-y-4 text-xl mx-12 w-1/2 px-4">
                    <h1 className="text-slate-800 font-bold text-4xl">Ricochet Productions</h1>
                    <h2 className="text-xl text-slate-700">Lorem ipsum lor, delectus rerum. Ullam coea eius dicta at. Labore, quibusdam rem? Odit expedita sit reprehenderit quo ea quia fugit, voluptatem quis. Natus modi ducimus alias, repellat a doloremque. Ratione laboriosam quibusdam corporis illum? Fugit, totam natus!</h2>
                    <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">
                        Read More
                    </button>
                </div>
            </div>
        </main>
    )
}