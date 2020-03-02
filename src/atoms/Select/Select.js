import React from 'react';

export default function Select(props) {
  const { options, label, id, onChange, name, value, onBlur } = props;

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
