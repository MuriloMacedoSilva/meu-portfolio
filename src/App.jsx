import background from "../src/assets/background.svg";
import pessoalMurilo from "../src/assets/pessoalMurilo.svg";
import eclipse1 from "../src/assets/Ellipse1.svg";
import "../src/App.css";
import { MoveDown } from "lucide-react";
import { Menu } from "lucide-react";

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
                    Full-Stack Developer | Ex-Aluno PROA | React.Js, Tailwind
                    CSS | Figma | Python, Java, SpringBoot | MySQL | Git, Github
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
            <section className=" bg-gray-100/90 w-full px-[50px] flex items-center justify-center pt-13">
              <div className="w-full flex flex-col items-center justify-center pt-[40px] pb-[100px] gap-11">
                <h2 className="text-gray-900 font-light text-shadow-sm text-shadow-white/30 text-[50px]">
                  Sobre
                </h2>
                <p className="text-black font-light text-[18px] text-center xl:w-[700px] xl:text-[19px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  iusto delectus doloribus est enim quas saepe, minima totam sit
                  vitae, laborum, corrupti commodi vel unde natus. Quas
                  assumenda pariatur rerum?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sint obcaecati, ipsam enim
                  repudiandae facilis aut perspiciatis ea quidem minima numquam
                  voluptatem commodi sed ut exercitationem. Suscipit temporibus
                  beatae explicabo eligendi? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Exercitationem quo libero
                  placeat nobis repellat obcaecati odit, cupiditate labore
                  architecto neque ratione maxime laboriosam magnam delectus
                  voluptatum reiciendis et vero? Tempore?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Incidunt, eveniet tempora!
                  Aliquid commodi dolore itaque perspiciatis. Ad facilis
                  nesciunt sit laboriosam pariatur distinctio ipsam dignissimos,
                  delectus, natus ullam, maxime dolores.
                </p>
              </div>
            </section>
            <section className=" w-full pb-[50px] px-[70px] -bg-linear-180 from-gray-100/90 flex flex-col items-center gap-17">
              <h2 className="text-gray-900 text-shadow-lg text-shadow-white/30 font-light text-[50px]">
                Habilidades
              </h2>
              <div className="w-[90%] grid grid-cols-2 gap-15 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">HTML5</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">CSS3</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    JavaScript
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    React.Js
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    Tailwind CSS
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">Figma</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    Jupyter
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    Python
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">Java</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    SpringBoot
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">MySQL</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">Git</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                  <p className="text-[23px] text-blue-950 font-medium">
                    GitHub
                  </p>
                </div>
              </div>
            </section>
            <section className="-bg-linear-180 from-black/80 to-black/10  w-full pt-28 flex flex-col items-center">
              <h2 className=" text-blue-300 text-shadow-lg text-shadow-white/20 font-light text-[50px]">
                Projetos
              </h2>
            </section>
          </main>
        </div>
      </div>
    </html>
  );
}

export default App;
