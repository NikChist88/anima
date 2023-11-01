import { Container } from '../../../components/styled/Container'
import { S } from './Feedback_Styles'
import { Button } from '../../../components/styled/Button'
import Flex from 'styled-flex-component'
import { SliderArrows } from '../../../components/sliderArrows/SliderArrows'

export const Feedback: React.FC = () => {
  return (
    <S.Feedback>
      <Container>
        <S.FeedbackTitle>Остались вопросы?</S.FeedbackTitle>
        <S.FeedbackTitle>Свяжитесь с нами, мы вам поможем!</S.FeedbackTitle>
        <S.FeedbackText>
          Заполните форму и мы свяжемся с Вами в ближайшее время
        </S.FeedbackText>
        <S.FeedbackForm>
          <Flex>
            <S.FeedbackField placeholder="Ваше имя" />
            <S.FeedbackField placeholder="Ваш телефон" type="tel" />
            <Button type="submit" width="240px" height="50px" color="#fff">
              Отправить
            </Button>
          </Flex>
          <S.FeedbackCheck>
            <S.FeedbackCheckbox id="check" type="checkbox" />
            <S.FeedbackLabel htmlFor="check">
              Согласен на обработку <a href="#">персональных данных</a>
            </S.FeedbackLabel>
          </S.FeedbackCheck>
        </S.FeedbackForm>
      </Container>
    </S.Feedback>
  )
}
