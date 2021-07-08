function TrackSearchResult ({track, setEmbed, embed, setChosenTrack}) {
    function selectSong(track){

        setEmbed(track.uri)
        setChosenTrack(track.title)
    }
    console.log("embed is",embed)
    return(
        <div className="d-flex m-2 align-items-center"
        style={{cursor: "pointer"}}
        onClick={() => selectSong(track)}>
        <img src={track.albumUrl} style={{height:'64px', width: '64px'}} />
        <div>
            {track.title}
           <div>{track.artist}</div> 
        </div>
    </div>
    )

}
export default TrackSearchResult