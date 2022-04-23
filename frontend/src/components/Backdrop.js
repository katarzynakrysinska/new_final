import React from "react";
import styles from './Backdrop.module.scss';

const Backdrop = ({show, click}) => {
  return show && <div className={styles.backdrop} onClick={click}></div>
}

export default Backdrop;