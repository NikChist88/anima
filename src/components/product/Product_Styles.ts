import styled from 'styled-components'
import { Button } from '../styled/Button'

const Product = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
  min-height: 445px;
  padding: 15px;
  background-color: #fff;
`

const ProductImage = styled.div`
  position: relative;
  padding-bottom: 88%;
  margin-bottom: 25px;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ease-in 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 85px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: #000;
    font-weight: 300;
    background-color: rgb(255, 255, 255, 0.45);
  }
`

const ProductTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: #28553f;
  margin-bottom: 5px;
`

const ProductName = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #000;
  margin-bottom: 15px;
  transition: color ease-in 0.3s;
  flex: 1 1 auto;

  &:hover {
    color: #28553f;
  }
`

const ProductPrices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 15px;
  margin-bottom: 20px;
`

const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #28553f;

  &:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: line-through;
    color: #949981;
  }
`

const ProductBtn = styled.div`
  ${Button} {
    height: 40px;
    text-transform: capitalize;
  }
`

export const S = {
  Product,
  ProductImage,
  ProductTitle,
  ProductName,
  ProductPrices,
  ProductPrice,
  ProductBtn,
}
