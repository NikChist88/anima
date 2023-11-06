import { SectionBlock } from '../../../components/sectionBlock/SectionBlock'
import { S } from './Hero_Styles'
import image from '../../../assets/images/main-bg.webp'
import { Container } from '../../../components/styled/Container'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../../styles/carousel.css'

const Slide = () => {
  return (
    <S.HeroSlide>
      <SectionBlock />
      <S.HeroImage>
        <img src={image} alt="Image" />
      </S.HeroImage>
    </S.HeroSlide>
  )
}

const items = [<Slide />, <Slide />, <Slide />]

export const Hero: React.FC = () => {
  return (
    <S.Hero>
      <S.HeroBody>
        <AliceCarousel items={items} controlsStrategy="alternate" />
      </S.HeroBody>
    </S.Hero>
  )
}
