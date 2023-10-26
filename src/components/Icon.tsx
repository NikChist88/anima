import styled, { css } from 'styled-components'
import sprite from '../assets/icons/sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  $burger?: boolean
}

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      width={props.width}
      height={props.height}
      $burger={props.$burger}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </StyledIcon>
  )
}

const StyledIcon = styled.svg<{ $burger?: boolean }>`
  ${({ $burger }) =>
    $burger &&
    css`
      @media screen and (min-width: 768px) {
        display: none;
      }
    `}
`
