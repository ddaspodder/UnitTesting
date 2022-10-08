import React from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>Counter</h1>
      <div className={styles.count}>{count}</div>
      <div className={styles["button-wrapper"]}>
        <button className={styles.button} onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
