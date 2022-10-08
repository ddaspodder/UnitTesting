import React from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
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
