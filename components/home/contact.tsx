import React from "react";

export default function Contact(props: any){
    function copyContact(){
        let email = 'RicochetProductions@gmail.com'
        navigator.clipboard.writeText(email);
        let button: any = document.getElementById("copy-button")
        button.innerText = "Copied!"
    }

    return(
        <section id="contact" className="w-screen pt-28 pb-72 bg-slate-800">
            <div className="px-48 text-center">
                <div className="pb-20">
                    <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">Contact</h1>
                </div>
                <div className=" flex-col space-y-4 justify-center items-center">
                    <h2 className="text-base font-light text-slate-200">For business inquiries, feel free to contact us at:</h2>
                    <h1 className="text-blue-300 italic pb-4 text-3xl font-light">RicochetProductions@gmail.com</h1>
                    <button onClick={copyContact} id="copy-button"
                        className="hover:transition hover:opacity-90 text-white bg-slate-400 py-3 px-6 rounded-md text-sm tracking-wide"
                    >
                        Copy Email
                    </button>
                </div>
            </div>
        </section>
    )
}