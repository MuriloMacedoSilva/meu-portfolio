import Lume from "../assets/Lume.png";
import Hc from "../assets/HC.png";
import GeoAlert from "../assets/GeoAlert.png";
import prevTempo from "../assets/prevTempo.png";
import conversor from "../assets/conversor.png";
import tradutor from "../assets/tradutor.png";
import gerenciador from "../assets/gerenTarefas.png";
import mapaCarreira from "../assets/mapaCarreira.png";
import { useState } from "react";

function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState(null);

  function verProjeto(index) {
    setProjetoAberto(projetoAberto === index ? null : index);
  }

  const projeto = [
    {
      imagem: Lume,
      nome: "Lume",
      desc: "marketplace sustentável Lume, onde usuários podem navegar e comprar produtos ecológicos.",
      link: "https://lume-deploy.vercel.app/",
    },
    {
      imagem: Hc,
      nome: "HC Acessibility",
      desc: "Site de Atendimento Hospitalar, uma aplicação web desenvolvida com foco na melhoria do atendimento aos pacientes por meio de uma interface moderna, responsiva e integrada com inteligência artificial para suporte automatizado. Este projeto tem como caso de uso o Hospital das Clínicas.",
      link: "https://hc-accessibility-fiap.github.io/front-end-HC/",
    },
    {
      imagem: GeoAlert,
      nome: "GeoAlert",
      desc: "uma aplicação web desenvolvida com foco no auxilio, prevenção e ajuda por meio de uma interface moderna, responsiva e integrado com diversos meios de ajuda e prevenção, para evitar um desastre maior, ou até evitar que o mesmo aconteça, por meio de auto ajuda, e um mapa mostrando os principais alertas em tempo real, e a ajuda humanitária.",
      link: "https://gs-natural-solutions-fiap.github.io/front-end/",
    },
    {
      imagem: prevTempo,
      nome: "Previsão do Tempo",
      desc: "Este é um projeto simples de Previsão do Tempo, desenvolvido com HTML, CSS e JavaScript. O principal objetivo foi praticar o consumo de APIs, treinar funções em JavaScript, além de melhorar minha lógica de programação e habilidades com HTML e CSS. #✨ Funcionalidades",
      link: "https://murilomacedosilva.github.io/Site-Previsao-do-tempo/",
    },
    {
      imagem: conversor,
      nome: "Conversor de Moedas",
      desc: "Aplicação simples para converter moedas em tempo real usando React, Tailwind CSS e uma API de câmbio.",
      link: "https://conversor-moeda-react-three.vercel.app/",
    },
    {
      imagem: tradutor,
      nome: "Tradutor",
      desc: "Tradutor de idiomas feito com React, usando a API MyMemory. Permite escolher os idiomas, digitar um texto e ver a tradução em tempo real. Conta com loading, tratamento de erros e botão para inverter os idiomas. Interface simples e responsiva.",
      link: "https://tradutor-react-project.vercel.app/",
    },
    {
      imagem: gerenciador,
      nome: "Gerenciador de Tarefas",
      desc: "Este projeto é um Gerenciador de Tarefas desenvolvido com React, com o objetivo de praticar e consolidar meus conhecimentos em hooks (useState e useEffect), React Router, manipulação de funções em JavaScript e uso do localStorage para persistência de dados no navegador. #✨ Funcionalidades",
      link: "https://gerenciador-tarefas-ashen.vercel.app/",
    },
    {
      imagem: mapaCarreira,
      nome: "Mapa de Carreira",
      desc: "Este é meu mapa de carreira. Nele , você pode encontrar informações sobre minhas habilidades, experiências e objetivos profissionais.",
      link: "https://murilomacedosilva.github.io/MapaDeCarreira/",
    },
  ];

  projeto;

  return (
    <section className="-bg-linear-210 from-gray-50/90 from-50% to-50% to-black/90  w-full flex flex-col items-center">
      <h2 className=" text-gray-900 text-shadow-lg text-shadow-white/30 font-light text-[50px]">
        Projetos
      </h2>
      <div className="flex flex-col items-center justify-around w-[full] p-13 gap-14 mt-17 sm:grid sm:p-23 md:grid md:grid-cols-3 md:p-10 xl:grid-cols-3 xl:p-20">
        {projeto.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-2xl bg-gray-50 cursor-pointer pb-4 rounded-2xl hover:scale-105 transition duration-300"
            onClick={() => verProjeto(index)}
          >
            <img src={item.imagem} />
            <h2 className="text-gray-900 text-shadow-lg text-shadow-white/30 font-normal text-[23px] md:text-[20px]">
              {item.nome}
            </h2>
            {projetoAberto === index && (
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="w-[90%] text-center justify-center">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer p-[5px] bg-amber-300 border items-center justify-center w-[90%] shadow-2xl flex rounded-3xl h-[45px]"
                >
                  Saiba Mais
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center p-14">
        <a
          href="https://murilomacedosilva.github.io/MapaDeCarreira/"
          target="_blank"
          className="cursor-pointer p-[5px] bg-amber-300 border items-center justify-center max-w-[100%] min-w-[300px] shadow-2xl flex rounded-3xl h-[45px] hover:scale-105 transition duration-300"
        >
          Mapa de Carreira
        </a>
      </div>
    </section>
  );
}

export default Projetos;
