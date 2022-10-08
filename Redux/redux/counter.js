const counter = (store) => {
  const { count } = store.getState();
  console.log("counter called with the state", count);
  return count;
};

export default counter;
