import { Container } from '../../components/styled/Container'
import { Logo } from '../../components/Logo'
import { S } from './Footer_Styles'
import { FooterMenu } from './footerMenu/FooterMenu'

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterBody>
          <Logo />
          <FooterMenu />
        </S.FooterBody>
      </Container>
      <S.FooterAddress>
        674 Gonzales Drive. Washington, PA 15301
      </S.FooterAddress>
    </S.Footer>
  )
}
