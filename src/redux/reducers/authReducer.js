import { SIGN_IN, SIGN_UP, AUTH_ERROR } from '../actions/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
}; 

export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
