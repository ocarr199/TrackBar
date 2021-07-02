import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


   


  function* followUserSaga(action) {
    console.log("got to fetch all users saga")
     try {
         console.log(action.payload)
      yield axios.post(`/follow`, action.payload);
    //   yield put({type:'SET_USERS', payload: allUsers.data})
    } catch (error) {
      console.log('fetch all users saga error -> ', error);
    }
  }

     
  function* fetchFollowingSaga(action) {
    console.log("fetch following ")
     try {
         console.log(action.payload)
     const following = yield axios.get(`/follow`);
     console.log(following.data)
      yield put({type:'SET_FOLLOWING', payload: following.data})
    } catch (error) {
      console.log('fetch all users saga error -> ', error);
    }
  }





  function* followSaga() {
    yield takeLatest('FOLLOW_USER', followUserSaga);
        yield takeLatest('FETCH_FOLLOWING', fetchFollowingSaga);


  }
  
  export default followSaga;