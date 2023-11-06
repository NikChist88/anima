import styled from 'styled-components'
import { StyledLogo } from '../../components/Logo'

const Header = styled.header`
  position: fixed;
  height: 160px;
  width: 100%;
  background-color: #000000;
  z-index: 100;
  padding: 15px 0;

  @media screen and (max-width: 768px) {
    height: 120px;
  }
  @media screen and (max-width: 576px) {
    height: 90px;
  }

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
