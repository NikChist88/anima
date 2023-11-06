import styled from 'styled-components'
import image from '../../../assets/images/main-bg.webp'
import { SectionBlock } from '../../../components/sectionBlock/SectionBlock_Styles'

const Hero = styled.section`
  padding-top: 160px;
  height: 820px;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.93) 40.86%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${image}), lightgray 50% / cover no-repeat;
`

const HeroBody = styled.div`
  display: flex;
  height: 100%;
`

const HeroSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;

  ${SectionBlock} {
    position: relative;
    left: 230px;
  }
`

const HeroImage = styled.div`
  width: 980px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const S = {
  Hero,
  HeroBody,
  HeroSlide,
  HeroImage,
}
