import styled from 'styled-components'

export const FooterMenu = styled.nav`
  flex: 0 1 820px;
  display: flex;
  justify-content: space-between;
  gap: 0 30px;

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 30px 0;
  }
`

export const FooterMenuList = styled.ul``

export const FooterMenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`

export const FooterMenuItem = styled.li`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FooterMenuLink = styled.a`
  font-size: 16px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.6);
  transition: color ease-in 0.3s;

  &:hover {
    color: #fff;
  }

  span {
    color: #fff;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`
