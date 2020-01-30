import React from 'react'
import renderer from 'react-test-renderer'

import Account from './Account'

it('Account renders correctly', () => {
  const tree = renderer
    .create(
      <Account image="/water-cure.jpg" rate="4.8" title="The Water Cure" subtitle="Joanne Ramos" buttonText="Biography" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Doesn´t show the button or rate', () => {
  const tree = renderer
    .create(
      <Account image="/water-cure.jpg" title="The Water Cure" subtitle="Joanne Ramos"/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});