import * as actionTypes from '../constants/orderConstants';
import axios from 'axios';
import { API_URL } from '../../config';

export const addOneOrder= (data) => {
  return (dispatch, getState) => {
    axios
      .post(`${API_URL}/orders`, data)
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