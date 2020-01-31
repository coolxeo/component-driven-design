import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

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
          <div>{listItem.amount}</div>
        </ListItem>
      ))}
    </List>
  )
}

AccountList.propTypes = {
  align: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      amount: PropTypes.string,
    })
  ),
};


export default AccountList
