import React from 'react'
import style from 'styled-components'
import PropTypes from 'prop-types';

import AccountMoney from './AccountMoney'
import AccountTitle from './AccountTitle'
import AccountSubtitle from './AccountSubtitle'

const AccountDetailsContainer = style.div`
  flex-direction: column;
  padding: 0 20px;
  display: flex;
  align-items: ${props => props.align};
`

function AccountDetails({ amount, title, subtitle, align = 'center' }) {
  return (
    <AccountDetailsContainer align={align}>
      <AccountTitle title={title} />
      <AccountSubtitle subtitle={subtitle} />
      {amount && <AccountMoney amount={amount} />}
    </AccountDetailsContainer>
  )
}

AccountDetails.propTypes = {
  image: PropTypes.string,
  amount: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['start', 'end', 'center', 'normal', 'stretch']),
};

export default AccountDetails
