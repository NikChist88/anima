import styled from 'styled-components'
import { StyledLogo } from '../../components/Logo'

const Header = styled.header`
  height: 100%;
  padding: 15px 0;

  ${StyledLogo} {
    margin-right: clamp(15px, 2.8vw, 30px);

    @media screen and (max-width: 768px) {
      max-width: 200px;
      height: 80px;
    }
    @media screen and (max-width: 576px) {
      max-width: 140px;
      height: 60px;
    }
  }
`

export const S = {
  Header,
}
