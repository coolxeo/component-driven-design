import React from 'react';
import styled from 'styled-components';

import AccountImage from './AccountImage';
import AccountDetails from './AccountDetails/AccountDetails';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function Account({ image, rate, title, subtitle, buttonText }) {
  return (
    <AccountContainer>
      <AccountImage image={image} />
      <AccountDetails rate={rate} title={title} subtitle={subtitle} buttonText={buttonText} />
    </AccountContainer>
  )
}

export default Account;
