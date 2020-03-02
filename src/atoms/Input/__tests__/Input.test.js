import React from 'react';
import Input from '../Input';
import { render, shallow } from 'enzyme';

describe('<Input />', () => {
  const props = {
    type: 'text',
    label: 'First Name',
    id: 'first-name',
    name: 'firstName',
  };

  it('should render correctly', () => {
    const inputEl = render(<Input {...props} />);
    expect(inputEl).toMatchSnapshot();
  });

  it('fires onChange event handler once per input change', () => {
    const onChange = jest.fn();
    const addonProps = {
      ...props,
      onChange,
    };
    const inputElWithOnChange = shallow(<Input {...addonProps} />);
    inputElWithOnChange.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur event Handler once on blur', () => {
    const onBlur = jest.fn();
    const addOnProps = {
      ...props,
      onBlur,
    };
    const inputElWithBlur = shallow(<Input {...addOnProps} />);
    inputElWithBlur.find('input').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
