import styled from 'styled-components'

const HeaderLinksBody = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 15px;
`

const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 19px;
  color: #fff;
  transition: color ease-in 0.3s;

  &:nth-child(odd) {
    font-size: 0;
  }

  &:hover {
    color: #28553f;
  }

  @media screen and (max-width: 576px) {
    font-size: 0;
  }
`

export const S = {
  HeaderLinksBody,
  HeaderLink,
}
