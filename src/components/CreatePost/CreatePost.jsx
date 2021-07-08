import React, {useState, useEffect}from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from '../TrackSearchResult/TrackSearchResult';

const spotifyApi = new SpotifyWebApi({
    clientId: 'd4956c6d21884362801895a3c9a69d67'
})

function CreatePost({code}) {
// local states
    const [description, setDescription] = useState('');
    const [embed, setEmbed] = useState('');
    const [rating, setRating] = useState('');
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)
// requiring packages
    const dispatch = useDispatch();
    let history = useHistory();
const user = useSelector(store => store.user)
// spotify api
const accessToken = useAuth(code)

console.log(user)

useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
}, [accessToken])

useEffect(() => {
if (!search) return setSearchResults([])
if(!accessToken) return

let cancel = false
spotifyApi.searchTracks(search).then(res => {
    if (cancel) return
   setSearchResults(res.body.tracks.items.map(track => {
    const smallestAlbumImage = track.album.images.reduce(
        (smallest, image) => {
            if(image.height < smallest.height) return image
            return smallest
        }, track.album.images[0])
    return{
        artist: track.artists[0].name,
        title: track.name,
        uri: track.uri,
        albumUrl: smallestAlbumImage.url
    } 
    })
    )
})
return () => cancel = true 
}, [search, accessToken])

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
        dispatch({ type: 'SEND_POST', payload: {description: description,rating: rating, embed_code: `https://open.spotify.com/embed/track/${embed.slice(14)}`, user_id: user.id}});
        //updates the next plant to have a new id
        setDescription('');
        setEmbed('');
        setRating('');
        history.push('/feed')
    }
    console.log(embed)
return(
    <>
    <p>Create Post</p>
    <form onSubmit={submitPost}>
                <TextField onChange={handleDescriptionChange} value={description} id="outlined-basic" label="Description" variant="outlined" />
                 <TextField onChange={handleRatingChange} value={rating} id="outlined-basic" label="rating"    type="number" variant="outlined" />
                <TextField  
                value={search}
                 onChange={e => setSearch(e.target.value)}
                 id="outlined-basic"
                label="search" 
                variant="outlined" />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Post
                  </Button>
            </form>
            {searchResults.map(track => (
                <TrackSearchResult track={track} key={track.uri} setEmbed={setEmbed} embed={embed}/>
            ))}
    </>
)

}

export default CreatePost