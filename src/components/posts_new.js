import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'material-ui';

class PostNew extends Component {

  constructor() {
    super();
  }

  static validate(values) {
    const errors = {};
    const requiredFields = [ 'title', 'tags', 'content', 'email' ];
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required';
      }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors
  }

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
  );

  render() {
    return (
        <form>
          <div>
            <Field name="title" component={this.renderTextField} label="Title" />
          </div>
          <div>
            <Field name="tags" component={this.renderTextField} label="Category" />
          </div>
          <div>
            <Field name="content" component={this.renderTextField} label="Content" />
          </div>
          <div>
            <Field name="email" component={this.renderTextField} label="Email" />
          </div>
        </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm',
  validate: PostNew.validate
})(PostNew);