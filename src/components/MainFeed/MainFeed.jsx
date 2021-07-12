import Post from '../Post/Post'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useHistory} from 'react-router-dom'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import './MainFeed.css'
function MainFeed() {
// initializing packages
   const dispatch = useDispatch();
    const history= useHistory();
// code to run on load
    useEffect(() => {
        // retrieving all posts ever made on app for now (want to make it all posts made by people you follow)
        // sets the posts state in redux
        dispatch({ type: 'FETCH_POSTS' });
        // fetching all the people that the current logged in user is following
        // sets the following state in redux
        dispatch({type:'FETCH_FOLLOWING', payload: user.id })
    }, []);
        // state from redux
        // posts 
        const posts = useSelector(store => store.posts);
        // current user
        const user = useSelector(store => store.user)
        // wh the current user follows
        const following = useSelector(store => store.followReducer)
    // function to like a post
    const favoritePost = (post) => {
        dispatch({type: 'FAVORITE_POST', payload: post.id})
    }

// function to be brought to a profile
const goToProfile = (post) => {
        // goes to the profile with the same user id of the post you clicked on
        history.push(`/profile/${post.user_id}`)
}
// function to be brought to that post's comments page
const goToComments = (post) => {
    console.log("going to comments")
    history.push(`/comments/${post.id}`)
}


        // just getting the ids from the following array
        const followingIDs = following.map(follow => follow.id)
    return(
        <div className="main-feed">
        <h1 className="header">Main Feed</h1>
        {/* filter posts to just show posts from people you are */}
        {posts.filter((post) => followingIDs.includes(post.user_id)).map(post => {
            return(
                <div className="posts contentHolder">
                <div>
                 <div className="info">
                 <div style={{cursor: "pointer"}} onClick={() => goToProfile(post)}>@{post.username} </div>
                 <h1>Rating: {post.rating}/10</h1>
                <p>{post.description}</p>
       
            <ThumbUpAltIcon id="likeBtn" style={{cursor: "pointer"}} onClick={() => {favoritePost(post)}}/>
            {post.favorites}
            <div>
            <InsertCommentIcon  style={{cursor: "pointer"}} onClick={() => goToComments(post)}/>
            {/* <button onClick={() => goToComments(post)}>comments</button> */}
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