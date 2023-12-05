import React, {useEffect} from "react";
import Image from "next/image";

export default function PodcastList(props: any){
  const podcastImgStyling: string = `mb-4 sm:mb-0 hover:scale-105 transition ease-in-out cursor-pointer w-80 sm:w-96 2xl:w-96 h-88 object-cover rounded-md shadow-lg`
  const podcastSectionStyling: string = `duration-700 transition-fade ease-in-out flex-col sm:flex-row flex md:flex-row px-4 sm:px-6 w-11/12 justify-center items-center`
  const podcastTextStyling: string = `text-center sm:text-left w-full sm:flex-col justify-center items-center sm:items-left md:text-left space-y-1 pl-0 sm:pl-10 md:w-2/3 2xl:w-4/5`
  const podcastImgSectionStyling: string = `w-full sm:w-1/2 2xl:w-1/3 flex justify-center`

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
        <div className="pt-40 pb-52 flex-col items-center flex justify-center ">
            <div className="pb-20">
              <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">
                Currently In Production
              </h1>
            </div>

            <div className="space-y-24 flex flex-col items-center">
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
                  <h2 className="text-blue-300 text-2xl font-semibold">
                    The Accidental Activist
                  </h2>
                  <h3 className="text-slate-300 pb-2 text-lg italic">
                  </h3>
                  <p className="text-slate-300 font-light">
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
                  <h2 className="text-blue-300 text-2xl font-semibold">
                    United States vs. China
                  </h2>
                  <p className="text-slate-300 font-light">
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
                  <h2 className="text-blue-300 text-2xl font-semibold">
                  </h2>
                  <h3 className="text-slate-300 pb-2 text-lg italic">
                  </h3>
                  <p className="text-slate-300 font-light">
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
};
