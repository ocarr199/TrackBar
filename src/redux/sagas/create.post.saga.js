import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* createPostSaga(action) {
      console.log(action.payload)
    try {

     yield axios.post(`/createPost`, action.payload);
  
      // now that the session has given us a user object
      // with an id and username set the client-side user object to let
      // the client-side code know the user is logged in
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }

  function* getPostSaga() {
    console.log("got to getPostSaga")
    try {
      const posts = yield axios.get(`/createPost`);
      console.log(posts.data)
      yield put({type:'SET_POSTS', payload: posts.data})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }
  
  function* postSaga() {
    yield takeLatest('SEND_POST', createPostSaga);
    yield takeLatest('FETCH_POSTS', getPostSaga)

  }
  
  export default postSaga;