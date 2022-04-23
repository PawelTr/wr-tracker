import React from 'react';
import './login-page.scss'
import LoginForm from '../../components/login-form/login-form';

const LoginPage = () => {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;