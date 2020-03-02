import React from 'react';
import { useFormik } from 'formik';

import withStyles from '../../utils/withStyles';
import styles from './Form.style';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Radio from '../../atoms/Radio/Radio';
import FieldError from '../../atoms/FieldError/FieldError';
import getValidator from '../../utils/getValidator';

function Form(props) {
  const { id, className } = props;

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

  const validate = getValidator();
  const successfulSubmissionMsg = 'Your form has been submitted successfully';

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
      alert(successfulSubmissionMsg);
      const { sessionStorage } = window;
      sessionStorage &&
        sessionStorage.setItem('formFields', JSON.stringify(values));
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
