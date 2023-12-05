import React, {useEffect} from "react";
import Image from "next/image";

export default function OurTeam(props: any){
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
        <section id="team" className="w-screen relative">
            <div className="pt-40 pb-40 flex-col items-center flex justify-center ">
                <div className="pb-20">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">Our Team</h1>
                </div>

                <div className="space-y-32 flex flex-col justify-center items-center">
                    <section id="section" className="flex-col items-center sm:flex-row duration-700 transition-fade ease-in-out flex justify-center w-11/12 2xl:w-10/12">
                        <Image
                            src="/rob-headshot.png"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className="mb-8 sm:mb-0 w-60 h-72 object-cover rounded-md"
                        />
                        <div className="space-y-1 text-xl w-11/12 text-center sm:text-left sm:w-1/2 pl-0 sm:pl-12">
                            <h1 className="drop-shadow-xs text-slate-100 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="italic tracking-wide text-slate-200 text-lg pb-2">Director</h2>
                            <p className="text-slate-400 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
                            <div className="w-full flex justify-end">
                                <Image
                                    src="/twitter-slate.png"
                                    width={200}
                                    height={200}
                                    alt="twitter icon"
                                    className="object-fit w-10 h-10 mr-6 hover:transition hover:opacity-90 cursor-pointer"
                                />
                                <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">Website</button>
                            </div>
                        </div>
                    </section>

                    <section id="section" className="flex-col-reverse items-center sm:flex-row duration-700 transition-fade ease-in-out flex justify-center w-11/12 2xl:w-10/12">
                        <div className="space-y-1 text-xl w-1/2 text-center sm:text-left w-11/12 sm:w-1/2 pl-0 sm:pr-12">
                            <h1 className="drop-shadow-xs text-slate-100 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="italic tracking-wide text-slate-200 text-lg pb-2">Producer</h2>
                            <p className="text-slate-400 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
                            <div className="w-full flex justify-end">
                                <Image
                                    src="/twitter-slate.png"
                                    width={200}
                                    height={200}
                                    alt="twitter icon"
                                    className="object-fit w-10 h-10 mr-6 hover:transition hover:opacity-90 cursor-pointer"
                                />
                                <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">Website</button>
                            </div>
                        </div>
                        <Image
                            src="/rob-headshot.png"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className="mb-8 sm:mb-0 w-60 h-72 object-cover rounded-md"
                        />
                    </section>

                    <section id="section" className="flex-col items-center sm:flex-row duration-700 transition-fade ease-in-out flex justify-center w-11/12 2xl:w-10/12">
                        <Image
                            src="/rob-headshot.png"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className="mb-8 sm:mb-0 w-60 h-72 object-cover rounded-md"
                        />
                        <div className="space-y-1 text-xl w-11/12 text-center sm:text-left sm:w-1/2 pl-0 sm:pl-12">
                            <h1 className="drop-shadow-xs text-slate-100 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="italic tracking-wide text-slate-200 text-lg pb-2">Director</h2>
                            <p className="text-slate-400 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
                            <div className="w-full flex justify-end">
                                <Image
                                    src="/twitter-slate.png"
                                    width={200}
                                    height={200}
                                    alt="twitter icon"
                                    className="object-fit w-10 h-10 mr-6 hover:transition hover:opacity-90 cursor-pointer"
                                />
                                <button className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide">Website</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}