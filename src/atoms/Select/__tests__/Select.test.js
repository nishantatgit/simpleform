import React from 'react';
import { render, shallow } from 'enzyme';
import Select from '../Select';

describe('<Select />', () => {
  const selectOptions = [
    {
      value: 1,
      label: 'Mr.',
    },
    {
      value: 2,
      label: 'Mrs.',
    },
  ];
  const props = {
    id: 'name-select',
    name: 'titleSelect',
    label: 'Select title',
    selectOptions,
  };

  it('should render select correctly', () => {
    const selectEl = render(<Select {...props} />);
    expect(selectEl).toMatchSnapshot();
  });

  it('calls onChange only once per change', () => {
    const addOnProps = {
      ...props,
      onChange: jest.fn(),
    };
    const selectElWithChange = shallow(<Select {...addOnProps} />);
    selectElWithChange.find('select').simulate('change');
    expect(addOnProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur only once on blur', () => {
    const addOnProps = {
      ...props,
      onBlur: jest.fn(),
    };
    const selectElWithBlur = shallow(<Select {...addOnProps} />);
    selectElWithBlur.find('select').simulate('blur');
    expect(addOnProps.onBlur).toHaveBeenCalledTimes(1);
  });
});
