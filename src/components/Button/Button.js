import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`

const ButtonElement = styled.div`
  background: #000;
  color: #FFF;
  border-radius: 2.2em;
  padding: 0.8em 1.8em;
  font-size: 1.2em;
  text-align: center;
  width: auto;
  display: inline-block;
  border: 0;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.33);
`
const PrimaryButtonElement = styled(ButtonElement)`
  background: #FFF;
  color: #000;
`

function Button({text, primary}) {
  return (
    <ButtonContainer>
      {!primary && <ButtonElement>{text}</ButtonElement>}
      {primary && <PrimaryButtonElement>{text}</PrimaryButtonElement>}
    </ButtonContainer>
  )
}

export default Button
