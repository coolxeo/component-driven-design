import React from 'react'
import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  width: 220px;
  height: 300px;
  border-radius: 18px;
`;

const SmallImage = styled(Image)`
  width: 110px;
  height: 150px;
`

function ProductImage({ image, small }) {
  return (
    <div>
      {!small && <Image image={image} />}
      {small && <SmallImage image={image} />}
    </div>
  )
}

export default ProductImage
