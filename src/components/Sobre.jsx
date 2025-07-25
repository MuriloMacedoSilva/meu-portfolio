import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Sobre() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Paragrafo", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#Sobre",
        start: "top 80px",
        end: "bottom 986px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#Paragrafo");
    };
  }, []);

  return (
    <section
      id="Sobre"
      className="z-1 bg-white w-full px-[50px] flex items-center justify-center pt-10"
    >
      <div className="w-full flex flex-col items-center justify-center pt-[40px] pb-[100px] gap-11">
        <h2
          id="TituloSobre"
          className="text-gray-900 font-light text-shadow-sm text-shadow-white/30 text-[50px]"
        >
          Sobre
        </h2>
        <p
          id="Paragrafo"
          className="text-black leading-[30px] font-light text-[18px] text-center xl:w-[700px] xl:text-[19px] transform translate-x-2 opacity-0"
        >
          Sou Murilo Macedo Silva, desenvolvedor full stack com sólida formação
          técnica e paixão por transformar ideias em soluções digitais de alto
          impacto. Atuo no desenvolvimento de sites modernos, sistemas robustos,
          páginas personalizadas e aplicações inteligentes, sempre com foco em
          performance, segurança e escalabilidade.
          <br /> <br />
          Minha jornada profissional foi impulsionada pela formação no Instituto
          PROA, onde fui capacitado como Desenvolvedor Full Stack, e continua se
          aprimorando com o curso de Análise e Desenvolvimento de Sistemas na
          FIAP, uma das instituições mais renomadas do país
          <br /> <br />
          Domino tecnologias de ponta para entregar projetos completos e bem
          estruturados, com código limpo, organizado e orientado à excelência.
          Além de criar do zero, também realizo melhorias em sistemas
          existentes, aplico inteligência artificial para automação de
          processos, analiso dados para tomada de decisões estratégicas e
          proporciono alta relação custo-benefício para meus clientes.
          <br /> <br />
          Meu objetivo vai além do desenvolvimento técnico: busco gerar valor
          real por meio da tecnologia, ajudando empresas e profissionais a
          prospectar mais clientes, otimizar seus processos e destacar-se em um
          mercado cada vez mais competitivo.
          <br /> <br />
          Se você busca inovação, confiabilidade e um parceiro comprometido com
          o sucesso do seu projeto, estou pronto para fazer a diferença.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
