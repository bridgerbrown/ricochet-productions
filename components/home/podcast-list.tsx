import React from "react";
import Image from "next/image";

export default function PodcastList(props: any){
    const pStyling: string = `text-lg font-light text-slate-700`
    const headingStyling: string = `text-slate-900 text-2xl font-semibold`
    const sectionStyling: string = `mb-8 flex w-4/5 space-x-4 justify-center`
    const imgDivStyling: string = `w-73 h-73 flex justify-center items-center`
    const podcastImgStyling: string = `hover:scale-105 transition ease-in-out cursor-pointer w-88 h-88 object-cover rounded-md shadow-lg`

    return(
        <section className="w-screen relative">
            <div className="pt-40 pb-52 bg-gray-200 flex-col items-center flex justify-center ">
                <div className="pb-28">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-900 font-semibold text-4xl">Podcasts</h1>
                </div>

                <div className="space-y-32">
                    <section className="flex px-60 w-screen justify-center">
                        <div className="w-1/3 flex justify-center">
                            <Image
                                src="/podcasts/martini-shot.jpeg"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className="space-y-1 pl-12 w-2/3">
                            <h2 className="text-2xl font-semibold">Podcast #1</h2>
                            <h3 className="pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque quasi voluptatibus atque itaque doloremque ratione, dicta incidunt natus deserunt in neque suscipit explicabo doloribus adipisci totam aut tempore ea!
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at debitis voluptatibus assumenda ab. Itaque illo quam consequatur deserunt nihil explicabo totam maiores fugit, vero fuga quo expedita molestias quidem!
                            </p>
                            <div className="pt-6">
                            <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">
                                Listen
                            </button>
                            </div>
                        </div>
                    </section>

                    <section className="flex px-60 w-screen justify-center">
                        <div className="w-1/3 flex justify-center">
                            <Image
                                src="/podcasts/ayaan-hirsi.jpeg"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className="space-y-1 pl-12 w-2/3">
                            <h2 className="text-2xl font-semibold">Podcast #2</h2>
                            <h3 className="pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque quasi voluptatibus atque itaque doloremque ratione, dicta incidunt natus deserunt in neque suscipit explicabo doloribus adipisci totam aut tempore ea!
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at debitis voluptatibus assumenda ab. Itaque illo quam consequatur deserunt nihil explicabo totam maiores fugit, vero fuga quo expedita molestias quidem!
                            </p>
                            <div className="pt-6">
                            <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">
                                Listen
                            </button>
                            </div>
                        </div>
                    </section>

                    <section className="flex px-60 w-screen justify-center">
                        <div className="w-1/3 flex justify-center">
                            <Image
                                src="/podcasts/ricochet-superfeed.png"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className="space-y-1 pl-12 w-2/3">
                            <h2 className="text-2xl font-semibold">Podcast #3</h2>
                            <h3 className="pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque quasi voluptatibus atque itaque doloremque ratione, dicta incidunt natus deserunt in neque suscipit explicabo doloribus adipisci totam aut tempore ea!
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at debitis voluptatibus assumenda ab. Itaque illo quam consequatur deserunt nihil explicabo totam maiores fugit, vero fuga quo expedita molestias quidem!
                            </p>
                            <div className="pt-6">
                            <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">
                                Listen
                            </button>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>
        </section>
    )
}