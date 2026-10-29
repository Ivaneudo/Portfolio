import styled from "@emotion/styled";

export const TextSpan = styled.span `
  color: ${({theme}) => theme.colors.bold};
`;

export const Cargo = styled.h1 `
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSizes.h1};
  font-family: ${({theme}) => theme.fonts.jetbrains};
`;

export const Resumo = styled.p `
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSizes.medium};
  font-family: ${({theme}) => theme.fonts.arial};
  font-weight: bold;
`;