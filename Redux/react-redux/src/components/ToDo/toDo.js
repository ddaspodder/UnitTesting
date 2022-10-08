import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import styles from "./toDo.module.css";

const ToDo = () => {
  const tasks = useSelector(
    (state) => state.tasks.tasks
  );
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const task = getTask();
    dispatch({
      type: "add",
      payload: task,
    });
  };

  const handleRemoveTask = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const getTask = () => {
    const lists = [
      "cleaning",
      "cooking",
      "coding",
      "making bed",
      "shopping",
      "gardening",
      "shaving",
    ];
    const random =
      Math.floor(Math.random() * 100) %
      7;
    return lists[random];
  };

  return (
    <div>
      <h1>ToDo</h1>
      <div
        className={
          styles["button-wrapper"]
        }
      >
        <button
          className={styles.button}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <ul
        className={
          styles["list-wrapper"]
        }
      >
        {tasks.map((task, id) => (
          <li key={id}>
            {task}{" "}
            <button
              className={
                styles["button-remove"]
              }
              onClick={() => {
                handleRemoveTask(id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
