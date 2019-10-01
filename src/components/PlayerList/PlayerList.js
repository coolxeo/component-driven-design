import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  font-family: 'Material Icons';
  width: 20px;
  display: inline-block;
  padding-right: 40px;
`

const List = styled.div`
  background: #232126;
  color: white;
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

function PlayerList({ list }) {
  return (
    <List>
      {list.map(listItem => (
        <ListItem>
          <div><Icon>play_arrow</Icon><span>{listItem.title}</span></div>
          <div>{listItem.time}</div>
        </ListItem>
      ))}
    </List>
  )
}

export default PlayerList
