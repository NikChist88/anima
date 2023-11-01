import styled from 'styled-components'
import logo from '../assets/images/logo.png'

export const Logo: React.FC = () => {
  return (
    <StyledLogo href="#">
      <LogoImage src={logo} alt="Logotype Anima Company" />
    </StyledLogo>
  )
}

export const StyledLogo = styled.a`
  max-width: 270px;
  width: 100%;
  height: 110px;
`

const LogoImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`
