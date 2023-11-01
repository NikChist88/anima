import { useState } from 'react'
import { S } from '../HeaderMenu_Styles'
import { Menu } from '../Menu'
import { BurgerButton } from '../../../../components/burgerBtn/BurgerButton'
import { HeaderLinks } from '../headerLinks/HeaderLinks'
import Flex from 'styled-flex-component'

export const MobileMenu: React.FC = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu)
  }

  return (
    <S.MobileMenu>
      <Menu />
      <Flex alignCenter>
        <HeaderLinks />
        <BurgerButton isOpen={isOpenMenu} onClick={toggleMenu} />
      </Flex>
    </S.MobileMenu>
  )
}
