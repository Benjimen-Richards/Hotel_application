const Allusers = (state = {}, action) => {
  switch (action.type) {
    case "allusers":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default Allusers;
