import React from 'react'
import style from 'styled-components'

import AccountRate from './AccountRate'
import AccountTitle from './AccountTitle'
import AccountSubtitle from './AccountSubtitle'
import Button from '../../Button/Button'

const AccountDetailsContainer = style.div`
  padding: 30px 20px;
`

function AccountDetails({ rate, title, subtitle, buttonText }) {
  return (
    <AccountDetailsContainer>
      {rate && <AccountRate rate={rate} />}
      <AccountTitle title={title} />
      <AccountSubtitle subtitle={subtitle} />
      {buttonText && <Button text={buttonText} />}
    </AccountDetailsContainer>
  )
}

export default AccountDetails
