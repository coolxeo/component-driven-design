import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.6em;
  font-weight: 900;
  margin-bottom: 0.5em;
`

function AccountTitle({title}) {
  return (
    <Title>
      {title}
    </Title>
  )
}

export default AccountTitle
