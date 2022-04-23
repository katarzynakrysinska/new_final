import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({click}) => {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navbar__logo}>
      <Link to="/" className={styles.navbar__main_link}>
        <h2>Your favorite shop</h2>
      </Link>
      </div>

      {/* Links */}
      <ul className={styles.navbar__links}>
        <li>
          <Link to="/cart" className={styles.cart__link}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className={styles.cartLogo__badge}>{getCartCount()}</span>
            </span>
            
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className={styles.hamburger__menu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
};

export default Navbar;

