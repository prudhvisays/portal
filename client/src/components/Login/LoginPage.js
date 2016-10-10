import React from 'react';
import LoginForm from './LoginForm';
import { connect } from "react-redux";
import { login } from '../../actions/authActions';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="form-container">
  <LoginForm />

      </div>
    );
  }
}

export default LoginPage;
