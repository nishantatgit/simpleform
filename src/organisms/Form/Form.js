import React from 'react';
import { useFormik } from 'formik';

import withStyles from '../../utils/withStyles';
import styles from './Form.style';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Radio from '../../atoms/Radio/Radio';
import FieldError from '../../atoms/FieldError/FieldError';
import validatePattern from '../../utils/validatePattern';

function Form(props) {
  const { id, className } = props;
  console.log('className ', className);

  const onChange = () => {
    console.log('on change called');
  };

  const onBlur = () => {
    console.log('on blur called');
  };

  const selectOptions = [
    {
      value: 'Mr.',
      label: 'Mr.',
    },
    {
      value: 'Mrs.',
      label: 'Mrs.',
    },
  ];

  const validate = values => {
    const errors = {};
    const { firstName, lastName, title, dateOfBirth, changeName } = values;
    const namePattern = /^[a-zA-Z\-']+( [a-zA-Z\-']+)*$/;
    const namePatternError =
      'Please enter your name using letters (hyphens, apostrophes and single space is accepted)';
    const requiredError = 'Required';

    if (!firstName) {
      errors.firstName = requiredError;
    } else if (firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    } else if (!validatePattern(namePattern, firstName)) {
      errors.firstName = namePatternError;
    }

    if (!lastName) {
      errors.lastName = requiredError;
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less';
    } else if (!validatePattern(namePattern, lastName)) {
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

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      changeName: null,
      title: '',
    },
    validate,
    validateOnChange: false,
    onSubmit: values => {
      alert('This is working');
      window &&
        window.sessionStorage &&
        window.sessionStorage.setItem('formFields', JSON.stringify(values));
    },
  });

  console.log('formik ', formik);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    touched,
    errors,
  } = formik;

  return (
    <form id={id} className={className} onSubmit={handleSubmit}>
      <Select
        options={selectOptions}
        id="select-title"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Title"
        name="title"
        value={values.title}
      ></Select>
      {touched.title && errors.title && <FieldError error={errors.title} />}
      <Input
        type="text"
        label="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        id="first-name"
        initialValue=""
        name="firstName"
        value={formik.values.firstName}
        hasError={touched.firstName && errors.firstName}
      />
      {touched.firstName && errors.firstName && (
        <FieldError error={errors.firstName} />
      )}
      <Input
        type="text"
        label="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        id="last-name"
        initialValue=""
        name="lastName"
        value={values.lastName}
        hasError={touched.lastName && errors.lastName}
      />
      {touched.lastName && errors.lastName && (
        <FieldError error={errors.lastName} />
      )}
      <Radio
        name="changeName"
        onChange={handleChange}
        onBlur={handleBlur}
        legend="Has your name changed in last 12 months"
      />
      {touched.changeName && errors.changeName && (
        <FieldError error={errors.changeName} />
      )}
      <Input
        type="text"
        label="Date of Birth"
        id="dob"
        initialValue=""
        onChange={handleChange}
        onBlur={handleBlur}
        name="dateOfBirth"
        value={values.dateOfBirth}
        placeholder="DD-MM-YYYY"
      />
      {touched.dateOfBirth && errors.dateOfBirth && (
        <FieldError error={errors.dateOfBirth} />
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

const styledForm = withStyles(Form, styles);

export default styledForm;
