import * as actionTypes from '../constants/orderConstants';

export const orderReducer = (state = { orders: []}, action) => {
  switch(action.type) {
    case actionTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    default:
      return state;
  }
};