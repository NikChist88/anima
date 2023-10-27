import { Wrapper } from './components/styled/Wrapper.styled'
import { Header } from './layout/header/Header'
import { Feedback } from './layout/sections/feedback/Feedback'
import { Footer } from './layout/footer/Footer'
import { AnchorButton } from './components/AnchorButton'

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Feedback />
      </main>
      <Footer />
      <AnchorButton />
    </Wrapper>
  )
}
