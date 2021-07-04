import TextField from '@material-ui/core/TextField';
import axios from "axios"
import React, {useState}from 'react';
import {useParams, useHistory } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import  { useEffect } from 'react';
import './Comments.css'
function Comments() {
const history = useHistory()
    const [currentComment, setCurrentComment] = useState('');
  const user = useSelector(store => store.user)
    const allComments = useSelector(store => store.allComments)
      const dispatch = useDispatch();
const { id } = useParams();

    useEffect(() => {
        console.log('at comments')
        dispatch({type: 'FETCH_COMMENTS', payload:{post_id: id}})
      
      }, []);


const handleCommentChange = (event) => {
setCurrentComment(event.target.value)
console.log(currentComment)
}
const confirmComment = () => {
console.log(currentComment)
 dispatch({type: "CONFIRM_COMMENT", payload: {post_id: id, user_id: user.id, comment:currentComment  }})
 location.reload()
//  dispatch({type: 'FETCH_COMMENTS', payload:{post_id: id}})
}

const goBack = () => {
  history.goBack()
}

const goToProfile = (comment) => {
    //  dispatch({type: 'FETCH_PROFILE_POSTS', payload:{userID: post.user_id}})
        history.push(`/profile/${comment.user_id}`)
}



    return(
    <>
    <p>Create Post</p>
    <form onSubmit={confirmComment}>
                <TextField 
                onChange={handleCommentChange}
                 value={currentComment} 
                 id="outlined-basic" 
                 label="Description"
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