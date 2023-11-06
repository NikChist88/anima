import styled, { css } from 'styled-components'
import Flex from 'styled-flex-component'

// Menu
const MenuItem = styled.li`
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

const MenuLink = styled.a`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
`

// Desktop Menu
const DesktopMenu = styled.nav`
  max-width: 920px;
  width: 100%;
  padding-bottom: 30px;

  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
  }
`

// Mobile Menu
const MobileMenu = styled.nav`
  align-self: center;

  ${Flex} {
    gap: 0 15px;
  }

  ${MenuLink} {
    font-size: 24px;
  }
`

const MobileMenuBody = styled.div<{ $isopen: boolean }>`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    overflow-y: scroll;
    transform: translateY(-100%);
    transition: transform ease-in 0.3s;

    ${({ $isopen }) =>
      $isopen &&
      css<{ $isopen: boolean }>`
        transform: translateY(0);
      `}
  }
`

export const S = {
  MenuItem,
  MenuLink,
  DesktopMenu,
  MobileMenu,
  MobileMenuBody,
}
