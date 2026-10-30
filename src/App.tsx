import * as S from "../src/components/conteiner/styles";
import { Home } from "./page/home";
import { Projetos } from "./page/projeto";
import { SobreMim } from "./page/sobre-mim";
import { NavBar } from "./ui/navBar";

export const App = () => {
  return (
    <S.conteinerGlobal>
      <NavBar/>
      <Home/>
      <Projetos/>
      <SobreMim/>
    </S.conteinerGlobal>
  )
}
