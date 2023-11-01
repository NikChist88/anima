import styled, { css } from 'styled-components'

export const BurgerButton = styled.button<{ isOpen?: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 25px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
    background-color: transparent;

    span,
    &::before,
    &::after {
      content: '';
      transition: all 0.3s ease 0s;
      right: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    span {
      top: calc(50% - 1px);
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        span {
          width: 0;
        }

        &::before {
          top: calc(50% - 1px);
          transform: rotate(-45deg);
        }

        &::after {
          bottom: calc(50% - 1px);
          transform: rotate(45deg);
        }
      `}
  }
`

export const S = {
  BurgerButton,
}
