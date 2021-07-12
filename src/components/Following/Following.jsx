import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './Following.css'
function Following () {
  const dispatch = useDispatch();
  const history= useHistory();
    let [userSearch, setUserSearch]=useState('')
        const followingList = useSelector(store => store.followReducer)
        const user = useSelector(store => store.user)
    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_USERS' });
        // dispatch({type: 'FETCH_FAVORITES'})
        dispatch({type:'FETCH_FOLLOWING', payload: user.id })
    }, []);
   const  handleSearchChange = (event) => {
       setUserSearch(event.target.value)
       console.log(userSearch)

   }

const goToProfile = (user) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${user.id}`)
}


console.log('following', followingList)

 const users = useSelector(store => store.allUsers)

console.log(users)
// const result = users.filter(user === searchBs );
    return(
        <div className='followingPage '>
        <div className="search-users contentHolder">
        <h2>search</h2>
        <TextField value={userSearch} onChange={handleSearchChange} id="outlined-basic" label="search for users" variant="outlined" />
        <List>
        {users.filter((user) => user.username.includes(userSearch)).map(user => {
            return(
                <ListItem>
                <p 
                key={user.id}
                style={{cursor: "pointer"}} 
                onClick={() => goToProfile(user)}>@{user.username}</p>
                </ListItem>
           )
        })}
        </List>
        </div>
        

        <div className="following-list contentHolder">
        <h2>Following</h2>
        <List>
        {followingList.map(following => {
            return(
                <ListItem>
                           <p
                            key={following.id}
                            style={{cursor: "pointer"}} 
                            onClick={() => goToProfile(following)}
                            >@{following.username}</p>
                </ListItem>
            )
     
        })}
        </List>
         </div>
        </div>
    )
}


export default Following;