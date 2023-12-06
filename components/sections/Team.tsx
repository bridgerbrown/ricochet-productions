import React, {useEffect} from "react";
import team from "../../data/team.json";
import TeamMember from "../items/TeamMember";

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
          <h1 className="tracking-wide drop-shadow-sm text-slate-100 font-semibold text-4xl">
            Our Team
          </h1>
        </div>

        <div className="space-y-32 flex flex-col justify-center items-center">
          {
            team.map((item: any) => (
              <TeamMember
                key={item.id}
                data={item}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
