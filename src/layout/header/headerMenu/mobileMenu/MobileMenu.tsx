import { useState } from 'react'
import { S } from '../HeaderMenu_Styles'
import { Menu } from '../Menu'
import { BurgerButton } from '../../../../components/burgerBtn/BurgerButton'
import { HeaderLinks } from '../headerLinks/HeaderLinks'
import Flex from 'styled-flex-component'

export const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <S.MobileMenu>
      <S.MobileMenuBody
        $isopen={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      >
        <Menu />
      </S.MobileMenuBody>
      <Flex alignCenter>
        <HeaderLinks />
        <BurgerButton $isopen={openMenu} onClick={toggleMenu} />
      </Flex>
    </S.MobileMenu>
  )
}
