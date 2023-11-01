import { S } from './BurgerButton_Styles'

type BurgerButtonPropsType = {
  isOpen: boolean
  onClick: () => void
}

export const BurgerButton: React.FC<BurgerButtonPropsType> = (
  props: BurgerButtonPropsType
) => {
  return (
    <S.BurgerButton isOpen={props.isOpen} onClick={props.onClick}>
      <span></span>
    </S.BurgerButton>
  )
}
