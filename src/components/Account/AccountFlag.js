import React from 'react'
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 18px;
`;

const SmallImage = styled(Image)`
  width: 30px;
  height: 30px;
`

function AccountFlag({ image, small }) {
  return (
    <ImageContainer>
      {!small && <Image image={image} />}
      {small && <SmallImage image={image} />}
    </ImageContainer>
  )
}

export default AccountFlag
