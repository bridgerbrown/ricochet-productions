import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Podcast(props: any) {
  const [readMore, setReadMore] = useState(false);
  const { data } = props;
  const sectionCSS: string = `duration-700 transition-fade ease-in-out flex-col sm:flex-row flex md:flex-row px-4 sm:px-6 w-11/12 justify-center items-center`
  const noImgSectionCSS: string = `duration-700 transition-fade ease-in-out flex-col flex px-4 sm:px-6 w-11/12 sm:max-w-[1000px] justify-center items-center`
  const textCSS: string = `text-center sm:text-left w-full sm:flex-col justify-center items-center sm:items-left md:text-left space-y-1 pl-0 sm:pl-10 w-2/3 sm:max-w-[1000px]`
  const noImgTextCSS: string = `sm:flex-col justify-center items-center sm:items-left space-y-1`
  const imgCSS: string = `mb-4 sm:mb-0 hover:scale-105 transition ease-in-out cursor-pointer w-80 sm:w-96 2xl:w-96 h-88 object-cover rounded-md shadow-lg`
  const imgSectionCSS: string = `w-full sm:w-1/2 2xl:w-1/3 flex justify-center`

  return (
    <section id="section" className={data.image ? sectionCSS : noImgSectionCSS}>
      <div className={imgSectionCSS}>
        {
          data.image &&
          <Image
            src={data.image}
            width={896}
            height={1204}
            alt={`${data.title} podcast image`}
            className={imgCSS}
          />
        }
      </div>
      <div className={data.image ? textCSS : noImgTextCSS}>
        <h2 className="text-center text-blue-300 text-2xl font-semibold">
          {data.title}
        </h2>
        <h3 className="text-center text-slate-100 pb-6 text-lg italic">
          {data.subtitle ? data.subtitle : ""}
        </h3>
        <div className="space-y-4 text-slate-300 font-light">
          {
            readMore
            ? 
            data.description.map((paragraph: string, index: number) => 
              <p 
                key={index}
                className={paragraph.length > 130 || index == 0 ? "indent-6" : ""}
              >
                {paragraph}
              </p>
            ) 
            :
            data.description.map((paragraph: string, index: number) => (
              index < 4
              &&
              <p 
                key={index}
                className={paragraph.length > 130 || index == 0 ? "indent-6" : ""}
              >
                {index == 3 ? paragraph.slice(0, 110) + "...": paragraph}
              </p>
            )) 
          }
          <div className="flex justify-center">
            {
              data.description.length > 3 &&
              <button 
                className="text-sm hover:bg-slate-400 transition-colors mt-8 bg-slate-500 text-white px-5 py-3 rounded-full"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            }
          </div>
        </div>
        {
          data.link &&
          <div className="pt-6">
            <Link
              href={data.link}
              className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide"
            >
              Listen
            </Link>
          </div>
        }
      </div>
    </section>
  )
}
