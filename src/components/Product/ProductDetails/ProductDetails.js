import React from 'react'
import style from 'styled-components'

import ProductRate from './ProductRate'
import ProductTitle from './ProductTitle'
import ProductSubtitle from './ProductSubtitle'
import Button from '../../Button/Button'

const ProductDetailsContainer = style.div`
  padding: 30px 20px;
`

function ProductDetails({ rate, title, subtitle, buttonText }) {
  return (
    <ProductDetailsContainer>
      {rate && <ProductRate rate={rate} />}
      <ProductTitle title={title} />
      <ProductSubtitle subtitle={subtitle} />
      {buttonText && <Button text={buttonText} />}
    </ProductDetailsContainer>
  )
}

export default ProductDetails
