import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  width: 50px;
  height: 50px;
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

AccountFlag.propTypes = {
	small: PropTypes.oneOf([true, false]),
	image: PropTypes.string,
};

export default AccountFlag
