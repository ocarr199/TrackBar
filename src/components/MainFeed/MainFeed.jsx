import Post from '../Post/Post'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useHistory} from 'react-router-dom'
import './MainFeed.css'
function MainFeed() {

   const dispatch = useDispatch();
    const history= useHistory();

    useEffect(() => {
        // run the sagas for FETCH_MOVIES and FETCH_GENRES on load
        dispatch({ type: 'FETCH_POSTS' });
        // dispatch({type: 'FETCH_FAVORITES'})
    }, []);

        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)


    const favoritePost = (post) => {
        dispatch({type: 'FAVORITE_POST', payload: post.id})
    }


const goToProfile = (post) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${post.user_id}`)
}
   const parser = new DOMParser();
    let iframe = parser
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
                <h3>{post.description}</h3>
       
            <ThumbUpAltIcon id="likeBtn" onClick={() => {favoritePost(post)}}/>
            {post.favorites}
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