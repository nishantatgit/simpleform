import { css } from 'styled-components';

export default css`
  max-width: 800px;
  margin: auto;
  padding: 5px 15px;

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    width: 100%;
  }
  input:not([type='radio']) {
    padding: 10px 8px;
    appearance: none;
    border: 1px solid gray;
    &:focus {
      outline: 2px solid gray;
      border-color: transparent;
    }
    &.has-error {
      border: 1px solid orange;
    }
  }
  label {
    position: relative;
    width: 100%;
    display: block;
    margin-top: 30px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  select {
    appearance: none;
    width: 100%;
    padding: 10px 8px;
    border: 1px solid grey;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M62.652 103.895L0 21.41h125.304" fill="%23343334"/></svg>');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center right 8px;
    background-color: transparent;
    border-radius: 0;
  }

  input[type='radio'] {
    /* appearance: none; */
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    align-self: center;
    justify-content: center;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type='date']::-webkit-input-placeholder {
    visibility: hidden !important;
  }

  button {
    appearance: none;
    background: white;
    padding: 10px 5px;
    border: 1px solid gray;
    min-width: 200px;
    border-radius: 5px;
    width: auto;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  fieldset {
    border: none;
    margin-top: 30px;
    legend {
      font-weight: bold;
    }
    label {
      display: inline-flex;
      width: auto;
      cursor: pointer;
      margin-top: 20px;
      font-weight: normal;
      &:not(:last-of-type) {
        margin-right: 30px;
      }
    }
  }

  .form-error {
    padding: 10px 8px;
    background-color: #fff2e5;
    width: 100%;
  }
`;
