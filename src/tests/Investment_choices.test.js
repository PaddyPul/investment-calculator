import React from 'react';
import Investment_choices from '../containers/Investment_choices.js'; // importing unconnected component
import ShallowRenderer from 'react-test-renderer/shallow';

test('Investment_choices container rendering without issues', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <Investment_choices
      amount='2000'
      date='1'
      type='Bitcoin'
      label='Simular com o outro investimento' />)
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});
