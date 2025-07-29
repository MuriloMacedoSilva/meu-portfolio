import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fotoPersonalProa from "../assets/fotoPersonalProa.png";
import Fiap from "../assets/Fiap.jpg"
import ProaFormat from "../assets/ProaFormat.jpeg"
import tech from "../assets/tech.jpg"

function Sobre() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Paragrafo", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#Sobre",
        start: "top 80px",
        end: "bottom 2630px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#Paragrafo");
    };
  }, []);

  return (
    <section
      className="z-1 bg-white w-full px-[50px] flex items-center justify-center pt-10"
    >
      <div  className="w-full flex flex-col items-center justify-center pt-[40px] pb-[100px] gap-11  ">
        <h2
          id="TituloSobre"
          className="text-gray-900 font-light text-shadow-sm text-shadow-white/30 text-[50px]"
        >
          Sobre
        </h2>
        <div id="Paragrafo" className="flex flex-col gap-10 w-full items-center justify-between lg:flex-row px-15">
          <img src={fotoPersonalProa} alt="foto pessoal" className="w-[380px] lg:w-[500px] border-2 border-amber-400 rounded-full hover:scale-105 transform duration-300 shadow-lg shadow-black/30" />
          <p className="text-black min-w-[350px] max-w-[500px] leading-[30px] font-light text-[17px] text-center lg:text-left xl:text-[18px]"> Sou Murilo Macedo Silva, desenvolvedor full stack com sólida formação
          técnica e paixão por transformar ideias em soluções digitais de alto
          impacto. Atuo no desenvolvimento de sites modernos, sistemas robustos,
          páginas personalizadas e aplicações inteligentes, sempre com foco em
          performance, segurança e escalabilidade.</p>
        </div>
        <div className="flex flex-col gap-10 w-full items-center justify-between lg:flex-row px-15 pt-[40px]">
          <p className="text-black min-w-[350px] max-w-[500px] leading-[30px] font-light text-[17px] text-center lg:text-left xl:text-[18px]">Minha jornada profissional foi impulsionada pela formação no Instituto
          PROA, onde fui capacitado como Desenvolvedor Full Stack, e continua se
          aprimorando com o curso de Análise e Desenvolvimento de Sistemas na
          FIAP, uma das instituições mais renomadas do país</p>
          <div className="flex flex-col items-center justify-center w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] overflow-hidden shadow-lg shadow-black/30  hover:scale-105 transform duration-300">
            <img src={Fiap} alt="Fiap" className="w-full" />
            <img src={ProaFormat} alt="Proa Formatura" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full items-center justify-between lg:flex-row-reverse  pt-[40px]">
          <p className="text-black min-w-[350px] max-w-[500px] leading-[30px] font-light text-[17px] text-center lg:text-left xl:text-[18px]">Domino tecnologias de ponta para entregar projetos completos e bem
          estruturados, com código limpo, organizado e orientado à excelência.
          Além de criar do zero, também realizo melhorias em sistemas
          existentes, aplico inteligência artificial para automação de
          processos, analiso dados para tomada de decisões estratégicas e
          proporciono alta relação custo-benefício para meus clientes.</p>
          <img src={tech} alt="tecnologia" className="shadow-lg shadow-black/30  hover:scale-105 transform duration-300" />
        </div>
        <div className="w-screen px-[50px] flex justify-center items-center bg-black py-[100px] shadow-lg shadow-black/30">
          <p
          className="text-black min-w-[350px] max-w-[600px] leading-[30px] font-light text-[17px] text-center  xl:text-[18px]"
        >
          <strong className="text-white font-[400]">Meu objetivo vai além do desenvolvimento técnico: busco gerar valor
          real por meio da tecnologia, ajudando empresas e profissionais à
          prospectar mais clientes, otimizar seus processos e destacar-se em um
          mercado cada vez mais competitivo.
          <br /> <br />
          Se você busca inovação, confiabilidade e um parceiro comprometido com
          o sucesso do seu projeto, estou pronto para fazer a diferença.</strong>
        </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
