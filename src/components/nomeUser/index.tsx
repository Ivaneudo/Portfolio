import * as Y from "../Text/styles"
import * as S from "./styles"

export const Nome = ({...props}) => {
  return (
    <S.userDiv>
      <S.userName>{props.nome} <Y.TextSpan>{props.sobrenome}</Y.TextSpan></S.userName>
    </S.userDiv>
  )
}
