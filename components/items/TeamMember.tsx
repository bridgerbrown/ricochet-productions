import React from "react";
import Image from "next/image";

export default function TeamMember(props: any) {
  const { data } = props;

  return (
    <section id="section" className="flex-col items-center sm:flex-col duration-700 transition-fade ease-in-out flex justify-center">
      <div className="space-y-3 text-xl w-11/12 text-center sm:text-center sm:max-w-[1000px]">
        <h1 className="drop-shadow-xs text-slate-100 text-2xl font-semibold">
          {data.name}
        </h1>
        <p className="text-slate-300 text-base font-light pb-4">
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
