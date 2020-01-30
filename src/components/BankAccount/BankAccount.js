import React from 'react'
import styled from 'styled-components';

import AccountFlag from '../Account/AccountFlag';
import AccountDetails from '../Account/AccountDetails/AccountDetails';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function BankAccount({ image, title, subtitle }) {
  return (
    <AccountContainer>
      <AccountFlag image={image} small={true} />
      <AccountDetails title={title} subtitle={subtitle} align='start' />
    </AccountContainer>
  )
}

export default BankAccount
