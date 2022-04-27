import React from "react";
import styles from './CartScreen.module.scss';
import { useSelector, useDispatch, useState} from "react-redux";
import { Link } from "react-router-dom";

// components
import CartItem from '../components/CartItem';

//actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
  };

  

  return (
    <div className={styles.cartScreen}>
      <div className={styles.cartScreen__left}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : cartItems.map(item => (
          <CartItem
            key={item.product}
            item={item}
            qtyChangeHandler={qtyChangeHandler}
            removeHandler={removeHandler}
          />
        ))}
      </div>

      <div className={styles.cartScreen__right}>
        <div className={styles.cartScreen__info}>
          <p>Subtotal ({getCartCount()}) items </p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <Link to={`/order`} className={styles.cartScreen__button}>Proceed To Checkout</Link>
        </div>
        
      </div>
    </div>
  )
}

export default CartScreen;