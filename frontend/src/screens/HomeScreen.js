import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import styles from './HomeScreen.module.scss';

//components
import Product from "../components/Product";

//actions
import { getProducts as listProducts } from '../redux/actions/productActions';


const HomeScreen = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <div className={styles.homeScreen}>
      <h2 className={styles.homeScreen__title}>Latest Products</h2>

      <div className={styles.homeScreen__products}>
       {loading ? (
        <h2>Loading...</h2>
       ) : error ? (
        <h2>{error}</h2>
       ) : (
         products.map((product) => 
         <Product 
          key={product._id}
          productId={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
          />)
       )}
      </div>
    </div>
  )
}

export default HomeScreen;