import * as actionTypes from '../constants/orderConstants';
import axios from 'axios';


export const addOneOrder= (data) => {
  return (dispatch, getState) => {
    axios
      .post(`/api/orders`, data)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_ORDER,
          payload: {
            ...data,
          },
        });
      })
      .catch(err => {
        dispatch((err.message || true));
      });
  };
};