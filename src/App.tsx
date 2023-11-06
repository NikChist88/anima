import styled from 'styled-components'
import { Wrapper } from './components/styled/Wrapper'
import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { Feedback } from './layout/sections/feedback/Feedback'
import { Footer } from './layout/footer/Footer'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn'

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        {/* <Hero /> */}
        {/* <Feedback /> */}
      </Main>
      <Footer />
      <GoTopBtn />
    </Wrapper>
  )
}

const Main = styled.main``
