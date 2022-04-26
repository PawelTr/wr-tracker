import { CreateUserDto, UserAction, UserActionTypes, UserWithTokens } from '../../types/user';
import { Dispatch } from 'redux';
import axios from 'axios';
import $api from '../../http/index'

export const login = (userDto: CreateUserDto) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.LOGIN})
      const response = await axios.post<UserWithTokens>('http://localhost:4000/auth/login', {...userDto}, {withCredentials: true})
      localStorage.setItem('WRAccessToken', response.data.accessToken);
      dispatch({type: UserActionTypes.LOGIN_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: UserActionTypes.LOGIN_ERROR, payload: 'Can\'t login'})
    }
  }
}

export const registration = (userDto: CreateUserDto) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.REGISTRATION})
      const response = await axios.post<UserWithTokens>('http://localhost:4000/auth/registration', {...userDto}, {withCredentials: true});
      localStorage.setItem('WRAccessToken', response.data.accessToken);
      dispatch({type: UserActionTypes.REGISTRATION_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: UserActionTypes.REGISTRATION_ERROR, payload: 'Can\'t registrate'})
    }
  }
}

export const logout = (userDto: CreateUserDto) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.REGISTRATION})
      const response = await axios.post<UserWithTokens>('http://localhost:4000/auth/logout', {...userDto}, {withCredentials: true});
      localStorage.setItem('WRAccessToken', response.data.accessToken);
      dispatch({type: UserActionTypes.REGISTRATION_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: UserActionTypes.REGISTRATION_ERROR, payload: 'Can\'t registrate'})
    }
  }
}

export const checkAuth = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await $api.post<UserWithTokens>('/auth/refresh', {withCredentials: true});
      localStorage.setItem('WRAccessToken', response.data.accessToken);
      dispatch({type: UserActionTypes.LOGIN_SUCCESS, payload: response.data})
    }
    catch (error) {
      dispatch({type: UserActionTypes.LOGIN_ERROR, payload: 'Can\'t login'})
    }
  }
}

