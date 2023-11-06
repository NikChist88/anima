import styled from 'styled-components'
import { Button } from '../styled/Button'

export const SectionBlock = styled.div`
  max-width: 740px;
  width: 100%;
  height: 360px;
  padding: 65px 40px 55px 100px;
  background-color: #000;
  box-shadow: 0px 0px 33px 9px rgba(255, 255, 255, 0.03);
`

const SectionBlockLabel = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: #9c9c9c;
  margin-bottom: 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: -90px;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: 0.4px;
    background-color: #9c9c9c;
  }
`

const SectionBlockTitle = styled.h1`
  font-size: 50px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 25px;

  span {
    color: #28553f;
  }
`

const SectionBlockText = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 40px;
`

const SectionBlockButtons = styled.div`
  display: flex;
  gap: 0 20px;

  ${Button} {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
  }
`

export const S = {
  SectionBlock,
  SectionBlockLabel,
  SectionBlockTitle,
  SectionBlockText,
  SectionBlockButtons,
}
