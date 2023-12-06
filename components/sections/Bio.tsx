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
        <section id="about" className="w-screen">
            <div className="pt-40 pb-52 flex-col items-center flex justify-center ">
                <div className="pb-20">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">About Us</h1>
                </div>

                <section className="space-y-32 flex justify-center flex-col items-center">
                    <div id="section" className="w-11/12 2xl:w-9/12 duration-700 transition-fade ease-in-out flex flex-col sm:flex-row justify-center items-center">
                        <div className="pb-4 sm:pb-0 flex justify-end">
                            <Image
                                src="/r-prod-simple-new.png"
                                width={608}
                                height={821}
                                alt="ricochet productions logo"
                                className="w-[300px] pl-4 p-0 sm:p-12 md:p-16 lg:p-0 mr-0 sm:mr-12 object-cover"
                            />
                        </div>
                        <div className="sm:text-left text-center space-y-4 flex flex-col xl:pr-0 w-3/4 sm:w-1/2 2xl:w-2/5">
                            <h2 className={headingStyling}>Ricochet</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                    </div>

                    <div id="section" className="w-11/12 2xl:w-9/12 duration-700 transition-fade ease-in-out flex flex-col-reverse sm:flex-row  justify-center items-center">
                        <div className="sm:text-left text-center space-y-4 flex flex-col w-3/4 sm:w-1/2 2xl:w-2/5">
                            <h2 className={headingStyling}>Storytelling Productions</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                        <div className="px-0 flex justify-center sm:justify-start">
                            <Image
                                src="/studio.jpeg"
                                width={1000}
                                height={667}
                                alt="podcast studio"
                                className="ml-0 sm:mb-0 mb-8 sm:ml-8 w-[400px] object-cover rounded-md"
                            />
                        </div>
                    </div>

                    <div id="section" className="duration-700 transition-fade ease-in-out w-screen flex justify-center">
                        <div className="space-y-4 w-3/4 sm:w-2/3 2xl:w-2/5 text-center justify-center items-center flex flex-col">
                            <h2 className={headingStyling}>Our Podcasts</h2>
                            <p className={pStyling}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis pariatur recusandae nobis sunt tempora voluptatem, quaerat unde soluta mollitia omnis doloremque a cum nam quibusdam, officia optio fugiat at natus? Praesentium, architecto at? Laudantium totam repudiandae natus hic accusamus. Officia modi, atque suscipit numquam perspiciatis accusantium.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}