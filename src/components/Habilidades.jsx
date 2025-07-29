import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Habilidades() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Conts", {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#Habilidades", 
        start: "top 200px",
        end: "bottom 950px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf("#Habilidades")
    }

  }, [])



  return (
    <section id="Habilidades" className="z-1 w-full pb-[50px] px-[70px] pt-30 -bg-linear-180 from-white to-gray-50 flex flex-col items-center gap-17">
      <h2 className="text-gray-900 text-shadow-lg text-shadow-white/30 font-light text-[50px] mb-8">
        Habilidades
      </h2>
      <div id="Conts" className="w-[85%] grid grid-cols-2 gap-10 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 translate-y-1/2 opacity-0">
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">HTML5</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">CSS3</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">JavaScript</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">React.Js</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Tailwind CSS</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Figma</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Jupyter</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Python</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Java</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">SpringBoot</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
          <p className="text-[20px] text-blue-950 font-medium">MySQL</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">Git</p>
        </div>
        <div className="hover:bg-gray-300/30 shadow-2xl shadow-lg p-[11px] rounded transition duration-250 flex flex-col items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          <p className="text-[20px] text-blue-950 font-medium">GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
