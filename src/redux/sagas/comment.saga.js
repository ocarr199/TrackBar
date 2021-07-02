import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* confirmCommentSaga(action) {
      console.log(action.payload)
    try {
     yield axios.post(`post/comment`, action.payload);
   
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }

   function* fetchCommentsSaga(action) {
    console.log("got to fetch comments saga")
    try {
      const comments = yield axios.get(`/post/comment/${action.payload.post_id}`, );
      console.log(comments.data)
      yield put({type:'SET_COMMENTS', payload: comments.data})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }



  
  function* commentSaga() {
    yield takeLatest('CONFIRM_COMMENT', confirmCommentSaga);
    yield takeLatest('FETCH_COMMENTS', fetchCommentsSaga);

  }
  
  export default commentSaga;