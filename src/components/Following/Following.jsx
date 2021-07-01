import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function Following () {
  const dispatch = useDispatch();

    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_USERS' });
        // dispatch({type: 'FETCH_FAVORITES'})
    }, []);


 const users = useSelector(store => store.allUsers)
console.log(users)
    return(
        <>
        <div className="search-users">
        <h2>search</h2>
        {users.map(user => {
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