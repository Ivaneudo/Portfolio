import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa"
import { ProjetosDiv } from "../components/conteiner/styles"
import { Projeto } from "../components/Projeto/index"

export const Projetos = () => {
  return (
    <ProjetosDiv id="projetos">
      <Projeto 
        nome="Raizes Digitais"
        imagem="src\Img\vera-crianca.png"
        altImg="site do movimento vera criança"
        resumo="Projeto idealizado por m im e pela turma de Informática da EEEP Joaquim Antônio Albano (2023-2025), onde liderei e gerenciei duas ações principais: o desenvolvimento do site para o Movimento Vera Criança e a realização de uma imersão no mundo da tecnologia para turmas do 9º ano do Ensino Fundamental."
        url="https://github.com/veracrianca/movimento"
        link="https://movimentoveracrianca.vercel.app/"
        tecnologias={[
          <FaHtml5 size={24} color="#E34F26" title="HTML5" />, 
          <FaCss3Alt size={24} color="#1572B6" title="CSS3" />, 
          <FaJs size={24} color="#F7DF1E" title="JavaScript" />
        ]}
      />
    </ProjetosDiv>
  )
}
