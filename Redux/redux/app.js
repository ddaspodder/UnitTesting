import store from "./store";
import counter from "./counter";

store.subscribe(() => counter(store));

store.dispatch({ type: "increment", payload: 20 });
