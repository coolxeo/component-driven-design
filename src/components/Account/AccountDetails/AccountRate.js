import React from 'react'
import styled from 'styled-components'

const Rate = styled.div`
  font-size: 1.8em;
  color: #999;
  margin-bottom: 1em;
`

function AccountRate({rate}) {
  return (
    <Rate>{rate}</Rate>
  )
}

export default AccountRate
