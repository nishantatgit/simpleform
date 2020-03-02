import { pattern, lengthConstraint, formConfig } from '../config';
import validatePattern from './validatePattern';

export default function() {
  return values => {
    const errors = {};
    const { firstName, lastName, title, dateOfBirth, changeName } = values;

    const namePatternError =
      'Please enter your name using letters (hyphens, apostrophes and single space is accepted)';

    const requiredError = 'Required';
    const lengthError = 'Must be 15 characters or less';

    if (!firstName) {
      errors.firstName = requiredError;
    } else if (firstName.length > lengthConstraint.firstName.max) {
      errors.firstName = lengthError;
    } else if (!validatePattern(pattern.firstName, firstName)) {
      errors.firstName = namePatternError;
    }

    if (!lastName) {
      errors.lastName = requiredError;
    } else if (values.lastName.length > lengthConstraint.lastName.max) {
      errors.lastName = lengthError;
    } else if (!validatePattern(pattern.lastName, lastName)) {
      errors.lastName = namePatternError;
    }

    if (!title) {
      errors.title = requiredError;
    }

    if (dateOfBirth) {
      const datePattern = /\d{2}-\d{2}-\d{4}/;
      if (!datePattern.test(values.dateOfBirth)) {
        errors.dateOfBirth = 'Date must be in format DD-MM-YYYY';
      } else {
        const dob = new Date(
          dateOfBirth
            .split('-')
            .reverse()
            .join('-')
        );
        if (Number.isNaN(dob.getDate())) {
          errors.dateOfBirth = 'Invalid Date';
        }
      }
    }

    if (!changeName) {
      errors.changeName = requiredError;
    }
    return errors;
  };
}
