import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


  

  function* editPostSaga(action) {
    console.log("got confirm edit", action.payload)
    try {
   yield axios.put(`post/edit`, action.payload);
       yield put ({type: 'FETCH_POSTS'})
    } catch (error) {
      console.log('post song stuff failed', error);
    }
  }


  

  
  function* editSaga() {

    yield takeLatest('CONFIRM_EDIT', editPostSaga);

  }
  
  export default editSaga;