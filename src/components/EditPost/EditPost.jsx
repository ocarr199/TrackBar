import React, {useState}from 'react';
import  { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function EditPost() {
// local states

// requiring packages
    const dispatch = useDispatch();
    let history = useHistory();
    const { id } = useParams();

const user = useSelector(store => store.user)
const editPost = useSelector(store => store.editPost);
console.log(editPost)


    useEffect(() => {
        console.log('at edit page', id)
        dispatch({type: 'FETCH_EDIT_POST', payload: id})
      }, []);



    const handleDescriptionChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        dispatch({type: 'EDIT_ONCHANGE', payload:{key: event.target.name , value: event.target.value}})
    }

            const handleRatingChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
       dispatch({type: 'EDIT_ONCHANGE', payload:{key: event.target.name , value: event.target.value}})
    }

    const submitEdit = event => {
        event.preventDefault();
        console.log("in confirm edit on click")
       dispatch({type: 'CONFIRM_EDIT', payload: editPost})
       history.push(`/profile/${user.id}`)

    }


return(
    <>
    <p>Edit Post</p>
    <form onSubmit={submitEdit}>
                <TextField 
                name="description"
                onChange={handleDescriptionChange}
                 value={editPost.description} 
                 id="outlined-basic"  
                 variant="outlined" />
                 <TextField 
                 name="rating"
                 onChange={handleRatingChange} 
                 value={editPost.rating} id="outlined-basic"  
                  type="number" 
                  variant="outlined" />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Post
                  </Button>


            </form>
    </>
)

}

export default EditPost