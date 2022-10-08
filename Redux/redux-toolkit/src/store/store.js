import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

import { dummyReq } from "../api/mock/counterREST";

export const CounterSlice = createSlice(
  {
    name: "counter",
    initialState: { count: 0 },
    reducers: {
      increment(state, action) {
        state.count++;
      },
      decrement(state, action) {
        state.count--;
      },
    },
  }
);

export const counterActions =
  CounterSlice.actions;

export const counterThunkActions = {
  increment: () => {
    return async (dispatch) => {
      //put async logic here

      await dummyReq();
      dispatch(
        CounterSlice.actions.increment()
      );
    };
  },
  decrement: () => {
    return (dispatch) => {
      dummyReq().then(() => {
        dispatch(
          CounterSlice.actions.decrement()
        );
      });
    };
  },
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    add(state, { payload }) {
      state.tasks = [
        ...state.tasks,
        payload,
      ];
    },
    remove(state, { payload }) {
      state.tasks =
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
            ];
    },
  },
});

export const tasksAction =
  TaskSlice.actions;

const Store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    tasks: TaskSlice.reducer,
  },
});

export default Store;
