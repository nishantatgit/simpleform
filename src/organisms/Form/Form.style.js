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
