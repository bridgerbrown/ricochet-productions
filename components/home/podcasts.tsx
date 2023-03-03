import React from "react";
import Image from "next/image";

export default function Podcasts(props: any){
    const pStyling: string = `text-lg font-light text-slate-700`
    const headingStyling: string = `text-slate-900 text-2xl font-semibold`
    const sectionStyling: string = `mb-8 flex w-4/5 space-x-4 justify-center`
    const imgDivStyling: string = `w-73 h-73 flex justify-center items-center`
    const podcastImgStyling: string = `hover:scale-105 transition ease-in-out cursor-pointer w-72 h-72 object-cover rounded-md shadow-lg`

    return(
        <section className="w-screen relative">
            <div className="pt-40 pb-40 bg-gray-200 flex-col items-center flex justify-center ">
                <div className="pb-28">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-900 font-semibold text-4xl">Podcasts</h1>
                </div>

                <section className={sectionStyling}>
                    <div className={imgDivStyling}>
                        <Image
                            src="/podcasts/martini-shot.jpeg"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className={podcastImgStyling}
                        />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                </section>

                <section className={sectionStyling}>
                    <div className={imgDivStyling}>
                        <Image
                            src="/podcasts/martini-shot.jpeg"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className={podcastImgStyling}
                        />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                </section>

                <section className={sectionStyling}>
                    <div className={imgDivStyling}>
                        <Image
                            src="/podcasts/martini-shot.jpeg"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className={podcastImgStyling}
                        />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                    <div className={imgDivStyling}>
                    <Image
                        src="/podcasts/martini-shot.jpeg"
                        width={896}
                        height={1204}
                        alt="rob long headshot"
                        className={podcastImgStyling}
                    />
                    </div>
                </section>
            </div>
        </section>
    )
}