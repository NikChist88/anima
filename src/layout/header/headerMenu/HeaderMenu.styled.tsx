import styled from 'styled-components'

export const HeaderMenu = styled.nav`
  max-width: 920px;
  width: 100%;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderMenuList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`

export const HeaderMenuItem = styled.li`
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

export const HeaderMenuLink = styled.a`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
`
