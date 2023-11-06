import { footerMenuItems } from '../../../data/data'
import { Socials } from '../../../components/socials/Socials'
import { S } from './FooterMenu_Styles'

export const FooterMenu: React.FC = () => {
  return (
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
  )
}
