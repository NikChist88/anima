import { S } from './BurgerButton_Styles'

type BurgerButtonPropsType = {
  $isopen?: boolean
  onClick?: () => void
}

export const BurgerButton: React.FC<BurgerButtonPropsType> = (
  props: BurgerButtonPropsType
) => {
  return (
    <S.BurgerButton $isopen={props.$isopen} onClick={props.onClick}>
      <span></span>
    </S.BurgerButton>
  )
}
