import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import Post from '../Post/Post'
function Profile () {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
      }, [dispatch]);
console.log(user)
    return(
        <> 
      <Card>  
        <Typography variant="h6" component="h2">
            {user.username}
        </Typography>

        <Typography variant="body2" component="h2">
            BIO GOES HERE 
        </Typography>
        </Card>
        <Post />
        </>
    )
}

export default Profile;