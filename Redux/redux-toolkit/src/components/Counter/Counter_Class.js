import React from "react";
import styles from "./Counter.module.css";
import { connect } from "react-redux";
import { counterThunkActions } from "../../store/store";

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div className={styles.count}>
          {this.props.count}
        </div>
        <div
          className={
            styles["button-wrapper"]
          }
        >
          <button
            className={styles.button}
            onClick={
              this.props.increment
            }
          >
            Increment
          </button>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={
              this.props.decrement
            }
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (
  dispatch
) => ({
  increment: () =>
    dispatch(
      counterThunkActions.increment()
    ),
  decrement: () =>
    dispatch(
      counterThunkActions.decrement()
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
