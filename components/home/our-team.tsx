import React from "react";
import Image from "next/image";

export default function OurTeam(props: any){
    return(
        <main className="w-screen relative pb-60">
            <div className="pt-24 pb-32 bg-gray-300 flex-col items-center flex justify-center ">
                <div className="pb-16">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-900 font-semibold text-4xl">Our Team</h1>
                </div>

                <div className="space-y-24 flex flex-col justify-center items-center">
                    <section className="flex justify-center w-10/12">
                        <Image
                            src="/rob-headshot.png"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className="w-72 h-80 object-cover rounded-md"
                        />
                        <div className="space-y-1 text-xl w-1/2 pl-12">
                            <h1 className="drop-shadow-xs text-slate-900 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="text-slate-800 text-lg pb-2">Director</h2>
                            <p className="text-slate-700 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
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

                    <section className="flex justify-center w-10/12">
                        <div className="space-y-1 text-xl w-1/2 pr-12">
                            <h1 className="drop-shadow-xs text-slate-900 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="text-slate-800 text-lg pb-2">Director</h2>
                            <p className="text-slate-700 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
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
                            className="w-72 h-80 object-cover rounded-md"
                        />
                    </section>

                    <section className="flex justify-center w-10/12">
                        <Image
                            src="/rob-headshot.png"
                            width={896}
                            height={1204}
                            alt="rob long headshot"
                            className="w-72 h-80 object-cover rounded-md"
                        />
                        <div className="space-y-1 text-xl w-1/2 pl-12">
                            <h1 className="drop-shadow-xs text-slate-900 text-2xl font-semibold">Rob Long</h1>
                            <h2 className="text-slate-800 text-lg pb-2">Director</h2>
                            <p className="text-slate-700 text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque minus sint molestiae, reprehenderit aut, beatae saepe magni quidem sed voluptatum praesentium odio laudantium modi similique cupiditate provident quae voluptas earum dolorem nam iure? Necessitatibus blanditiis culpa quas deserunt, tempore, consequatur voluptatum facere architecto quia repellendus voluptatibus? Rerum quis vero harum inventore, optio sed natus magnam sunt, sint, assumenda est!</p>
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
        </main>
    )
}