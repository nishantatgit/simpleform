import React, { useState } from 'react';

export default function Radio(props) {
  const { options, onChange, onBlur, name, legend } = props;
  return (
    <fieldset>
      <legend>{legend}</legend>
      <label>
        <input
          type="radio"
          value="yes"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        No
      </label>
    </fieldset>
  );
}
