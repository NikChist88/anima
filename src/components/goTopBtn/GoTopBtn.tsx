import { S } from './GoTopBtn_Styles'
import { Icon } from '../Icon'

export const GoTopBtn: React.FC = () => {
  return (
    <S.GoTopBtn href="#header" aria-label='Go Top Button'>
      <Icon iconId='arrow-gotop' width='29px' height='28px' />
    </S.GoTopBtn>
  )
}
