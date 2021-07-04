import TextField from '@material-ui/core/TextField';
import axios from "axios"
import React, {useState}from 'react';
import {useParams, useHistory } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import  { useEffect } from 'react';
import './Comments.css'
function Comments() {
  // initializing packages 
const history = useHistory()
const { id } = useParams();
const dispatch = useDispatch();

// local state variable for current comments
    const [currentComment, setCurrentComment] = useState('');

  //  redux state for current user and all comments 
  const user = useSelector(store => store.user)
  const allComments = useSelector(store => store.allComments)


// run on load 
    useEffect(() => {
        console.log('at comments')
        dispatch({type: 'FETCH_COMMENTS', payload:{post_id: id}})
      
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
  history.goBack()
}
// go to persons profile on click of their username
const goToProfile = (comment) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${comment.user_id}`)
}



    return(
    <>
    <p>COMMENT</p>
    <form onSubmit={confirmComment}>
                <TextField 
                onChange={handleCommentChange}
                 value={currentComment} 
                 id="outlined-basic" 
                 label="comment"
                 variant="outlined" />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Post
                  </Button>


            </form>
               <Button
                    onClick={goBack}
                    variant="contained"
                    color="secondary"
                >
                    Back
                  </Button>

            {allComments.map(comment => {
            return(
             <div className="commentDiv">
             <p onClick={() => goToProfile(comment)}>@{comment.username}</p>
                <p>{comment.comment}</p>
             </div>
           )
        })}
           
    </>
    )
}

export default Comments