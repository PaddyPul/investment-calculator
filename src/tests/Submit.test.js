import React from 'react';
import { Submit } from '../containers/Submit.js'; // importing unconnected component
import renderer from 'react-test-renderer';

test('Submit container rendering without issues', () => {
  const component = renderer.create(
    <Submit
      amount='2000'
      date='1'
      type='Bitcoin'
      label='Simular com o outro investimento' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
