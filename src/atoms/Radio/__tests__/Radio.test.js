import React from 'react';
import { render, shallow } from 'enzyme';
import Radio from '../Radio';

describe('<Radio /> ', () => {
  const props = {
    name: 'selectOption',
    id: 'radio-one',
    legend: 'Select one option',
  };
  it('renders radio buttons correctly', () => {
    const radioEl = render(<Radio {...props} />);
    expect(radioEl).toMatchSnapshot();
  });
});
