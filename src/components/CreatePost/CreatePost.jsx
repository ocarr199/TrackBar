import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CreatePost() {
// local states
    const [description, setDescription] = useState('');
    const [embed, setEmbed] = useState('');
    const [rating, setRating] = useState('');

// requiring packages
    const dispatch = useDispatch();
    let history = useHistory();

const user = useSelector(store => store.user)

console.log(user)

    const handleDescriptionChange = (event) => {
        console.log(description);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setDescription(event.target.value)
    }
        const handleEmbedChange = (event) => {
        console.log(embed);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setEmbed(event.target.value)
    }
            const handleRatingChange = (event) => {
        console.log(rating);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setRating(event.target.value)
    }

    const submitPost = event => {
        event.preventDefault();
        console.log(embed.slice(50, 72))
        dispatch({ type: 'SEND_POST', payload: {description: description,rating: rating, embed_code: `https://open.spotify.com/embed/track/${embed.slice(50, 72)}`, user_id: user.id}});
        //updates the next plant to have a new id
        setDescription('');
        setEmbed('');
        setRating('');
        history.push('/feed')
    }
return(
    <>
    <p>Create Post</p>
    <form onSubmit={submitPost}>
                <TextField onChange={handleDescriptionChange} value={description} id="outlined-basic" label="Description" variant="outlined" />
                 <TextField onChange={handleRatingChange} value={rating} id="outlined-basic" label="rating"    type="number" variant="outlined" />
                <TextField onChange={handleEmbedChange} value={embed} id="outlined-basic" label="embed code" variant="outlined" />

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

export default CreatePost