import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import Post from '../Post/Post'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function Profile () {
    const dispatch = useDispatch();

    useEffect(() => {
 
        dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: user.id}})
      }, []);


        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)

        console.log(user.id)

    const deletePost = (post) => {
        console.log("deletePost", post.id)

        dispatch({type: 'DELETE_PROFILE_POSTS', payload:{postID: post.id, userID: user.id}})
    }


console.log(user)
    return(
        <> 
           <div className="main-feed">
        <h1>Profile</h1>
        {posts.map(post => {
            return(
                <div className="posts">
                 <p>@ {post.username} </p>
            <h1>Rating: {post.rating}/10</h1>
            <h3>{post.description}</h3>
            <div className="responses">
            {post.favorites}
            <button onClick={() => {deletePost(post)}}>delete</button>
           </div>
           <iframe src={post.embed_code} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
           )
        })}
       
        </div>

        </>
    )
}

export default Profile;