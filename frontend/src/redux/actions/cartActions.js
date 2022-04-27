import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty, request) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
      request: '',
    }
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const adjustItemRequest = (id, request) => {
  return {
    type: actionTypes.ADJUST_ITEM_REQUEST,
    payload: {
      product: id,
      request,
    },
  };
};


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};