


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
        case 'SET_USER_POSTS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default postsReducer;