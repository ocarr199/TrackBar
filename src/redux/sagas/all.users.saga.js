import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


   


  function* fetchUsersSaga(action) {
    console.log("got to fetch all users saga")
     try {
      const allUsers = yield axios.get(`/allUsers`);
      console.log(allUsers.data)
      yield put({type:'SET_USERS', payload: allUsers.data})
    } catch (error) {
      console.log('fetch all users saga error -> ', error);
    }
  }




  function* allUsersSaga() {
    yield takeLatest('FETCH_USERS', fetchUsersSaga);

  }
  
  export default allUsersSaga;