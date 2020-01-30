import React from 'react'
import styled from 'styled-components'

const Subtitle = styled.div`
  color: #999;
  font-size: 1.2em;
`

function AccountSubtitle({subtitle}) {
  return (
    <Subtitle>
      {subtitle}
    </Subtitle>
  )
}

export default AccountSubtitle
