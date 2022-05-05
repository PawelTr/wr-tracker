import React, { ChangeEvent, useState } from 'react';
import './login-form.scss'
import { useAction } from '../../store/action-creators/useAction';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, registration } = useAction();


  const signInHandler = (event: any): void => {
    event.preventDefault();
    const userDto = {
      email,
      password,
    }
    login(userDto);
  }

  const signUpHandler = (event: any): void => {
    event.preventDefault();
    const userDto = {
      email,
      password,
    }
    registration(userDto);
  }

  return (
    <form className="login-form" onSubmit={signInHandler}>
      <label>Login</label>
      <input className="login-form__input login-form__input--email"
             type="text"
             placeholder="login"
             onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
      <label>Password</label>
      <input className="login-form__input login-form__input--password"
             type="password"
             placeholder="password"
             onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
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