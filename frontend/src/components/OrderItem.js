import React from "react";
import styles from './OrderItem.module.scss';
import { Link } from 'react-router-dom';

const OrderItem = ({item, qtyChangeHandler, removeHandler}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className={styles.cartItem__name}>
        <p>{item.name}</p>
      </Link>
      <p>{item.qty}</p>
      <p className={styles.cartItem__price}>${item.price}</p>
    </div>
  )
}

export default OrderItem;