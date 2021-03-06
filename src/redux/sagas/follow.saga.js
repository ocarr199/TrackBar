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

   function* unfollowUserSaga(action) {
    console.log("got tounfollow saga")
     try {
         console.log('action payload unfollow saga', action.payload)
      yield axios.delete(`/follow`, {data: action.payload})
    //   yield put({type:'SET_USERS', payload: allUsers.data})
    } catch (error) {
      console.log('fetch all users saga error -> ', error);
    }
  }

     
  function* fetchFollowingSaga(action) {

    console.log("fetch current user following ", action.payload)
     try {
     const following = yield axios.get(`/follow/${action.payload}`);
     console.log(following.data)
      yield put({type:'SET_FOLLOWING', payload: following.data})
    } catch (error) {
      console.log('fetch current user following error -> ', error);
    }
  }





  function* followSaga() {
    yield takeLatest('FOLLOW_USER', followUserSaga);
    yield takeLatest('FETCH_FOLLOWING', fetchFollowingSaga);
    yield takeLatest('UNFOLLOW', unfollowUserSaga)
  }
  
  export default followSaga;