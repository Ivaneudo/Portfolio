import * as Y from "../TextBold/styles"
import * as S from "./styles"

export const Nome = ({...props}) => {
  return (
    <S.userDiv>
      <S.userName>{props.nome} <Y.textSpan>{props.sobrenome}</Y.textSpan></S.userName>
    </S.userDiv>
  )
}
