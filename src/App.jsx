import background from "../src/assets/background.svg";
import pessoalMurilo from "../src/assets/pessoalMurilo.svg";
import eclipse1 from "../src/assets/Ellipse1.svg";
import "../src/App.css";
import { MoveDown } from "lucide-react";
import { Menu } from "lucide-react";
import Sobre from "./components/Sobre.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Projetos from "./components/Projetos.jsx";
import Contatos from "./components/Contatos.jsx";

function App() {
  background;
  eclipse1;

  return (
    <html className="custom-cursor">
      <div className="bg-[url('../src/assets/background.svg')] bg-cover bg-center w-screen">
        <div className="-bg-linear-210 from-black/90 from-5% to-100% xl:from-25% via-white/90 to-black/80 w-screen justify-center">
          <header className=" w-full items-center justify-start px-[60px] py-[40px]">
            <div className="text-white hover:bg-yellow-400 hover:text-yellow-400 rounded-full w-[40px] h-[40px] py-1 border-white items-center justify-center flex transition duration-250 ease-in-out">
              <Menu />
            </div>
          </header>
          <main className=" w-screen flex flex-col items-center">
            <section className="w-[80%] flex flex-col gap-3 items-center sm:gap-9 md:flex md:flex-row-reverse md:justify-between xl:w-[90%] xl:px-[70px]">
              <div className="bg-white cursor-pointer w-[75%] h-[270px] rounded-full overflow-hidden border-[4px] border-white/90 shadow-white shadow-xl/30 flex items-center justify-center sm:w-[400px] sm:h-[400px] md:w-[800px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[450px] xl:h-[450px]">
                <img
                  className=" w-full"
                  src={pessoalMurilo}
                  alt="foto pessoal"
                />
              </div>

              <div className="gap-2 flex flex-col md:gap-11 lg:w-[400px] xl:w-[500px]">
                <div className="w-full pt-7 items-center flex flex-col lg:text-left lg:items-start">
                  <h1 className="text-white font-light text-[32px] leading-6 xl:text-[50px]">
                    Olá! Eu sou
                  </h1>
                  <h2 className="text-blue-300 text-shadow-lg text-shadow-white/15 font-light text-[49px] md:text-[42px] xl:text-[73px]">
                    Murilo Macedo
                  </h2>
                </div>
                <div className="w-full flex justify-center xl:justify-start">
                  <p className="text-white font-light text-center text-[18px] md:text-[14px] lg:text-left lg:items-start lg:justify-end xl:text-[18px] xl:w-[400px] xl:justify-start">
                    Desenvolvedor Full Stack | Ex-Aluno PROA | React.Js,
                    Tailwind CSS | Figma | Python, Java, SpringBoot | MySQL |
                    Git, Github
                  </p>
                </div>
                <div className=" w-full flex flex-col items-center justify-center gap-2 pt-4 lg:gap-2.5 lg:flex lg:flex-row-reverse xl:w-full xl:justify-start xl:items-start">
                  <button className="w-full border border-gray-50 text-gray-50 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center text-[18px] lg:w-[300px] xl:w-[300px] hover:bg-white hover:text-cyan-950 transition duration-280">
                    Download CV
                  </button>
                  <button className="w-full border border-gray-50 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center bg-white text-cyan-950 text-[18px] lg:w-[300px] xl:w-[300px]">
                    Contato
                  </button>
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
