"use client";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <button className={styles.button} onClick={() => console.log("logout")}>
      Logout
    </button>
  );
};

export default Button;
