import React from 'react'
import renderer from 'react-test-renderer'

import Product from './Product'

it('Product renders correctly', () => {
  const tree = renderer
    .create(
      <Product image="/water-cure.jpg" rate="4.8" title="The Water Cure" subtitle="Joanne Ramos" buttonText="Biography" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});