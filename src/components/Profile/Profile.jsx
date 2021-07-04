
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import React, {useState}from 'react';
import  { useEffect } from 'react';
import {  useSelector } from 'react-redux'
import Post from '../Post/Post'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useParams, useHistory } from 'react-router-dom'


function Profile () {
    const dispatch = useDispatch();
      let history = useHistory();
// local state
      const [follower, setFollower] =useState(false)
// redux state
        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)
        const profile = useSelector(store => store.profile)
     const following = useSelector(store => store.followReducer)
const { id } = useParams();
// 
    // useEffect(() => {
    //     dispatch({type:'FETCH_FOLLOWING'})
    //     console.log(following)
    // //    let isFollowing = following.some(follow => follow.id  = po)
    //    console.log(follower)

    //   }, []);
//  run on load to fetch posts for that profile
    useEffect(() => {
        console.log('at profile')
        dispatch({type: 'FETCH_PROFILE', payload:{user_id: id}})
        // dispatch({type: 'FETCH_PROFILE_POSTS', payload:{user_id: id}})
      }, []);



       
// deletes post from DB
    const deletePost = (post) => {
        console.log("deletePost", post.id)
        dispatch({type: 'DELETE_PROFILE_POSTS', payload:{post_id: post.id, user_id: user.id}})
    }

// brings user to edit page for that post
    const editPost = (post) => {
        console.log("deletePost", post.id)
        history.push(`/edit/${post.id}`)
    }

    const favoritePost = (post) => {
        dispatch({type: 'FAVORITE_PROFILE_POST', payload: post})
    }


    const followUser = () => {
        console.log("in follow User")
        dispatch({type : 'FOLLOW_USER', payload: {following_user_id: user.id, followed_user_id: id }})
        console.log(follower)
    }

const goToComments = (post) => {
    console.log("going to comments")
    history.push(`/comments/${post.id}`)
}

    // variable for making an
// console.log("who i am following",following)
// console.log(posts[0]?.user_id)
// console.log("follower?", follower)
// console.log("following includes", following.includes({id: 2}))
// console.log(posts)
// console.log(user)
// console.log(user)
    return(
        <> 
           <div className="main-feed">
        <h1> {profile.username}'s Profile</h1>
                 {user.id == id ? (
            <></>
            ): ( <button onClick={followUser}>Follow Profile</button>)}
        {posts.map(post => {
            return(
                <>
   



                <div className="posts">
                <div>
                 <div className="info">
                 <div >@ {post.username} </div>
            <h1>Rating: {post.rating}/10</h1>
            <p>{post.description}</p>
           
            <p>{post.favorites} favorites</p>
            {user.id == id ? (<div>
            <div>   
             <button onClick={() => {editPost(post)}}>Edit</button>
            </div>  
              <div>
            <button onClick={() => {deletePost(post)}}>Delete</button>
            </div>
            </div>
            ): ( <ThumbUpAltIcon id="likeBtn" onClick={() => {favoritePost(post)}}/>)}
                     <button onClick={() => goToComments(post)}>comments</button>
           </div>
  
           </div>
           <iframe  className="player" src={post.embed_code} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
           </>
           )
        })}
       
        </div>

        </>
    )
}

export default Profile;