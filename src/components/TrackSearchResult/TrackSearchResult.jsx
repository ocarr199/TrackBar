import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './TrackSearchResults.css'
import React, {useState}from 'react';
function TrackSearchResult ({track, setEmbed, embed, setChosenTrack, chosenTrack}) {
    
 
    
    function selectSong(track, event){
        console.log('track',track)
        console.log('chosenTrack', chosenTrack)
        setEmbed(track.uri)
        setChosenTrack(track.title)
  

    }

    console.log("embed is",embed)
    
    
    return(
    <Card 
    onClick={() => selectSong(track, event)}
    variant="outlined"
    style={{height:'140px', width: '420px', cursor: "pointer"}}      
    >
        <div className="trackSearch">
            <CardMedia
            className='trackImage'
            image={track.albumUrl}
            style={{height:'80px', width: '80px'}}
            />

        <div className='trackTitle'>{track.title} by</div>
        
        <div className='trackArtist'>{track.artist}</div> 
     </div>
    </Card>
    )

}
export default TrackSearchResult