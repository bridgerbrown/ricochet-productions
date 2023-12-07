import React, {useEffect} from "react";
import Image from "next/image";
import podcasts from "../../data/podcasts.json";
import Podcast from "../items/Podcast";

export default function PodcastList(props: any){

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
          <h1 className="text-center tracking-wide drop-shadow-sm text-slate-100 font-semibold text-3xl sm:text-4xl">
            Currently In Production
          </h1>
        </div>

        <div className="space-y-36 flex flex-col items-center">
          {
            podcasts.map((item: any) => (
              <Podcast
                key={item.id}
                data={item}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
};
