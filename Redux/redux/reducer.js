const reducer = (state = { count: 0 }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return { count: state.count + payload };
    case "decrement":
      return { count: state.count - payload };
    default:
      return state;
  }
};

export default reducer;
