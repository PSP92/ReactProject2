import React, {useEffect, useState} from "react"


function Main () {
  const [tracklist, setTrackList] =useState ([])
 
   let data =''
  const getTrackList = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=8&country=us&f_has_lyrics=1&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f")
    const data = await response.json()
   setTrackList(data.message.body.track_list)
  //  console.log(data.message.body.track_list)
  }
  useEffect (() => {getTrackList()}, []);
    

  return (
    <div className="Main" tracklist={tracklist}>
    <h2>Trending Songs Chart</h2>
  </div>
  )
}

export default Main;