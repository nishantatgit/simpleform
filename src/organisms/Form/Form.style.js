import { css } from 'styled-components';
import styles from '../../styles';
console.log('styles ', styles);
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
    border: ${styles.BORDER.primary};
    &:focus {
      outline: ${styles.BORDER.outline};
      border-color: ${styles.COLORS.bgColor.transparent};
    }
    &.has-error {
      border: ${styles.BORDER.error};
    }
  }
  label {
    position: relative;
    width: 100%;
    display: block;
    margin-top: 30px;
    margin-bottom: 8px;
    font-weight: ${styles.FONTS.weight.bold};
  }

  select {
    appearance: none;
    width: 100%;
    padding: 10px 8px;
    border: ${styles.BORDER.primary};
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M62.652 103.895L0 21.41h125.304" fill="%23343334"/></svg>');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center right 8px;
    background-color: ${styles.COLORS.bgColor.transparent};
    border-radius: 0;
    &:focus {
      outline: ${styles.BORDER.outline};
      border-color: ${styles.COLORS.bgColor.transparent};
    }
  }

  input[type='radio'] {
    margin-right: 8px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  button {
    appearance: none;
    background: ${styles.COLORS.white};
    padding: 10px 5px;
    border: ${styles.BORDER.primary};
    min-width: 200px;
    border-radius: 5px;
    width: auto;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    cursor: pointer;
    box-shadow: ${styles.BOX_SHADOW.primary};
  }

  fieldset {
    border: none;
    margin-top: 30px;
    legend {
      font-weight: ${styles.FONTS.weight.bold};
    }
    label {
      display: inline-flex;
      width: auto;
      cursor: pointer;
      margin-top: 20px;
      font-weight: ${styles.FONTS.weight.normal};
      &:not(:last-of-type) {
        margin-right: 30px;
      }
    }
  }

  .form-error {
    padding: 10px 8px;
    background-color: ${styles.COLORS.orange1};
    width: 100%;
  }
`;
