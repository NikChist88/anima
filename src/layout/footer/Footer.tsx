import styled from 'styled-components'
import { Container } from '../../components/styled/Container.styled'
import { Logo } from '../../components/Logo'
import { StyledFooter, FooterBody, FooterAddress } from './Footer.styled'
import {
  FooterMenu,
  FooterMenuTitle,
  FooterMenuList,
  FooterMenuItem,
  FooterMenuLink,
} from './footerMenu/FooterMenu.styled'
import {
  FooterSocial,
  FooterSocialItem,
  FooterSocialLink,
} from './FooterSocial.styled'
import { Icon } from '../../components/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterBody>
          <Logo />
          <FooterMenu>
            <FooterMenuList>
              <FooterMenuTitle>Меню</FooterMenuTitle>
              <FooterMenuItem>
                <FooterMenuLink href="#">Delivery & returns</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">FAQ</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">Contacts</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">Blog</FooterMenuLink>
              </FooterMenuItem>
            </FooterMenuList>
            <FooterMenuList>
              <FooterMenuTitle>Каталог</FooterMenuTitle>
              <FooterMenuItem>
                <FooterMenuLink href="#">New arrivals</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">Trending now</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">Brands</FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="#">Sales</FooterMenuLink>
              </FooterMenuItem>
            </FooterMenuList>
            <FooterMenuList>
              <FooterMenuTitle>Контакты для связи</FooterMenuTitle>
              <FooterMenuItem>
                <FooterMenuLink href="tel:4055550128">
                  <span>Телефон:</span> (405) 555-0128
                </FooterMenuLink>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuLink href="mailto:hello@createx.com">
                  <span>Почта:</span> hello@createx.com
                </FooterMenuLink>
              </FooterMenuItem>
              <FooterSocial>
                <FooterSocialItem>
                  <FooterSocialLink href="#">
                    <Icon iconId="fb" width="16px" height="16px" />
                  </FooterSocialLink>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLink href="#">
                    <Icon iconId="inst" width="16px" height="16px" />
                  </FooterSocialLink>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLink href="#">
                    <Icon iconId="tel" width="16px" height="16px" />
                  </FooterSocialLink>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLink href="#">
                    <Icon iconId="yout" width="16px" height="16px" />
                  </FooterSocialLink>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLink href="#">
                    <Icon iconId="pint" width="16px" height="16px" />
                  </FooterSocialLink>
                </FooterSocialItem>
              </FooterSocial>
            </FooterMenuList>
          </FooterMenu>
        </FooterBody>
      </Container>
      <FooterAddress>674 Gonzales Drive. Washington, PA 15301</FooterAddress>
    </StyledFooter>
  )
}