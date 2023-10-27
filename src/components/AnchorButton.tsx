import styled from 'styled-components'

export const AnchorButton = () => {
  return (
    <StyledAnchorButton href='#header'>
      <span></span>
    </StyledAnchorButton>
  )
}

const StyledAnchorButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #28553f;
  cursor: pointer;
  position: fixed;
  right: 50px;
  bottom: 50px;
  transform: rotate(270deg);
  transition: background-color ease-in 0.3s;

  span {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 2px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 15px;

    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 2px;
      top: -3px;
      right: -3px;
      background-color: #fff;
      transform: rotate(45deg);
      border-radius: 15px;
    }

    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 2px;
      top: 3px;
      right: -3px;
      background-color: #fff;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(-45deg);
      border-radius: 15px;
    }
  }

  &:hover {
    background-color: #438f6a;
  }
`
