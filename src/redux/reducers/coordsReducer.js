import { PICK_UP_LOCATION, DESTINATION_LOCATION } from '../actions/constants';

const initialState = {
  pickup: '',
  destination: '',
};

export const coordsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case PICK_UP_LOCATION:
      return {
        ...state,
        pickup: payload,
      };
    case DESTINATION_LOCATION:
      return {
        ...state,
        destination: payload,
      };
    default:
      return state;
  }
};
