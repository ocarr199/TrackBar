
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
    const { id } = useParams();

// redux state
        const posts = useSelector(store => store.posts);
        const user = useSelector(store => store.user)
        const profile = useSelector(store => store.profile)
        const followers = useSelector(store=> store.followers)
        const following = useSelector(store => store.followReducer)
      
// 
    // useEffect(() => {
    //     dispatch({type:'FETCH_FOLLOWING'})
    //     console.log(following)
    // //    let isFollowing = following.some(follow => follow.id  = po)
    //    console.log(follower)

    //   }, []);
//  run on load to fetch posts for that profile
    useEffect( () => {
        console.log()
        console.log('at profile')
        dispatch({type:"FETCH_PROFILE_FOLLOWERS", payload:{user_id: id}})
        dispatch({type: 'FETCH_PROFILE', payload:{user_id: id}})
        dispatch({type: 'FETCH_PROFILE_POSTS', payload:{user_id: id}})
   
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

const followersIncludes = followers?.includes(user.id)

// creates row in following table where accounts are linked
// follows user
    const followUser = () => {
        console.log("in follow User")
        dispatch({type : 'FOLLOW_USER', payload: {following_user_id: user.id, followed_user_id: id }})
        location.reload()
     console.log(followersIncludes)
    }

// deletes row from following table where accounts are linked
// unfollows user
   const unfollowUser = () => {
       console.log("in unfollow user")
        dispatch({type : 'UNFOLLOW', payload: {following_user_id: user.id, followed_user_id: id }})
        location.reload()
   }


const goToComments = (post) => {
    console.log("going to comments")
    history.push(`/comments/${post.id}`)
}

    return(
        <> 
           <div className="main-feed">
        <h1> {profile.username}'s Profile</h1>
        {user.id == id ?<></>: followersIncludes ? <button onClick={unfollowUser}>Unfollow</button>: <button onClick={followUser}>Follow</button>}
         {/* {user.id == id ? 
         ( ): 
        ( ):
        userFollowProfile ? : (<></>)
        } */}

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