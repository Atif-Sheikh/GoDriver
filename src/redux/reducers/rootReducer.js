import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { coordsReducer } from './coordsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  coords: coordsReducer,
});
