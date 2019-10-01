import React from 'react'
import styled from 'styled-components';

import ProductImage from '../Product/ProductImage';
import ProductDetails from '../Product/ProductDetails/ProductDetails';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function PlayerProduct({ image, title, subtitle }) {
  return (
    <ProductContainer>
      <ProductImage image={image} small={true} />
      <ProductDetails title={title} subtitle={subtitle} />
    </ProductContainer>
  )
}

export default PlayerProduct
