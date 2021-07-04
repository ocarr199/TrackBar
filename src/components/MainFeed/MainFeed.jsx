import Post from '../Post/Post'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useHistory} from 'react-router-dom'
import './MainFeed.css'
function MainFeed() {
// initializing packages
   const dispatch = useDispatch();
    const history= useHistory();
// code to run on load
    useEffect(() => {
        // retrieving all posts ever made on app for now (want to make it all posts made by people you follow)
        dispatch({ type: 'FETCH_POSTS' });
    }, []);
        // state from redux
        // posts
        const posts = useSelector(store => store.posts);
        // current user
        const user = useSelector(store => store.user)

    // function to like a post
    const favoritePost = (post) => {
        dispatch({type: 'FAVORITE_POST', payload: post.id})
    }

// function to be brought to a profile
const goToProfile = (post) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${post.user_id}`)
}
// function to be brought to that post's comments page
const goToComments = (post) => {
    console.log("going to comments")
    history.push(`/comments/${post.id}`)
}

        console.log(posts)

    return(
        <div className="main-feed">
        <h1>MainFeed</h1>

        {posts.map(post => {
            return(
                <div className="posts">
                <div>
                 <div className="info">
                 <div onClick={() => goToProfile(post)}>@{post.username} </div>
                 <h1>Rating: {post.rating}/10</h1>
                <p>{post.description}</p>
       
            <ThumbUpAltIcon id="likeBtn" onClick={() => {favoritePost(post)}}/>
            {post.favorites}
            <div>
            <button onClick={() => goToComments(post)}>comments</button>
            </div>
           </div>
           </div>
           <iframe className="player" src={post.embed_code} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
           )
        })}
       
        </div>
    )
}

export default MainFeed;