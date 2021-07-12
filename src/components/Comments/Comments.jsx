import TextField from '@material-ui/core/TextField';
import axios from "axios"
import React, {useState}from 'react';
import {useParams, useHistory } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import  { useEffect } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Card from '@material-ui/core/Card';
import './Comments.css'
function Comments() {
  // initializing packages 
const history = useHistory()
const { id } = useParams();``
const dispatch = useDispatch();

// local state variable for current comments
    const [currentComment, setCurrentComment] = useState('');

  //  redux state for current user and all comments 
  const user = useSelector(store => store.user)
  const posts = useSelector(store => store.posts);
  const allComments = useSelector(store => store.allComments)
console.log(posts)

// run on load 
    useEffect(() => {
        console.log('at comments')
        dispatch({type: 'FETCH_COMMENTS', payload:{post_id: id}})
        dispatch({type: 'FETCH_POSTS'})
      }, []);

// changing state of current comment
const handleCommentChange = (event) => {
setCurrentComment(event.target.value)
console.log(currentComment)
}
// posting comment to database
const confirmComment = () => {
console.log(currentComment)
 dispatch({type: "CONFIRM_COMMENT", payload: {post_id: id, user_id: user.id, comment: currentComment  }})
// dispatch({type: 'FETCH_COMMENTS', payload:{post_id: id}})
 location.reload()
setCurrentComment('')
}
// go back to previous page
const goBack = () => {
  history.push(`/feed`)
}
// go to persons profile on click of their username
const goToProfile = (comment) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${comment.user_id}`)
}

const exampleComment = () => {
  setCurrentComment("Haven't heard this one before but I'm for sure gonna check it out")
}

    return(
    <>
      <Button
                    onClick={goBack}
                    variant="contained"
                    color="secondary"
                >
                    Back
                  </Button>
    <p onClick={exampleComment}>COMMENT</p>
    {posts.filter((element) => element.id == id).map(post => {
            return(
                <div className="posts contentHolder">
                <div>
                 <div className="info">
                 <div onClick={() => goToProfile(post)}>@{post.username} </div>
                 <h1>Rating: {post.rating}/10</h1>
                <p>{post.description}</p>
       
            <ThumbUpAltIcon id="likeBtn" onClick={() => {favoritePost(post)}}/>
            {post.favorites}
           </div>
           </div>
           <iframe className="player" src={post.embed_code} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
           )
        })}
    <form onSubmit={confirmComment}>
                <TextField 
                fullWidth
                onChange={handleCommentChange}
                 value={currentComment} 
                 id="outlined-basic" 
                 label="comment"
                 variant="outlined"
                 style={{backgroundColor:"white"}} />
                
                <button
                className='btn postComment'
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Post
                  </button>


            </form>
             

            {allComments.map(comment => {
            return(
              <Card
              variant="outlined"
              style={{height:'100px', width: '400px'}} >
             
             <p onClick={() => goToProfile(comment)}>@{comment.username}</p>
                <p>{comment.comment}</p>
            
             </Card>
           )
        })}
           
    </>
    )
}

export default Comments