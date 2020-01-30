import React from 'react'
import styled from 'styled-components'

const Amount = styled.div`
  font-size: 2.2em;
  color: #000;
  margin: 0.6em;
  font-weight: bold;
`

function AccountMoney({amount}) {
  return (
    <Amount>£{amount}</Amount>
  )
}

export default AccountMoney
