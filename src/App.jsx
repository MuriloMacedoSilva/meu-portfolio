import background from "../src/assets/background.svg";
import pessoalMurilo from "../src/assets/pessoalMurilo.svg";
import eclipse1 from "../src/assets/Ellipse1.svg";
import "../src/App.css";
import { MoveDown, Sticker } from "lucide-react";
import { Menu } from "lucide-react";
import Sobre from "./components/Sobre.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Projetos from "./components/Projetos.jsx";
import Contatos from "./components/Contatos.jsx";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { useState } from "react";

function App() {
  background;
  eclipse1;

  const [menu, setMenu] = useState(false);

  function verMenu() {
    setMenu(menu === true ? false : true);
  }

  return (
    <html className="overflow-x-hidden custom-cursor scroll-smooth">
      <div className="bg-[url('../src/assets/background.svg')] bg-cover bg-center w-screen">
        <div
          id="Inicio"
          className=" -bg-linear-210 from-black from-5% to-100% xl:from-25% via-white/90 to-black w-screen justify-center"
        >
          <header className=" bg-black sticky top-0 left-0 z-[120] w-full items-center justify-between px-[40px] md:px-[30px] py-[15px] flex ">
            <div
              onClick={(e) => verMenu(e)}
              className="z-[10000] text-white hover:bg-yellow-400 hover:text-yellow-400 rounded-full w-[40px] h-[40px] py-1 border-white items-center justify-center flex transition duration-250 ease-in-out"
            >
              <Menu />
            </div>

            <div className="flex justify-between p-1 gap-7">
              <a
                href="https://github.com/MuriloMacedoSilva"
                target="_blank"
                className="text-white cursor-pointer text-[17px] border border-white p-1.5 rounded-[5px] hover:bg-white hover:text-black transition duration-200"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/murilo-macedo-8b1567316/"
                target="_blank"
                className="text-white cursor-pointer text-[17px] border border-white p-1.5 rounded-[5px] hover:bg-white hover:text-black transition duration-200"
              >
                <Linkedin />
              </a>
            </div>
            {menu === true && (
        <nav className="z-[120] w-screen h-screen top-0 bottom-0 left-0 bg-black absolute flex items-center justify-center py-44 transition duration-300">
          <ul className=" w-[80%] flex flex-col items-center justify-center gap-6 p-5">
            <li>
              <a
                href="#Inicio"
                className="text-white hover:text-amber-400 cursor-pointer font-light text-[40px]"
                onClick={(e) => verMenu(e)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#Sobre"
                className="text-white hover:text-amber-400 cursor-pointer font-light text-[40px]"
                onClick={(e) => verMenu(e)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#Habilidades"
                className="text-white hover:text-amber-400 cursor-pointer font-light text-[40px]"
                onClick={(e) => verMenu(e)}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#Projetos"
                className="text-white hover:text-amber-400 cursor-pointer font-light text-[40px]"
                onClick={(e) => verMenu(e)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#Contatos"
                className="text-white hover:text-amber-400 cursor-pointer font-light text-[40px]"
                onClick={(e) => verMenu(e)}
              >
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      )}
          </header>
          <main className="w-screen flex flex-col items-center">
            <section className="pt-[20px] pb-[50px] px-[20px] sticky top-0 left-0 snap-start w-full flex flex-col gap-0 items-center sm:gap-9 md:flex md:flex-row-reverse md:justify-around">
              <a
                href="https://github.com/MuriloMacedoSilva"
                target="_blank"
                className="bg-white cursor-pointer w-[240px] h-[240px] rounded-full overflow-hidden border-[4px] border-white/90 shadow-white shadow-xl/30 flex items-center justify-center sm:w-[250px] sm:h-[250px] md:w-[800px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[450px] xl:h-[450px] hover:scale-105 transition duration-300"
              >
                <img
                  className=" w-full"
                  src={pessoalMurilo}
                  alt="foto pessoal"
                />
              </a>

              <div className="gap-1 flex flex-col md:gap-11 lg:w-[400px] xl:w-[500px]">
                <div className="w-full pt-6 items-center flex flex-col lg:text-left lg:items-start">
                  <h1 className="text-white font-light text-[29px] leading-5 md:text-40 lg:text-[46] xl:text-[50px]">
                    Olá! Eu sou
                  </h1>
                  <h2 className="text-blue-300 text-shadow-lg text-shadow-white/15 font-light text-[46px] md:text-[49px] lg:text-[57px] xl:text-[73px]">
                    Murilo Macedo
                  </h2>
                </div>
                <div className="w-full flex justify-center xl:justify-start">
                  <p className="text-white font-light text-center text-[15px] md:text-[17px] lg:text-left lg:items-start lg:justify-end xl:text-[18px] xl:w-[400px] xl:justify-start leading-5">
                    Desenvolvedor Full Stack | Ex-Aluno PROA | React.Js,
                    Tailwind CSS | Figma | Python, Java, SpringBoot | MySQL |
                    Git, Github
                  </p>
                </div>
                <div className=" w-full flex flex-col items-center justify-center gap-2 pt-4 lg:gap-2.5 lg:flex lg:flex-row-reverse xl:w-full xl:justify-start xl:items-start">
                  <a
                    href="https://drive.google.com/file/d/1VKFXExKqfd9QubFzZNgpAqSs-7Bst7_I/view?usp=drive_link"
                    target="_blank"
                    className="w-full items-center justify-center flex"
                  >
                    <button className="w-full border border-gray-50 text-gray-50 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center text-[18px] hover:bg-white hover:text-cyan-950 transition duration-280">
                      Download CV
                    </button>
                  </a>
                  <a
                    href="https://wa.me/5511985323292"
                    className="w-full items-center justify-center flex"
                    target="_blank"
                  >
                    <button className="w-full border border-gray-50 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center bg-white text-cyan-950 text-[18px]">
                      Contato
                    </button>
                  </a>
                </div>
              </div>
            </section>
            <section className="w-screen flex items-center justify-center mt-14">
              <div className="rounded-full p-1.5 bg-white/50 animate-bounce shadow-2xl">
                <MoveDown />
              </div>
            </section>

            <Sobre />

            <Habilidades />

            <Projetos />

            <Contatos />
          </main>
        </div>
      </div>
      
    </html>
  );
}

export default App;
