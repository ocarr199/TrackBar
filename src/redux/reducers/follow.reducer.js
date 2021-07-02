const followReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FOLLOWING':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default followReducer;
