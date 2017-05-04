import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { TextField, RaisedButton } from 'material-ui';

class PostNew extends Component {

  constructor() {
    super();
  }

  static validate(values) {
    const errors = {};
    const requiredFields = [ 'title', 'categories', 'content'];
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required';
      }
    });
    return errors;
  }

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
  );

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <Field name="title" component={this.renderTextField} label="Title" />
          </div>
          <div>
            <Field name="categories" component={this.renderTextField} label="Category" />
          </div>
          <div>
            <Field name="content" component={this.renderTextField} label="Content" />
          </div>
          <div style={{display: 'inline-block'}}>
            <RaisedButton type="submit" label="Create" primary={true} style={{margin: '20px 0 0 20px'}} />
            <Link to="/">
              <RaisedButton label="Cancel" secondary={true} style={{margin: '20px 0 0 20px'}} />
            </Link>
          </div>
        </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm',
  validate: PostNew.validate
})(connect(null, { createPost }) (PostNew));