import styled from 'styled-components'

type ButtonPropsType = {
  width?: string
  height?: string
  color?: string
  hover?: string
}

export const Button = styled.button<ButtonPropsType>`
  font-family: 'Raleway';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  transition: background-color ease-in 0.3s, color ease-in 0.3s;
  cursor: pointer;

  max-width: ${({ width }) => width || '290px'};
  height: ${({ height }) => height || '70px'};
  background-color: ${({ color }) => color || '#28553f'};

  &:hover {
    background-color: ${({ hover }) => hover || '#173125'};
  }
`
