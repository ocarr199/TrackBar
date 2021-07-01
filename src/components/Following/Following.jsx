import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
function Following () {
  const dispatch = useDispatch();

    let [userSearch, setUserSearch]=useState('')

    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_USERS' });
        // dispatch({type: 'FETCH_FAVORITES'})
    }, []);
   const  handleSearchChange = (event) => {
       setUserSearch(event.target.value)
       console.log(userSearch)

   }
console.log(userSearch)
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
                <p>{user.username}</p>
           )
        })}
        </div>

        <div className="following-list">following </div>
        </>
    )
}


export default Following;