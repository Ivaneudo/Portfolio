import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Layout/GlobalTheme'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    /* 1. Remove qualquer margem/padding padrão do navegador */
    margin: 0;
    padding: 0;
    
    /* 2. Trava a rolagem/arraste no eixo horizontal */
    overflow-x: hidden;
    
    /* Garante largura total sem estourar a tela */
    width: 100%;
  }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)


