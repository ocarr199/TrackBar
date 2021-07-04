import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import posts from './posts.reducer';
import allUsers from './all.users.reducer'
import followReducer from './follow.reducer'
import editPost from './edit.reducer'
import allComments from './comments.reducer'
import profile from './profile.reducer'
import followers from './followers.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  posts,
  allUsers,
  followReducer, 
  editPost,
  allComments,
  profile,
  followers
});

export default rootReducer;
