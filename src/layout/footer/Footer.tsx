import { Container } from '../../components/styled/Container'
import { Logo } from '../../components/Logo'
import { S } from './Footer_Styles'
import { footerMenuItems } from '../../data/data'
import { Socials } from '../../components/socials/Socials'

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterBody>
          <Logo />
          <S.FooterMenu>
            {footerMenuItems.map((item, index) => {
              return (
                <S.FooterMenuBody key={item.id}>
                  <S.FooterMenuTitle>{item.title}</S.FooterMenuTitle>
                  <S.FooterMenuList>
                    {item.links.map((link) => {
                      return (
                        <S.FooterMenuItem key={link.id}>
                          <S.FooterMenuLink href={link.href}>
                            {link.title}
                          </S.FooterMenuLink>
                        </S.FooterMenuItem>
                      )
                    })}
                    {index === 2 && <Socials />}
                  </S.FooterMenuList>
                </S.FooterMenuBody>
              )
            })}
          </S.FooterMenu>
        </S.FooterBody>
      </Container>
      <S.FooterAddress>
        674 Gonzales Drive. Washington, PA 15301
      </S.FooterAddress>
    </S.Footer>
  )
}
