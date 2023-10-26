import { Wrapper } from './components/styled/Wrapper.styled'
import { Header } from './layout/header/Header'
import { Footer } from './layout/footer/Footer'

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <main></main>
      <Footer />
    </Wrapper>
  )
}
