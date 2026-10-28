import styled from "@emotion/styled";

export const navDiv = styled.div `
  width: 98vw;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 999;
  
  background-color: ${({ theme }) => theme.colors.background};
`;

export const navList = styled.ul`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  height: 100%;
  gap: 1.5rem;
  
  list-style: none;
  padding: 0; 
  margin: 0;
`;