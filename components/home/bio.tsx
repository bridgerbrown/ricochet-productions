import React from "react";
import Image from "next/image";

export default function Bio(props: any){
    const pStyling: string = `text-lg font-light text-slate-400`
    const headingStyling: string = `text-slate-200 text-2xl font-semibold`

    return(
        <section className="w-screen relative">
            <div className="pt-40 pb-52 bg-slate-900 flex-col items-center flex justify-center ">
                <div className="pb-28">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">What We Do</h1>
                </div>

                <section className="space-y-32">
                    <div className="flex justify-center items-center">
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

                    <div className="flex justify-center items-center">
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

                    <div className="w-screen flex justify-center">
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