import React from "react";
import styles from './Product.module.scss';
import { Link } from "react-router-dom";

const Product = ({name, price, description, imageUrl, productId}) => {
  return (
    <div className={styles.product}>
      <img src={imageUrl} alt={name} />

      <div className={styles.product__info}>
        <p className={styles.info__name}>{name}</p>
        <p className={styles.info__description}>
          {description.substring(0, 100)}...
        </p>
        <p className={styles.info__price}>${price}</p>
        <Link to={`/product/${productId}`} className={styles.info__button}>View</Link>
      </div>
    </div>
  )
}

export default Product;