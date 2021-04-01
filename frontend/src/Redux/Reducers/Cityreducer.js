const Citydata = (state = {}, action) => {
  switch (action.type) {
    case "citydata":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default Citydata;
