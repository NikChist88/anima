import styled from 'styled-components'
import Flex from 'styled-flex-component'

// Desktop Menu
const DesktopMenu = styled.nav`
  max-width: 920px;
  width: 100%;
  padding-bottom: 30px;
`

const HeaderMenuList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
`

const HeaderMenuItem = styled.li`
  position: relative;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    content: '';
    width: 0;
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: width ease-in 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`

const HeaderMenuLink = styled.a`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
`

// Mobile Menu
const MobileMenu = styled.nav`
  ${Flex} {
    gap: 0 15px;
  }

  ${HeaderMenuList} {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    background-color: #000;
    overflow-y: scroll;
    transform: translateY(-100%);
  }

  ${HeaderMenuItem} {
    margin-right: 0;
  }

  ${HeaderMenuLink} {
    font-size: 24px;
  }
`

export const S = {
  DesktopMenu,
  HeaderMenuList,
  HeaderMenuItem,
  HeaderMenuLink,
  MobileMenu,
}
