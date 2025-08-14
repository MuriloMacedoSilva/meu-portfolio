import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contatos() {

  return (
    <section
      id="Contatos"
      className="z-1 bg-black w-full flex flex-col items-center justify-center gap-20 pb-30 pt-30"
    >
      <h2 className="text-white text-shadow-2xs text-shadow-white/30 font-light text-[50px]">
        Contatos
      </h2>
      <div
        id="contatosBut"
        className=" w-[90%] flex flex-col items-center justify-center gap-7 md:flex-row"
      >
        <a
          href="https://www.murilomacedo.dev73@gmail.com/"
          target="_blank"
          className="text-white p-5 text-[20px] gap-1 flex-col md:text-[17px] w-[150px] h-[150px] flex items-center justify-center rounded-full border-3 hover:scale-105 transition duration-200 border-white"
        >
          <Mail />
          <p className="text-white">E-mail</p>
        </a>
        <a
          href="https://wa.me/5511985323292"
          target="_blank"
          className="text-white p-5 text-[20px] gap-1 flex-col md:text-[17px] w-[150px] h-[150px] flex items-center justify-center rounded-full border-3 hover:scale-105 transition duration-200 border-white"
        >
          <Phone />
          <p className="text-white">WathsApp</p>
        </a>
        <a
          href="https://www.linkedin.com/in/murilo-macedo-8b1567316/"
          target="_blank"
          className="text-white p-5 text-[20px] gap-1 flex-col md:text-[17px] w-[150px] h-[150px] flex items-center justify-center rounded-full border-3 hover:scale-105 transition duration-200 border-white"
        >
          <Linkedin />
          <p className="text-white">LinkedIn</p>
        </a>
        <a
          href="https://github.com/MuriloMacedoSilva"
          target="_blank"
          className="text-white p-5 text-[20px] gap-1 flex-col md:text-[17px] w-[150px] h-[150px] flex items-center justify-center rounded-full border-3 hover:scale-105 transition duration-200 border-white"
        >
          <Github />
          <p className="text-white">GitHub</p>
        </a>
        <a
          href="https://www.instagram.com/_murilodev?igsh=aWE0YWNhbHA1eHY1"
          target="_blank"
          className="text-white p-5 text-[20px] gap-1 flex-col md:text-[17px] w-[150px] h-[150px] flex items-center justify-center rounded-full border-3 hover:scale-105 transition duration-200 border-white"
        >
          <Instagram />
          <p className="text-white">Instagram</p>
        </a>
      </div>
    </section>
  );
}

export default Contatos;
