import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  _id: '',
  email: '',
  isLoading: false,
  error: '',
  isAuth: false,
}

export default function userReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case UserActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuth: true,
      }
    }
    case UserActionTypes.LOGIN_ERROR: {
      return {
        email: '',
        _id: '',
        isLoading: false,
        error: action.payload,
        isAuth: false,
      }
    }
    case UserActionTypes.REGISTRATION: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case UserActionTypes.REGISTRATION_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuth: true,
      }
    }
    case UserActionTypes.REGISTRATION_ERROR: {
      return {
        email: '',
        _id: '',
        isLoading: false,
        error: action.payload,
        isAuth: false,
      }
    }
    default:
      return state;
  }
}