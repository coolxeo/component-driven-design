import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  font-family: 'Material Icons';
  width: 20px;
  display: inline-block;
  padding-right: 40px;
`

const List = styled.div`
  color: black;
  padding: 30px;
  border-radius: 18px;
`

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  font-size: 1.2em;
`

function AccountList({ list }) {
  return (
    <List>
      {list.map(listItem => (
        <ListItem>
          <div><Icon>{listItem.icon}</Icon><span>{listItem.title}</span></div>
          <div>{listItem.time}</div>
        </ListItem>
      ))}
    </List>
  )
}

export default AccountList
