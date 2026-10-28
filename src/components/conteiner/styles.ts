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