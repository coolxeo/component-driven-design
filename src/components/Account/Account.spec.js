import React from 'react'
import renderer from 'react-test-renderer'

import Account from './Account'

it('Account renders correctly', () => {
  const tree = renderer
    .create(
      <Account image="/gbp.png" amount="1,415.14" title="sync. Account" subtitle="00175579 | 62-22-07" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Doesn´t show the button or amount', () => {
  const tree = renderer
    .create(
      <Account image="/gbp.png" title="sync. Account" subtitle="00175579 | 62-22-07"/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});