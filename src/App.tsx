import { Wrapper } from './components/styled/Wrapper'
import { Header } from './layout/header/Header'
import { Feedback } from './layout/sections/feedback/Feedback'
import { Footer } from './layout/footer/Footer'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn'

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Feedback />
      </main>
      <Footer />
      <GoTopBtn />
    </Wrapper>
  )
} 
