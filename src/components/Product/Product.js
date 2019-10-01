import React from 'react';
import styled from 'styled-components';

import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails/ProductDetails';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function Product({ image, rate, title, subtitle, buttonText }) {
  return (
    <ProductContainer>
      <ProductImage image={image} />
      <ProductDetails rate={rate} title={title} subtitle={subtitle} buttonText={buttonText} />
    </ProductContainer>
  )
}

export default Product;
