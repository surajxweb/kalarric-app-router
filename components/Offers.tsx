import React from "react";
import styles from "./Offers.module.css";

export default function Offers() {
  return (
    <div className={styles.nav2}>
      <div className={styles.text}>
        <span className={styles.vibratingSpan}>⚡</span>Festival Extravaganza
        Sale is now live. Free Delivery on orders over ₹ 999.
        <span className={styles.vibratingSpan}>⚡</span>
      </div>
    </div>
  );
}
