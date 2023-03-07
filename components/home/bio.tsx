import React, {useEffect} from "react";
import Image from "next/image";

export default function Bio(props: any){
    const pStyling: string = `text-lg font-light text-slate-400`
    const headingStyling: string = `text-slate-200 text-2xl font-semibold`

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
        <section id="about" className="w-screen relative">
            {/* <div className="top-1/2 -left-96 absolute w-96 h-96 rounded-full bg-blue-900 opacity-5"></div>
            <div className="top-72 -right-60 absolute  w-96 h-96 rounded-full bg-blue-900 opacity-5"></div> */}
            {/* <div className="bottom-12 right-24 absolute w-96 h-96 rounded-full bg-blue-900 opacity-5"></div> */}
            <div className="pt-40 pb-52 bg-slate-900 flex-col items-center flex justify-center ">
                <div className="pb-20">
                    <h1 className="border-b-4 tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">What We Do</h1>
                </div>

                <section className="space-y-32">
                    <div id="section" className="duration-700 transition-fade ease-in-out flex justify-center items-center">
                        <div className="w-1/3 flex justify-end">
                            <Image
                                src="/ricochet-logo.png"
                                width={486}
                                height={118}
                                alt="ricochet logo"
                                className="mr-24 w-3/5 object-cover rounded-md"
                            />
                        </div>
                        <div className="space-y-4 pr-20 flex flex-col w-1/2">
                            <h2 className={headingStyling}>Ricochet</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                    </div>

                    <div id="section" className="duration-700 transition-fade ease-in-out flex justify-center items-center">
                        <div className="space-y-4 pl-32 flex flex-col w-1/2">
                            <h2 className={headingStyling}>Storytelling Productions</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                        <div className="w-1/3 flex justify-start">
                            <Image
                                src="/studio.jpeg"
                                width={1000}
                                height={667}
                                alt="podcast studio"
                                className="ml-12 w-4/5 object-cover rounded-md"
                            />
                        </div>
                    </div>

                    <div id="section" className="duration-700 transition-fade ease-in-out w-screen flex justify-center">
                        <div className="space-y-4 w-2/3 text-center justify-center items-center flex flex-col">
                            <h2 className={headingStyling}>Our Podcasts</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}