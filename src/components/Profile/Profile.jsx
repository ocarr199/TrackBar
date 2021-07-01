import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import Post from '../Post/Post'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useParams} from 'react-router-dom'

function Profile () {
    const dispatch = useDispatch();
const { id } = useParams();
    useEffect(() => {
        console.log(id)
        console.log(user.id)
        console.log('at profile')
        ownerOrNot()
        console.log(owner)
        dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: id}})
      }, []);
      let owner;
const ownerOrNot = () => {
    if (user.id == id ){
        return owner = true
    }
    return owner = false
}


        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)

        console.log(user.id)

    const deletePost = (post) => {
        console.log("deletePost", post.id)

        dispatch({type: 'DELETE_PROFILE_POSTS', payload:{postID: post.id, userID: user.id}})
    
    }


console.log(posts)
console.log(user)
console.log(user)
    return(
        <> 
           <div className="main-feed">
        <h1>Profile</h1>
        {posts.map(post => {
            return(
                <div className="posts">
                <div>
                 <div >@ {post.username} </div>
            <h1>Rating: {post.rating}/10</h1>
            <h3>{post.description}</h3>
            <div className="responses">
            <p>{post.favorites} favorites</p>
            <button onClick={() => {deletePost(post)}}>delete</button>
           </div>
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