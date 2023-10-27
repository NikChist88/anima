import styled from 'styled-components'
import Flex from 'styled-flex-component'

export const FeedbackForm = styled.form`
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

export const FeedbackField = styled.input`
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

export const FeedbackCheck = styled.div`
  display: flex;
  align-items: center;
`

export const FeedbackLabel = styled.label`
  font-size: calc((100vw - 320px) / (1920 - 320) * (14 - 12) + 12px);
  color: #f3f3f3;

  a {
    text-decoration-line: underline;
    color: #f3f3f3;
  }
`

export const FeedbackCheckbox = styled.input`
  margin-right: 10px;
`
