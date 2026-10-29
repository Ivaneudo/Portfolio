import styled from "@emotion/styled";

export const conteinerGlobal = styled.div `
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
`;

export const containerSection = styled.div `
  width: 100vw;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;