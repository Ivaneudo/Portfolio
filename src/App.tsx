import * as S from "../src/components/conteiner/styles";
import { Home } from "./page/home";
import { NavBar } from "./ui/navBar";

export const App = () => {
  return (
    <S.conteinerGlobal>
      <NavBar/>
      <Home/>
    </S.conteinerGlobal>
  )
}
