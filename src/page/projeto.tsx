import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa"
import { ProjetosDiv } from "../components/conteiner/styles"
import { Projeto } from "../components/Projeto/index"
import { TextH2 } from "../components/Text/styles"

export const Projetos = () => {
  return (
    <ProjetosDiv id="projetos">
      <TextH2>Projetos</TextH2>
      <Projeto 
        nome="Raizes Digitais"
        imagem="src\Img\vera-crianca.png"
        altImg="site do movimento vera criança"
        resumo="Projeto idealizado por m im e pela turma de Informática da EEEP Joaquim Antônio Albano (2023-2025), onde liderei e gerenciei duas ações principais: o desenvolvimento do site para o Movimento Vera Criança e a realização de uma imersão no mundo da tecnologia para turmas do 9º ano do Ensino Fundamental."
        url="https://github.com/veracrianca/movimento"
        link="https://movimentoveracrianca.vercel.app/"
        tecnologias={[
          <img 
            src="https://skillicons.dev/icons?i=html" 
            height="30" 
            alt="html5"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=css" 
            height="30" 
            alt="css"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=js" 
            height="30" 
            alt="javascript"  
          />,
        ]}
      />
      <Projeto 
        nome="Limpo Serviço"
        imagem="src\Img\limpo.png"
        altImg="site da Limpo Serviços"
        resumo="Site institucional desenvolvido com o objetivo de aprofundar estudos na tecnologia Angular.js, redesenhando e aprimorando a estrutura e experiência visual de uma plataforma prestadora de serviços."
        url="https://github.com/Ivaneudo/Limpo"
        link="https://limpo.vercel.app/"
        tecnologias={[
          <img 
            src="https://skillicons.dev/icons?i=angular" 
            height="30" 
            alt="Angular"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=css" 
            height="30" 
            alt="css"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=ts" 
            height="30" 
            alt="typescript"  
          />,
        ]}
      />
      <Projeto 
        nome="Fica Comigo"
        imagem="src\Img\fica-comigo.png"
        altImg="Aplicativo do Fica Comigo"
        resumo="Aplicativo desenvolvido durante um Hackathon Flash na disciplina de Gestão de Startups, no qual atuei como desenvolvedor principal. O objetivo do projeto é oferecer suporte a pessoas em situação de vulnerabilidade psicológica por meio de estratégias de redução de ansiedade, contato com voluntários e direcionamento rápido para canais de emergência como CVV e SAMU."
        url="https://github.com/Ivaneudo/fica-comigo"
        tecnologias={[
          <img 
            src="https://skillicons.dev/icons?i=react" 
            height="30" 
            alt="css"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=css" 
            height="30" 
            alt="css"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=ts" 
            height="30" 
            alt="typescript"  
          />,
        ]}
      />
      <Projeto 
        nome="Arch + Hyprland"
        imagem="src\Img\arch.png"
        altImg="Interface do Hyprland"
        resumo="Repositório desenvolvimento para auxiliar novos usuários do mundo Arch a conseguir um sistemas simples, bonito e funcional. O repositório também é um meio de conseguir recuperar o sistema em casos de insidentes. "
        url="https://github.com/Ivaneudo/fica-comigo"
        tecnologias={[
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" 
            height="30" 
            alt="Lua"  
          />,
          <img 
            src="https://skillicons.dev/icons?i=css" 
            height="30" 
            alt="css"  
          />,
        ]}
      />
    </ProjetosDiv>
  )
}
