import { useEffect, useState } from 'react'
import { Container } from '../../components/styled/Container'
import Flex from 'styled-flex-component'
import { Logo } from '../../components/Logo'
import { S } from './Header_Styles'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'
import { HeaderLinks } from './headerMenu/headerLinks/HeaderLinks'

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <S.Header id="header">
      <Container>
        {width > breakpoint && <HeaderLinks />}
        <Flex justifyBetween>
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </Flex>
      </Container>
    </S.Header>
  )
}
