import styled from 'styled-components'
import { Button } from '../../../components/styled/Button'
import Flex from 'styled-flex-component'
import image from '../../../assets/images/feedback.webp'

const Feedback = styled.section`
  padding: 70px 0;
  min-height: 370px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.93) 40.01%,
      rgba(0, 0, 0, 0.7) 66.12%,
      rgba(255, 255, 255, 0) 87%
    ),
    url(${image}) no-repeat center / cover;

  @media screen and (max-width: 576px) {
    padding: 35px 0;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.93) 40.01%,
        rgba(0, 0, 0, 0.7) 66.12%,
        rgba(255, 255, 255, 0) 140%
      ),
      url(${image}) no-repeat center / cover;
  }

  ${Button} {
    font-size: 15px;
    font-weight: 700;
    color: #000;
    text-transform: capitalize;

    &:hover {
      color: #fff;
      background-color: transparent;
      border: 1px solid rgba(243, 243, 243, 0.7);
    }

    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
  }
`

const FeedbackTitle = styled.h2`
  font-size: calc((100vw - 320px) / (1920 - 320) * (28 - 24) + 24px);
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const FeedbackText = styled.p`
  font-size: calc((100vw - 320px) / (1920 - 320) * (18 - 16) + 16px);
  margin-bottom: 30px;
`

const FeedbackForm = styled.form`
  ${Flex} {
    gap: 0 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px 0;
    }
  }
`

const FeedbackField = styled.input`
  max-width: 240px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: 1px solid rgba(243, 243, 243, 0.7);
  padding: 15px 20px;
  color: #f3f3f3;
  font-size: 16px;

  &::placeholder {
    font-size: 14px;
    color: #f3f3f3;
  }

  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
`

const FeedbackCheck = styled.div`
  display: flex;
  align-items: center;
`

const FeedbackLabel = styled.label`
  font-size: calc((100vw - 320px) / (1920 - 320) * (14 - 12) + 12px);
  color: #f3f3f3;

  a {
    text-decoration-line: underline;
    color: #f3f3f3;
  }
`

const FeedbackCheckbox = styled.input`
  margin-right: 10px;
`

export const S = {
  Feedback,
  FeedbackTitle,
  FeedbackText,
  FeedbackForm,
  FeedbackField,
  FeedbackCheck,
  FeedbackLabel,
  FeedbackCheckbox,
}
