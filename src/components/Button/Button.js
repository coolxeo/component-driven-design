import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  background: #EBF4F7;
  color: #00D3D7;
  border-radius: 18px;
  padding: 1.2em;
  font-size: 1.2em;
  text-align: center;
  width: auto;
  border: 0;
`
const PrimaryButtonContainer = styled(ButtonContainer)`
  background: #00D3D7;
  color: #FFFFFF;
`

function Button({text, primary}) {
  return (
    <div>
      {!primary && <ButtonContainer>{text}</ButtonContainer>}
      {primary && <PrimaryButtonContainer>{text}</PrimaryButtonContainer>}
    </div>
  )
}

export default Button
