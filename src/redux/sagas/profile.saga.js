import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';




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



  
  function* profileSaga() {
    yield takeLatest('FETCH_PROFILE_POSTS', fetchProfilePosts)
        yield takeLatest('DELETE_PROFILE_POSTS', deleteProfilePosts)
        yield takeLatest('FAVORITE_PROFILE_POST', favoriteProfilePostSaga)
  }
  
  export default profileSaga;