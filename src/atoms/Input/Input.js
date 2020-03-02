import React, { useState } from 'react';

export default function Input(props) {
  const {
    label,
    type,
    id,
    onChange,
    onBlur,
    initialValue = '',
    className,
    name,
    value,
    hasError,
    placeholder,
  } = props;

  const onChangeHandler = e => {
    onChange(e);
  };

  return (
    <div className="input-group">
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
    </div>
  );
}
