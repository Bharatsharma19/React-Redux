const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    if (state === 0 || state < 0) {
      alert("Balance can't be negative");
    } else {
      return state - action.payload;
    }
  } else {
    return state;
  }
};

export default reducer;
