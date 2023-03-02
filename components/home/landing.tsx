import React from "react";

export default function Landing(){
    return(
        <main className="w-screen">
            <div className="m-8 px-8 py-32 bg-slate-200 flex justify-center rounded-md">
                <div className="w-96 h-96 bg-slate-100"></div>
                <div className="space-y-4 text-xl mx-12 w-1/2 px-4">
                    <h1 className="text-slate-800 font-bold text-4xl">Ricochet Productions</h1>
                    <h2 className="text-xl text-slate-700">Lorem ipsum lor, delectus rerum. Ullam coea eius dicta at. Labore, quibusdam rem? Odit expedita sit reprehenderit quo ea quia fugit, voluptatem quis. Natus modi ducimus alias, repellat a doloremque. Ratione laboriosam quibusdam corporis illum? Fugit, totam natus!</h2>
                    <button className="font-light hover:opacity-90 hover:transition text-lg rounded-md text-white px-6 py-3 bg-sky-600">Read More</button>
                </div>
            </div>
        </main>
    )
}