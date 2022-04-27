import React, { useState } from "react";
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import { adjustItemRequest} from '../redux/actions/cartActions';

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className={styles.cartItem__name}>
        <p>{item.name}</p>
      </Link>

      <p className={styles.cartItem__price}>${item.price}</p>

      <select 
        className={styles.cartItem__select}
        value={item.qty} 
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map(x => (
          <option key={x+1} value={x+1}>{x+1}</option>
        ))}
      </select>

      <button className={styles.cartItem__deleteBtn}>
        <i className="fas fa-trash" 
          onClick={() => removeHandler(item.product)}></i>
      </button>
    </div>
  )
}

export default CartItem;