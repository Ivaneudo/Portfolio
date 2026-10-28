import '@emotion/react';
// Importe o seu theme do caminho correto de onde ele está
import { theme } from './Layout/GlobalTheme'; 

// Pegamos o tipo exato do seu objeto theme
type AppTheme = typeof theme;

// Sobrescrevemos a interface padrão do Emotion com a nossa
declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
