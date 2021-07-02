
const editPost = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_POST':
      return action.payload[0];
         case 'EDIT_ONCHANGE':
      return {...state, [action.payload.key]: action.payload.value};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default editPost;