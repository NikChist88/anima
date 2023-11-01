import { S } from './SliderArrows_Styles'
import { Icon } from '../Icon'

export const SliderArrows: React.FC = () => {
  return (
    <S.SliderArrows>
      <S.SliderArrow type="button">
        <Icon iconId="arrow-slider" width="16px" height="16px" />
      </S.SliderArrow>
      <S.SliderArrow type="button">
        <Icon iconId="arrow-slider" width="16px" height="16px" />
      </S.SliderArrow>
    </S.SliderArrows>
  )
}
