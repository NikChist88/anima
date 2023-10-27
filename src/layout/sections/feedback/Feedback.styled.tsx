import styled from 'styled-components'
import { Button } from '../../../components/styled/Button.styled'
import image from '../../../assets/images/feedback.webp'

export const StyledFeedback = styled.section`
  padding: 70px 0;
  min-height: 370px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.93) 40.01%,
      rgba(0, 0, 0, 0.7) 66.12%,
      rgba(255, 255, 255, 0) 87.98%
    ),
    url(${image}) no-repeat center / cover;

  @media screen and (max-width: 576px) {
    padding: 35px 0;
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

export const FeedbackTitle = styled.h2`
  font-size: calc((100vw - 320px) / (1920 - 320) * (28 - 24) + 24px);
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
`

export const FeedbackText = styled.p`
  font-size: calc((100vw - 320px) / (1920 - 320) * (18 - 16) + 16px);
  margin-bottom: 30px;
`
