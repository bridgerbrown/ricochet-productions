import React from "react";
import Image from "next/image";

export default function TeamMember(props: any) {
  const { data } = props;

  return (
    <section id="section" className="flex-col items-center sm:flex-row duration-700 transition-fade ease-in-out flex justify-center w-11/12 2xl:w-10/12">
      <Image
        src={data.image}
        width={896}
        height={1204}
        alt={`${data.name} portrait image`}
        className="mb-8 sm:mb-0 w-60 h-72 object-cover rounded-md"
      />
      <div className="space-y-1 text-xl w-11/12 text-center sm:text-left sm:w-1/2 pl-0 sm:pl-12">
        <h1 className="drop-shadow-xs text-slate-100 text-2xl font-semibold">
          {data.name}
        </h1>
        <p className="text-slate-400 text-base pb-4">
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
