import styled from 'styled-components'

const GoTopBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #28553f;
  cursor: pointer;
  position: fixed;
  right: 15px;
  bottom: 15px;
  transition: background-color ease-in 0.3s;
  color: #ffffff;

  &:hover {
    background-color: #438f6a;
  }
`

export const S = {
  GoTopBtn,
}
