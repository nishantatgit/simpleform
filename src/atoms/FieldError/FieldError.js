import React from 'react';

export default function FieldError(props) {
  const { error } = props;
  return <div class="form-error">{error}</div>;
}
