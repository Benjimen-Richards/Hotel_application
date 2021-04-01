const Userdata = (state = {}, action) => {
  switch (action.type) {
    case "adduser":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default Userdata;
