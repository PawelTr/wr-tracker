import React, { useState } from 'react';
import './login-form.scss'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signInHandler = (event: any):void => {
    event.preventDefault();
  }

  const signUpHandler = (event: any):void => {
    event.preventDefault();
  }

  return (
    <form className="login-form" onSubmit={signInHandler}>
      <label>email</label>
      <input className="login-form__input login-form__input--email"
             type="text"
             placeholder="example@gmail.com"
             onChange={(e) => setEmail(e.target.value)}/>
      <label>password</label>
      <input className="login-form__input login-form__input--password"
             type="password"
             placeholder="password"
             onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className="login-form__button login-form__button--sign-in">
        Sign in
      </button>
      <button className="login-form__button" onClick={signUpHandler}>
        Sign up
      </button>
    </form>
  );
};

export default LoginForm;