import { useState } from 'react'
import { Container } from '../../components/styled/Container.styled'
import Flex from 'styled-flex-component'
import { StyledHeader, HeaderLink } from './Header.styled'
import {
  HeaderMenu,
  HeaderMenuList,
  HeaderMenuItem,
  HeaderMenuLink,
} from './headerMenu/HeaderMenu.styled'
import { Logo } from '../../components/Logo'
import { Icon } from '../../components/Icon'
import { Burger } from '../../components/styled/Burger.styled'

export const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu)
  }

  return (
    <StyledHeader>
      <Container>
        <Flex justifyEnd alignCenter>
          <HeaderLink href="#">
            <Icon iconId="wup" width="20px" height="20px" />
          </HeaderLink>
          <HeaderLink $phone href="tel:749925862533">
            <Icon iconId="phone" width="20px" height="20px" />
            +7 (499) 258-625-33
          </HeaderLink>
          <HeaderLink href="#">
            <Icon iconId="search" width="20px" height="20px" />
          </HeaderLink>
          <Burger $isOpen={isOpenMenu} onClick={toggleMenu}>
            <span></span>
          </Burger>
        </Flex>
        <Flex justifyBetween>
          <Logo />
          <HeaderMenu>
            <HeaderMenuList>
              <HeaderMenuItem>
                <HeaderMenuLink href="#">Каталог</HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <HeaderMenuLink href="#">Акции</HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <HeaderMenuLink href="#">Блог</HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <HeaderMenuLink href="#">Сотруднечество</HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <HeaderMenuLink href="#">Оплата и доставка</HeaderMenuLink>
              </HeaderMenuItem>
            </HeaderMenuList>
          </HeaderMenu>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
