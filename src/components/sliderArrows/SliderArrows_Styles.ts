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
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: #f9f9f9;
  transition: background-color ease-in 0.3s;
  cursor: pointer;

  svg {
    color: #b1b1b1;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`

export const S = {
  SliderArrows,
  SliderArrow,
}
