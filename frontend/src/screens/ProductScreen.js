import React from "react";
import styles from './ProductScreen.module.scss';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };

  return (
    <div className={styles.productScreen}>
       {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className={styles.productScreen__left}>
          <div className={styles.left__image}>
          <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className={styles.left__image}>
          <img className={styles.left__img} src={product.imageUrl} alt={product.name} />
          </div>
          <div className={styles.left__info}>
            <p className={styles.left__name}>{product.name}</p>
            <p>${product.price}</p>
            <p>
            {product.description}
            </p>
          </div>
        </div>

        <div className={styles.productScreen__right}>
          <div className={styles.right__info}>
            <p>Price: <span>${product.price}</span></p>
            <p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p>Quantity

              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x+1} value={x+1}>{x+1}</option>
                ))}
              </select>
            </p>
            <p>
              <button type="button" onClick={addToCartHandler}>Add To Cart</button>
            </p>
          </div>
        </div>
          </>
      )}
    </div>
  );
};

export default ProductScreen;