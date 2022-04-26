
export interface User {
  _id: string,
  email: string,
}

export interface UserState extends User {
  isAuth: boolean,
  isLoading: boolean,
  error: string,
}

export interface UserWithTokens {
  user: User,
  accessToken: string,
  refreshToken: string,
}

export interface CreateUserDto {
  email: string,
  password: string,
}

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR = 'REGISTRATION_ERROR',
  LOGOUT = 'LOGOUT',
}

interface Login {
  type: UserActionTypes.LOGIN,
}

interface LoginSuccess {
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: UserWithTokens,
}

interface LoginError {
  type: UserActionTypes.LOGIN_ERROR,
  payload: string,
}

interface Registration {
  type: UserActionTypes.REGISTRATION,
}

interface RegistrationSuccess {
  type: UserActionTypes.REGISTRATION_SUCCESS,
  payload: UserWithTokens,
}

interface RegistrationError {
  type: UserActionTypes.REGISTRATION_ERROR,
  payload: string,
}

interface Logout {
  type: UserActionTypes.LOGOUT,
}

export type UserAction =
  | Login
  | LoginSuccess
  | LoginError
  | Registration
  | RegistrationError
  | RegistrationSuccess
  | Logout