import TextField from '@material-ui/core/TextField';
import axios from "axios"
import React, {useState}from 'react';
function Comments() {

    const [currentComment, setCurrentComment] = useState('');


const handleCommentChange = (event) => {
setCurrentComment(event.target.value)
console.log(currentComment)
}
const confirmComment = () => {
console.log(currentComment)
}


    return(
        <>
  <TextField onChange={handleCommentChange} value={currentComment} id="outlined-basic"  variant="outlined" />
    <div className="comments">
    
    </div>
         </>
    )
}

export default Comments