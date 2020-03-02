import React, { useState } from 'react';

export default function Select(props) {
  const { options, label, id, onChange, name, value, onBlur } = props;
  //const [selectedValue, setSelectedValue] = useState('select');
  // const onChangeHandler = e => {
  //  // setSelectedValue(e.target.value);
  //  // console.log('selectedValue', e.target.value);
  //   onChange && onChange();
  // };
  // function onBlur() {
  //   console.log('on blur called');
  //   handleBlur();
  // }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
      >
        <option selected value="">
          Select
        </option>
        {options &&
          options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
      </select>
    </>
  );
}
