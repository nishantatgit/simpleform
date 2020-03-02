import Radio from './atoms/Radio/Radio';

const required = 'required';

const field = {
  TYPE: {
    TEXT: 'text',
    RADIO: 'radio',
    SELECT: 'select',
  },
};
const formFields = [
  {
    type: field.TYPE.TEXT,
    label: 'First name',
    name: 'firstName',
    id: 'first-name',
    displayOrder: 2,
    regex: /^[\w+]$/,
  },
  {
    type: field.TYPE.TEXT,
    label: 'Last name',
    name: 'lastName',
    id: 'last-name',
    displayOrder: 3,
    regex: /^[\w+]$/,
  },
  {
    type: field.TYPE.TEXT,
    label: 'Date of birth',
    name: 'dateOfBirth',
    id: 'dob',
    displayOrder: 5,
    regex: /w/,
  },
  {
    type: field.TYPE.SELECT,
    label: 'Title',
    name: 'title',
    id: 'title-selector',
    displayOrder: 1,
    options: [
      {
        value: 'Mr.',
        label: 'Mr.',
      },
      {
        value: 'Mrs.',
        label: 'Mrs.',
      },
    ],
  },
  {
    type: field.TYPE.RADIO,
    label: '',
    name: 'hasNameChanged',
    id: 'name-change',
    displayOrder: 4,
    options: [
      {
        value: 'yes',
        label: 'Yes',
      },
      {
        value: 'no',
        Label: 'No',
      },
    ],
  },
];

const formConfig = {
  firstName: {
    pattern: /^[a-zA-Z\-']+( [a-zA-Z\-']+)*$/,
    maxLength: 15,
    error: {
      required,
      patternMismatch:
        'Please enter your name using letters (hyphens, apostrophes and single space is accepted)',
      maxLength: 'Must be 15 characters or less',
    },
  },
  lastName: {
    pattern: /^[a-zA-Z\-']+( [a-zA-Z\-']+)*$/,
    maxLength: 15,
    error: {
      required,
      patternMismatch:
        'Please enter your name using letters (hyphens, apostrophes and single space is accepted)',
      maxLength: 'Must be 15 characters or less',
    },
  },
  changeName: {
    error: {
      required,
    },
  },
  title: {
    error: {
      required,
    },
  },
  dateOfBirth: {
    pattern: /^\d{2}-\d{2}-\d{4}$/,
    error: {
      patternMismatch: 'Date must be in format DD-MM-YYYY',
      invalid: 'Invalid Date',
    },
  },
};

export { formConfig };
