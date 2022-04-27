import React, {useState} from "react";
import styles from './CartScreen.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

// components
import OrderItem from '../components/OrderItem';

//actions
import { addOneOrder } from '../redux/actions/orderActions';


const OrderScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
  };

  const [order, setOrder] = useState(
    {
      id: '',
      cart: cartItems,
      totalPrice: getCartSubTotal(),
      name: '',
      surname: '',
      address: '',
      email: '',
      request: '',
    }
  );

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if(order.cart && order.name && order.surname && order.address && order.email){
    order.id = uuidv4();
    dispatch(addOneOrder(order));
    alert('Order has been saved!');
    setOrder({
      id: '',
      name: '',
      surname: '',
      address: '',
      email: '',
      request: '',
      
    });
      } else {
        alert('Please fill required fields');
      }
  };

  return (
    <div className={styles.cartScreen}>
      <div className={styles.cartScreen__left}>
        <h2>Place Your Order</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : cartItems.map(item => (
          <OrderItem
            key={item.product}
            item={item}
          />
        ))}
      </div>

      <div className={styles.cartScreen__right}>
        <div className={styles.cartScreen__info}>
          <p>Subtotal ({getCartCount()}) items </p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <form className={styles.addForm} action="/orders" method="POST" onSubmit={submitForm}>
            <label>Name</label>
            <input className={styles.formInput} type="text" name="name" onChange={handleChange}></input>
            <label>Surname</label>
            <input className={styles.formInput} type="text" name="surname" onChange={handleChange}></input>
            <label>Address</label>
            <input className={styles.formInput} type="text" name="address" onChange={handleChange}></input>
            <label>Email</label>
            <input className={styles.formInput} type="email" name="email" onChange={handleChange}></input>
            <label>Additional request</label>
            <input className={styles.formInput} type="text" name="request" onChange={handleChange}></input>
            <div>
              <button className={styles.cartScreen__button}>Submit Order</button>
            </div>
          </form>
        
      </div>

      
    </div>
  )
}


export default OrderScreen;