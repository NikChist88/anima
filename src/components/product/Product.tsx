import { S } from './Product_Styles'
import { Button } from '../styled/Button'
import image from '../../assets/images/card-img.webp'

export const Product: React.FC = () => {
  return (
    <S.Product>
      <S.ProductImage>
        <a href="#">
          <img src={image} alt="Card Image" />
        </a>
        <span>Акция</span>
      </S.ProductImage>
      <S.ProductTitle>Kratki</S.ProductTitle>
      <S.ProductName href='#'>Каминная топка Kratki ZUZIA LPT</S.ProductName>
      <S.ProductPrices>
        <S.ProductPrice>16 490 руб.</S.ProductPrice>
        <S.ProductPrice>16 490 руб.</S.ProductPrice>
      </S.ProductPrices>
      <S.ProductBtn>
        <Button as="a">Подробнее</Button>
      </S.ProductBtn>
    </S.Product>
  )
}
