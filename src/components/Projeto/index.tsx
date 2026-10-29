import type { ReactNode } from "react";
import { Projetos } from "../conteiner/styles"; // Certifique-se de criar esses novos estilos
import { Descricao, TituloProjeto } from "../Text/styles";
import { FaGithub, FaLink } from "react-icons/fa"; 
import { Img, LinksContainer, TechContainer } from "./styles";

interface ProjetoProp {
  nome: string;
  resumo: string;
  url?: string; // Tornando opcional
  link?: string; // Tornando opcional
  imagem: string;
  altImg: string;
  tecnologias?: ReactNode[]; // Array para receber os ícones das tecnologias
}

export const Projeto = ({ nome, resumo, url, link, imagem, altImg, tecnologias }: ProjetoProp) => {
  return (
    <Projetos>
      <div>
        <TituloProjeto>{nome}</TituloProjeto>
        
        {/* Renderiza o container de tecnologias apenas se a prop for passada e tiver itens */}
        {tecnologias && tecnologias.length > 0 && (
          <TechContainer>
            {tecnologias.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </TechContainer>
        )}

        <Descricao>{resumo}</Descricao>

        {/* Renderiza os ícones de link apenas se as props url/link forem fornecidas */}
        <LinksContainer>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="#ff0000" /* Ajuste a cor/tamanho conforme seu design */ />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaLink size={30} color="#ff0000" />
            </a>
          )}
        </LinksContainer>
      </div>

      <div>
        <Img src={imagem} alt={altImg}/>
      </div>
    </Projetos>
  );
};