import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

  function* fetchProfile(action) {
    console.log("got to fetchProfile payload id ->", action.payload)
    try {
      const profile = yield axios.get(`/post/profileUser/${action.payload.user_id}`);
      console.log(profile.data)
      yield put({type:'SET_PROFILE', payload: profile.data})
    } catch (error) {
      console.log('fetch profile posts failed', error);
    }
  }

   function* fetchFollowers(action) {
    console.log("got to fetch Profile Followers, payload ->", action.payload)
    try {
      const followersObject = yield axios.get(`/post/followers/${action.payload.user_id}`);
      const followersArray = followersObject.data.map(object => {
        return( object.following_user_id)
      })
      console.log("followersArray", followersArray)
      yield put({type:'SET_FOLLOWERS', payload: followersArray})
    } catch (error) {
      console.log('fetch profile followers failed', error);
    }
  }


  function* fetchProfilePosts(action) {
    console.log("got to fetchProfilePosts payload id ->", action.payload)
    try {
      const profPosts = yield axios.get(`/post/profile/${action.payload.user_id}`);
      console.log(profPosts.data)
      yield put({type:'SET_USER_POSTS', payload: profPosts.data})
    } catch (error) {
      console.log('fetch profile posts failed', error);
    }
  }

  

 function* favoriteProfilePostSaga(action) {
    console.log("got to favoritePostSaga (profile saga) with payload ->", action.payload)
    try {
   yield axios.put(`post/favorite/${action.payload.id}`);
       yield put ({type: 'FETCH_PROFILE_POSTS', payload: action.payload})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }


  function* deleteProfilePosts(action) {
    console.log("got to deleteProfilePosts payload is ->", action.payload)
    try {
      yield axios.delete(`/post/profile/${action.payload.post_id}`);
      yield put({type:'FETCH_PROFILE_POSTS', payload: action.payload})
    } catch (error) {
      console.log('fetch profile posts failed', error);
    }
  }


  function* fetchEditProfilePosts(action) {
    console.log("got to edit, payload is ->", action.payload)
    try {
      const editPost = yield axios.get(`/post/edit/${action.payload}`);
      console.log(editPost.data)
      yield put({type:'SET_EDIT_POST', payload: editPost.data})
    } catch (error) {
      console.log('fetch profile posts failed', error);
    }
  }



  
  function* profileSaga() {
     yield takeLatest('FETCH_PROFILE', fetchProfile)
    yield takeLatest('FETCH_PROFILE_POSTS', fetchProfilePosts)
        yield takeLatest('DELETE_PROFILE_POSTS', deleteProfilePosts)
        yield takeLatest('FETCH_EDIT_POST', fetchEditProfilePosts)
        yield takeLatest('FAVORITE_PROFILE_POST', favoriteProfilePostSaga)
        yield takeLatest('FETCH_PROFILE_FOLLOWERS', fetchFollowers)
  }
  
  export default profileSaga;