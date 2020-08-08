import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
const SignUp = (props) => {
  const onSubmit = (formProps) => {
    props.signUp(formProps, () => {
      props.history.push("/feature");
    });
  };

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" />
      </fieldset>

      <fieldset>
        <label>Password</label>
        <Field name="password" type="password" component="input" />
      </fieldset>

      {props.errorMessage && <h1>{props.errorMessage}</h1>}
      <button type="submit">login</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(SignUp);
