import { formConfig } from '../config';
import validatePattern from './validatePattern';

export default function() {
  return values => {
    const errors = {};
    const { firstName, lastName, title, dateOfBirth, changeName } = values;

    if (!firstName) {
      errors.firstName = formConfig.firstName.error.required;
    } else if (firstName.length > formConfig.firstName.maxLength) {
      errors.firstName = formConfig.firstName.error.maxLength;
    } else if (!validatePattern(formConfig.firstName.pattern, firstName)) {
      errors.firstName = formConfig.firstName.error.patternMismatch;
    }

    if (!lastName) {
      errors.lastName = formConfig.lastName.error.required;
    } else if (values.lastName.length > formConfig.lastName.maxLength) {
      errors.lastName = formConfig.lastName.error.maxLength;
    } else if (!validatePattern(formConfig.lastName.pattern, lastName)) {
      errors.lastName = formConfig.firstName.error.patternMismatch;
    }

    if (!title) {
      errors.title = formConfig.title.error.required;
    }

    if (dateOfBirth) {
      const datePattern = formConfig.dateOfBirth.pattern;
      if (!datePattern.test(values.dateOfBirth)) {
        errors.dateOfBirth = formConfig.dateOfBirth.error.patternMismatch;
      } else {
        const dob = new Date(
          dateOfBirth
            .split('-')
            .reverse()
            .join('-')
        );
        if (Number.isNaN(dob.getDate())) {
          errors.dateOfBirth = formConfig.dateOfBirth.error.invalid;
        }
      }
    }

    if (!changeName) {
      errors.changeName = formConfig.changeName.error.required;
    }
    return errors;
  };
}
