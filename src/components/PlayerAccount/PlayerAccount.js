import React from 'react'
import styled from 'styled-components';

import AccountImage from '../Account/AccountImage';
import AccountDetails from '../Account/AccountDetails/AccountDetails';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function PlayerAccount({ image, title, subtitle }) {
  return (
    <AccountContainer>
      <AccountImage image={image} small={true} />
      <AccountDetails title={title} subtitle={subtitle} />
    </AccountContainer>
  )
}

export default PlayerAccount
