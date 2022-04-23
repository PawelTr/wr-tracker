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

  const changeHandler = (event: any) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  return (
    <form className="login-form" onSubmit={signInHandler}>
      <label>email</label>
      <input className="login-form__input login-form__input--email"
             type="text"
             name="email"
             placeholder="example@gmail.com"
             onChange={changeHandler}/>
      <label>password</label>
      <input className="login-form__input login-form__input--password"
             type="password"
             name="password"
             placeholder="password"
             onChange={changeHandler}/>
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