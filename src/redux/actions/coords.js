import { PICK_UP_LOCATION, DESTINATION_LOCATION } from './constants';

export const pickupLocation = (pickup_location) => async (dispatch) => {
  console.log('PICKUP ACTION :', pickup_location);
  try {
    dispatch({
      type: PICK_UP_LOCATION,
      payload: pickup_location,
    });
  } catch (error) {
    console.warn('Error :', error);
  }
};

export const destinationLocation = (destination_location) => async (
  dispatch
) => {
  try {
    dispatch({
      type: DESTINATION_LOCATION,
      payload: destination_location,
    });
  } catch (error) {
    console.warn('Error :', error);
  }
};
