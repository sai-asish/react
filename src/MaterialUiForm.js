import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import validate from './validate';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);


const renderTextFieldNumber = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    id="standard-number"
    type="number"
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="name"
          component={renderTextField}
          label="Name"
        />
      </div>
      <div>
        <Field name="age" component={renderTextFieldNumber} label="Age" />
      </div>
      <div>
        <Field name="address" component={renderTextField} label="Address" />
      </div>
      <div>
        <Field name="phone" component={renderTextFieldNumber} label="PhoneNo" />
      </div>
      <div>
        <Field name="department" component={renderTextField} label="DepartmentName" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting} >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm);
