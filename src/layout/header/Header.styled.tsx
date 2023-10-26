import styled, { css } from 'styled-components'
import Flex from 'styled-flex-component'
import { StyledLogo } from '../../components/Logo'

export const StyledHeader = styled.header`
  max-height: 150px;
  height: 100%;

  ${Flex}:first-child {
    padding-top: 20px;
    gap: 0 15px;

    @media screen and (max-width: 768px) {
      padding-bottom: 20px;
    }
    @media screen and (max-width: 576px) {
      padding-bottom: 0;
    }
  }

  ${StyledLogo} {
    margin-right: 30px;

    @media screen and (max-width: 576px) {
      max-width: 200px;
      height: 80px;
      margin-top: -20px;
    }
    @media screen and (max-width: 480px) {
      max-width: 140px;
      height: 60px;
    }
  }
`
export const HeaderLink = styled.a<{ $phone?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 19px;
  color: #fff;
  transition: color ease-in 0.3s;

  &:hover {
    color: #28553f;
  }

  ${({ $phone }) =>
    $phone &&
    css`
      svg {
        margin-right: 5px;

        @media screen and (max-width: 576px) {
          margin-right: 0;
        }
      }
    `}

  @media screen and (max-width: 576px) {
    font-size: 0;
  }
`
