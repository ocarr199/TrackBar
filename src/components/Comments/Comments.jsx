
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
function Comments() {
const spotifyApi = new SpotifyWebApi({
  clientId: "7f0e38633fa247baa942e180af78b033",
})
    
    return(
        <>
          <Card>  
        <Typography variant="h6" component="h2">
            {user.username}
        </Typography>

        <Typography variant="body2" component="h2">
            BIO GOES HERE 
        </Typography>
        </Card>
         </>
    )
}

export default Comments