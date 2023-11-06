import { S } from './SectionBlock_Styles'
import { Button } from '../styled/Button'

type SectionBlockPropsType = {
  width?: string
  height?: string
  title?: string
  text?: string
  buttons?: number
}

export const SectionBlock: React.FC<SectionBlockPropsType> = (
  props: SectionBlockPropsType
) => {
  return (
    <S.SectionBlock>
      <S.SectionBlockLabel>Камень с душой</S.SectionBlockLabel>
      <S.SectionBlockTitle>
        Каменные изделия <span>для вашего дома</span>
      </S.SectionBlockTitle>
      {/* <S.SectionBlockText>
        Учитывая ключевые сценарии поведения, обучения кадров влечет за собой
        процесс внедрения и модернизации распределения
      </S.SectionBlockText> */}
      <S.SectionBlockButtons>
        <Button as="a" href="#">
          Рассчитать стоимость
        </Button>
        <Button as="a" href="#" color="#141414">
          Связаться с нами
        </Button>
      </S.SectionBlockButtons>
    </S.SectionBlock>
  )
}
