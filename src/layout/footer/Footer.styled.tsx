import styled from 'styled-components'
import { StyledLogo } from '../../components/Logo'

export const StyledFooter = styled.footer`
  background-color: #000;

  ${StyledLogo} {
    margin-right: 50px;

    @media screen and (max-width: 860px) {
      max-width: 200px;
      height: 80px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 0 30px 0;
    }
    @media screen and (max-width: 576px) {
      max-width: 140px;
      height: 60px;
    }
  }
`

export const FooterBody = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const FooterAddress = styled.span`
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`