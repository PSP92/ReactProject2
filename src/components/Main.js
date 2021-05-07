import React, {useEffect, useState} from "react"
// import Artist from "./components/Artist"
import Song from "./Song"
function Main () {
  const [tracklist, setTrackList] =useState (null)
  // const [searchlist, setSearchList] =useState (null)
 
   let data =''
  const getTrackList = async () => {
    const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=17b400718485bd6dfb6eecc870698ec2&format=json")
    const data = await response.json()
   setTrackList(data.tracks)
  
  //  console.log(data.message.body.track_list
}
let track = '';

  if (tracklist !== null) {

   for (let i = 0; i < tracklist.track.length; i++) {
     console.log(tracklist.track[i].name)
     console.log(tracklist.track[i].artist.name)
     console.log(tracklist.track[i].image[0])
   }
    
  }

  const getSearchList = () => {}
  useEffect (() => {getTrackList()
  }, []);
    

  return (
    <div className="Main" tracklist={tracklist}>
    <h2>Trending Songs Chart</h2>
    {track}
    <Song tracklist={tracklist}/>
  </div>
  )
}

export default Main;








// import React, {useEffect, useState} from "react"
// import Artist from "./Artist"

// function Main () {
//   const [tracklist, setTrackList] =useState ([])
//   const [searchlist, setSearchList] =useState ([{}])
 
//    let data =''
//   const getTrackList = async () => {
//     const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=8&country=us&f_has_lyrics=1&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f")
//     const data = await response.json()
//    setTrackList(data.message.body.track_list)
  
//   //  console.log(data.message.body.track_list)
//   }
//   const getSearchList = () => {}
//   useEffect (() => {getTrackList()}, []);
    

//   return (
//     <div className="Main" tracklist={tracklist}>
//     <h2>Trending Songs Chart</h2>
//     <Artist props={getSearchList}/>
//   </div>
//   )
// }

// export default Main;