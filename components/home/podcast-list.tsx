import React, {useEffect} from "react";
import Image from "next/image";

export default function PodcastList(props: any){
    const podcastImgStyling: string = `sm:mb-4 md:mb-0 hover:scale-105 transition ease-in-out cursor-pointer sm:w-80 md:w-96 2xl:w-96 h-88 object-cover rounded-md shadow-lg`
    const podcastSectionStyling: string = `duration-700 transition-fade ease-in-out sm:flex-col flex md:flex-row sm:px-16 md:px-6 xl:px-60 w-screen justify-center items-center`
    const podcastTextStyling: string = `sm:text-center sm:w-full sm:flex-col sm:justify-center sm:items-center md:text-left space-y-1 sm:pl-0 md:pl-10 lg:pl-12 md:w-2/3`
    const podcastImgSectionStyling: string = `sm:w-1/2 2xl:w-1/4 flex justify-center`

    function fadeIn() {
        let reveals = document.querySelectorAll("#section");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("opacity-100");
            reveals[i].classList.remove("opacity-0");
          } else {
            reveals[i].classList.remove("opacity-100");
            reveals[i].classList.add("opacity-0");
          }
        }
      }
  
      useEffect(() => {
        window.addEventListener("scroll", fadeIn)
        fadeIn()
      }, [])

    return(
        <section id="podcasts" className="w-screen relative">
            <div className="pt-40 pb-52 bg-slate-900 flex-col items-center flex justify-center ">
                <div className="pb-20">
                    <h1 className="border-b-4 tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">Podcasts</h1>
                </div>

                <div className="space-y-32">
                    <section id="section" className={podcastSectionStyling}>
                        <div className={podcastImgSectionStyling}>
                            <Image
                                src="/podcasts/martini-shot.jpeg"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className={podcastTextStyling}>
                            <h2 className="text-blue-300 text-2xl font-semibold">Podcast #1</h2>
                            <h3 className="text-slate-300 pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="text-slate-300 font-light">
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

                    <section id="section" className={podcastSectionStyling}>
                        <div className={podcastImgSectionStyling}>
                            <Image
                                src="/podcasts/martini-shot.jpeg"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className={podcastTextStyling}>
                        <h2 className="text-blue-300 text-2xl font-semibold">Podcast #2</h2>
                            <h3 className="text-slate-300 pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="text-slate-300 font-light">
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

                    <section id="section" className={podcastSectionStyling}>
                        <div className={podcastImgSectionStyling}>
                            <Image
                                src="/podcasts/martini-shot.jpeg"
                                width={896}
                                height={1204}
                                alt="rob long headshot"
                                className={podcastImgStyling}
                            />
                        </div>
                        <div className={podcastTextStyling}>
                        <h2 className="text-blue-300 text-2xl font-semibold">Podcast #3</h2>
                            <h3 className="text-slate-300 pb-2 text-lg italic">Genre Subtitle</h3>
                            <p className="text-slate-300 font-light">
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