import styled from 'styled-components'

export const FooterSocial = styled.ul`
  display: flex;
  gap: 0 12px;
  margin-top: 20px;
`

export const FooterSocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.12);
  cursor: pointer;

  &:hover > a {
    color: #28553f;
  }

  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`

export const FooterSocialLink = styled.a`
  transition: color ease-in 0.3s;
  color: #fff;
`
