import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom'
import './Following.css'
function Following () {
  const dispatch = useDispatch();
  const history= useHistory();
    let [userSearch, setUserSearch]=useState('')

        const followingList = useSelector(store => store.followReducer)

    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_USERS' });
        // dispatch({type: 'FETCH_FAVORITES'})
        dispatch({type:'FETCH_FOLLOWING'})
    }, []);
   const  handleSearchChange = (event) => {
       setUserSearch(event.target.value)
       console.log(userSearch)

   }

const goToProfile = (user) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${user.id}`)
}


console.log(followingList)

 const users = useSelector(store => store.allUsers)

console.log(users)
// const result = users.filter(user === searchBs );
    return(
        <>
        <div className="search-users">
        <h2>search</h2>
        <TextField value={userSearch} onChange={handleSearchChange} id="outlined-basic" label="search for users" variant="outlined" />
        {users.filter((user) => user.username.includes(userSearch)).map(user => {
            return(
                <p onClick={() => goToProfile(user)}>@{user.username}</p>
           )
        })}
        </div>

        <div className="following-list">
        <h2>Following</h2>
        {followingList.map(following => {
            return(
                           <p onClick={() => goToProfile(following)}>@{following.username}</p>
            )
     
        })}
         </div>
        </>
    )
}


export default Following;