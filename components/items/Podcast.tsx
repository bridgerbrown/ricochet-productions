import Image from "next/image";
import Link from "next/link";

export default function Podcast(props: any) {
  const { data } = props;
  const podcastTextStyling: string = `text-center sm:text-left w-full sm:flex-col justify-center items-center sm:items-left md:text-left space-y-1 pl-0 sm:pl-10 md:w-2/3 2xl:w-4/5`
  const podcastImgStyling: string = `mb-4 sm:mb-0 hover:scale-105 transition ease-in-out cursor-pointer w-80 sm:w-96 2xl:w-96 h-88 object-cover rounded-md shadow-lg`
  const podcastSectionStyling: string = `duration-700 transition-fade ease-in-out flex-col sm:flex-row flex md:flex-row px-4 sm:px-6 w-11/12 justify-center items-center`
  const podcastImgSectionStyling: string = `w-full sm:w-1/2 2xl:w-1/3 flex justify-center`

  return (
    <section id="section" className={podcastSectionStyling}>
      <div className={podcastImgSectionStyling}>
        <Image
          src={data.image}
          width={896}
          height={1204}
          alt={`${data.title} podcast image`}
          className={podcastImgStyling}
        />
      </div>
      <div className={podcastTextStyling}>
        <h2 className="text-blue-300 text-2xl font-semibold">
          {data.title}
        </h2>
        <h3 className="text-slate-300 pb-2 text-lg italic">
          {data.subtitle ? data.subtitle : ""}
        </h3>
        <p className="text-slate-300 font-light">
          {
            data.description.length 
            ? 
            data.description.map((paragraph: string) => paragraph + `<br/><br/>`)
            :
            <span></span>
          }
        </p>
        <div className="pt-6">
          <Link
            href={data.link}
            className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide"
          >
            Listen
          </Link>
        </div>
      </div>
    </section>
  )
}
