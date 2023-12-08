import React from "react";
import Image from "next/image";

export default function TeamMember(props: any) {
  const { data } = props;

  return (
    <section id="section" className="w-11/12 px-4 sm:px-6 sm:max-w-[1000px] flex-col items-center sm:flex-col duration-700 transition-fade ease-in-out flex justify-center">
      <div className="space-y-3">
        <h1 className="text-center drop-shadow-xs text-slate-100 text-2xl sm:text-3xl font-semibold">
          {data.name}
        </h1>
        <p className="text-left text-slate-300 text-base sm:text-lg font-light pb-4">
          {data.description[0]}
        </p>
        <div className="w-full flex justify-end">
          {
            data.twitter ?
            <Image
              src="/twitter-slate.png"
              width={200}
              height={200}
              alt="twitter icon"
              className="object-fit w-10 h-10 mr-6 hover:transition hover:opacity-90 cursor-pointer"
            />
            :
            <span></span>
          }
        </div>
      </div>
    </section>
  )
};
