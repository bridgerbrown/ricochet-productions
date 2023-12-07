import React from "react";
import Image from "next/image";
import Navbar from "../sections/Navbar";

export default function Landing(){
  return(
    <main className="bg-cover bg-center relative top-0 h-screen w-screen pb-24 bg-wave-gradient flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="ml-8 sm:ml-0 w-1/3 sm:w-1/3 xl:w-1/2 flex justify-end pr-2 sm:pr-4">
          <Image
            src="/r-prod-simple-new.png"
            width={608}
            height={821}
            alt="ricochet productions logo"
            className="w-36 sm:w-52 xl:w-80 object-scale-down"
          />
        </div>
        <div className="sm:pr-0 lg:pr-4 mr-0 xl:mr-28 flex justify-center flex-col space-y-2 xl:space-y-4 text-xl w-2/3 sm:w-1/2 sm:px-0 lg:px-4">
          <h1 className="drop-shadow-2xl text-blue-300 font-bold text-xl sm:text-3xl xl:text-5xl">
            Ricochet Productions
          </h1>
          <h2 className="pr-1.5 sm:text-lg md:text-2xl text-base text-slate-200">
            Storytelling through audio
          </h2>
          <h3 className="text-slate-400 font-light text-sm md:text-lg sm:text-base w-11/12 sm:w-9/12 max-w-[490px]">
            Long form audio documentaries on topics and issues for an engaged and thoughtful audience.
          </h3>
        </div>
      </div>
    </main>
  )
}
