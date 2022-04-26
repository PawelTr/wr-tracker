import { CreateUserDto, UserAction, UserActionTypes, UserWithTokens } from '../../types/user';
import { Dispatch } from 'redux';
import $api from '../../http';

export const login = (userDto: CreateUserDto) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.LOGIN})
      const response = await $api.post<UserWithTokens>('/auth/login', {...userDto});
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
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
      const response = await $api.post<UserWithTokens>('/auth/registration', {...userDto});
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({type: UserActionTypes.REGISTRATION_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: UserActionTypes.REGISTRATION_ERROR, payload: 'Can\'t registrate'})
    }
  }
}

