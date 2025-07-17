import background from "../src/assets/background.svg";
import pessoalMurilo from "../src/assets/pessoalMurilo.svg";
import eclipse1 from "../src/assets/Ellipse1.svg";
import "../src/App.css";

function App() {
  background;
  eclipse1;

  return (
    <html className="custom-cursor">
      <div className="bg-[url('../src/assets/background.svg')] bg-cover bg-center w-screen">
        <div className="bg-indigo-950/70 w-screen justify-center">
          <main className=" w-screen flex flex-col items-center gap-7">
            <section className="w-[80%] flex flex-col gap-3 items-center pt-12 sm:gap-9 md:flex md:flex-row-reverse md:justify-between md:pt-19 xl:w-[90%] xl:pt-20 xl:px-[70px]">
              <div className="cursor-pointer w-[75%] h-[270px] rounded-full overflow-hidden border-[4px] border-amber-200/40 shadow-xl/30 flex items-center sm:w-[400px] sm:h-[400px] md:w-[800px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[450px] xl:h-[450px]">
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
                  <h2 className="text-blue-400 font-light text-[49px] md:text-[42px] xl:text-[73px]">
                    Murilo Macedo
                  </h2>
                </div>
                <div className="w-full flex justify-center xl:justify-start">
                  <p className="text-amber-50 font-light text-center text-[18px] md:text-[14px] lg:text-left lg:items-start lg:justify-end xl:text-[18px] xl:w-[400px] xl:justify-start">
                    Full-Stack Developer | Ex-Aluno PROA | React.Js, Tailwind CSS | Figma | Python, Java, SpringBoot | MySQL | Git, Github
                  </p>
                </div>
                <div className=" w-full flex flex-col items-center justify-center gap-2 pt-4 lg:gap-2.5 lg:flex lg:flex-row-reverse xl:w-full xl:justify-start xl:items-start">
                  <button className="w-full border border-amber-200 text-amber-200 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center text-[18px] lg:w-[300px] xl:w-[300px] hover:bg-amber-200 hover:text-cyan-950 transition duration-280">
                    Download CV
                  </button>
                  <button className="w-full border border-amber-200 font-medium cursor-pointer rounded-2xl h-[50px] flex items-center justify-center bg-amber-200 text-cyan-950 text-[18px] lg:w-[300px] xl:w-[300px]">
                    Contato
                  </button>
                </div>
              </div>
            </section>
            <section className="w-[80%] flex items-center justify-center pt-24">
              <div className="w-full flex flex-col items-center justify-center pt-[40px] pb-[100px] gap-11">
                <h2 className="text-amber-200 font-light text-[50px]">Sobre</h2>
                <p className="text-amber-50 font-light text-[18px] text-center xl:w-[700px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  iusto delectus doloribus est enim quas saepe, minima totam sit
                  vitae, laborum, corrupti commodi vel unde natus. Quas
                  assumenda pariatur rerum?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sint obcaecati, ipsam enim
                  repudiandae facilis aut perspiciatis ea quidem minima numquam
                  voluptatem commodi sed ut exercitationem. Suscipit temporibus
                  beatae explicabo eligendi?
                </p>
              </div>
            </section>
            <section className="flex flex-col items-center gap-17">
              <h2 className="text-amber-200 font-light text-[50px]">
                Habilidades
              </h2>
              <div className="w-[90%] grid grid-cols-2 gap-15 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">HTML5</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">CSS3</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    JavaScript
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    React.Js
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    Tailwind CSS
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">Figma</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    Jupyter
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    Python
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">Java</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    SpringBoot
                  </p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">MySQL</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">Git</p>
                </div>
                <div className="hover:bg-white/30 p-[8px] rounded transition duration-250 flex flex-col items-center justify-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                  <p className="text-[23px] text-blue-400 font-medium">
                    GitHub
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-amber-200 font-light text-[50px]">
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
