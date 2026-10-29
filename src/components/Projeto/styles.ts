import styled from '@emotion/styled';

export const TechContainer = styled.div`
  display: flex;
  gap: 8px; /* Espaço entre os ícones das tecnologias */
  margin: 10px 0;
  color: white; /* ou a cor base que preferir */
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 16px; /* Espaço entre o ícone do Github e do Link */
  margin-top: 20px;
  
  a {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Img = styled.img `
  width: 900px;
`;