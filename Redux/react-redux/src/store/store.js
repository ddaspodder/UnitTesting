import {
  createStore,
  combineReducers,
} from "redux";

const initalCounterState = { count: 0 };

export const CounterReducer = (
  state = initalCounterState,
  action
) => {
  const { type } = action;
  // const random = Math.floor(Math.random() * 100) % 10;
  switch (type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialTaskState = { tasks: [] };

export const TaskReducer = (
  state = initialTaskState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return {
        tasks: [
          ...state.tasks,
          payload,
        ],
      };

    case "remove":
      return {
        tasks:
          payload > 0
            ? [
                ...state.tasks.slice(
                  0,
                  payload
                ),
                ...state.tasks.slice(
                  payload + 1
                ),
              ]
            : [
                ...state.tasks.slice(
                  payload + 1
                ),
              ],
      };

    default:
      return state;
  }
};

const Store = createStore(
  combineReducers({
    counter: CounterReducer,
    tasks: TaskReducer,
  })
);

export default Store;
