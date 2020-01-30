import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AccountFlag from './AccountFlag';
import AccountDetails from './AccountDetails/AccountDetails';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  border: 5px solid white;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.33);
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(246,246,247,1) 0%, rgba(255,255,255,1) 100%);
`

function Account({ image, amount, title, subtitle, buttonText }) {
  return (
    <AccountContainer>
      <AccountFlag image={image} />
      <AccountDetails amount={amount} title={title} subtitle={subtitle} buttonText={buttonText} />
    </AccountContainer>
  )
}

Account.propTypes = {
	title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  amount: PropTypes.string,
	image: PropTypes.oneOf(['small', 'normal', 'large']),
};

export default Account;
