import React from 'react';

export default function Input(props) {
  const {
    label,
    type,
    id,
    onChange,
    onBlur,
    name,
    value,
    hasError,
    placeholder,
  } = props;

  const onChangeHandler = e => {
    onChange(e);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlur}
        value={value}
        className={hasError ? 'has-error' : null}
        name={name}
        placeholder={placeholder}
        aria-invalid={hasError}
      />
    </>
  );
}
