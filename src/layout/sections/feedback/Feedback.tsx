import { Container } from '../../../components/styled/Container.styled'
import { StyledFeedback, FeedbackTitle, FeedbackText } from './Feedback.styled'
import {
  FeedbackForm,
  FeedbackField,
  FeedbackCheck,
  FeedbackLabel,
  FeedbackCheckbox,
} from './FeedbackForm.styled'
import { Button } from '../../../components/styled/Button.styled'
import Flex from 'styled-flex-component'

export const Feedback = () => {
  return (
    <StyledFeedback>
      <Container>
        <FeedbackTitle>Остались вопросы?</FeedbackTitle>
        <FeedbackTitle>Свяжитесь с нами, мы вам поможем!</FeedbackTitle>
        <FeedbackText>
          Заполните форму и мы свяжемся с Вами в ближайшее время
        </FeedbackText>
        <FeedbackForm>
          <Flex>
            <FeedbackField placeholder="Ваше имя" />
            <FeedbackField placeholder="Ваш телефон" type="tel" />
            <Button type="submit" width="240px" height="50px" color="#fff">
              Отправить
            </Button>
          </Flex>
          <FeedbackCheck>
            <FeedbackCheckbox id="check" type="checkbox" />
            <FeedbackLabel htmlFor="check">
              Согласен на обработку <a href="#">персональных данных</a>
            </FeedbackLabel>
          </FeedbackCheck>
        </FeedbackForm>
      </Container>
    </StyledFeedback>
  )
}
