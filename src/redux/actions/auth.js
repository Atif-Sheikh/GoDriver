import axios from 'axios';
import { SIGN_IN, SIGN_UP, AUTH_ERROR } from './constants';
import { AsyncStorage } from 'react-native';

// SIGN_IN
export const login = (email, password) => async (dispatch) => {
  // console.log('LOGIN ACTION:', phoneNumber, password);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }; 

  const body = JSON.stringify({ email, password });
  try {
    let loginURL = `https://gotruck.netismsoft.com/api/driver/login`;
    const res = await axios.post(loginURL, body, config);
    console.log('RESPONSE : ', res);
    await AsyncStorage.setItem(
      "user",
      res.data
    );
    dispatch({
      type: SIGN_IN,
      payload: res.data,
    });
  } catch (error) {
    console.log('ERROR :', error);
    dispatch({
      type: AUTH_ERROR
    })
  }
};

// SIGN_UP
export const register = (form, callback) => async (dispatch) => {
  try {
    let registerURL = `https://gotruck.netismsoft.com/api/user/signup`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ form });
    const res = await axios.post(registerURL, body, config);
    callback();
    dispatch({
      type: SIGN_UP,
      payload: res.data,
    });
  } catch (error) {
    alert(error)
    console.warn('ERROR :', error);
  }
};
