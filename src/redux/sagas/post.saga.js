import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* createPostSaga(action) {
      console.log(action.payload)
    try {

     yield axios.post(`/post`, action.payload);
       yield put ({type: 'FETCH_POSTS'})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }

  function* getPostSaga() {
    console.log("got to getPostSaga")
    try {
      const posts = yield axios.get(`/post`);
      console.log(posts.data)
      yield put({type:'SET_POSTS', payload: posts.data})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }


  function* favoritePostSaga(action) {
    console.log("got to favoritePostSaga with payload ->", action.payload)
    try {
   yield axios.put(`post/favorite/${action.payload}`);
       yield put ({type: 'FETCH_POSTS'})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }

 function* fetchFavoritesSaga(action) {
    console.log("got to getPostSaga")
    try {
      const posts = yield axios.get(`/post/favorite`);
      console.log(posts.data)
      yield put({type:'SET_POSTS', payload: posts.data})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }

  
  function* postSaga() {
    yield takeLatest('SEND_POST', createPostSaga);
    yield takeLatest('FETCH_POSTS', getPostSaga);
    yield takeLatest('FAVORITE_POST', favoritePostSaga);
    yield takeLatest('FETCH_FAVORITES', fetchFavoritesSaga);
  }
  
  export default postSaga;