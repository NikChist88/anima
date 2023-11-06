import styled from 'styled-components'

const SliderArrows = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;

  & > button:last-child {
    transform: rotate(180deg);
  }
`

const SliderArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 0.5px solid #ffffff;
  background-color: transparent;
  transition: background-color ease-in 0.3s, border-color ease-in 0.3s;
  cursor: pointer;

  svg {
    color: #ffffff;
  }

  &:hover {
    border-color: transparent;
    background-color: #28553f;
  }
`

export const S = {
  SliderArrows,
  SliderArrow,
}
