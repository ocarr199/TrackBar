import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import Post from '../Post/Post'
function Profile () {
    const dispatch = useDispatch();

    useEffect(() => {
 
        dispatch({type: 'FETCH_PROFILE_POSTS', payload:user.id})
      }, []);


        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)

        console.log(user.id)

console.log(user)
    return(
        <> 
   

        </>
    )
}

export default Profile;