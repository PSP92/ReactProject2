import React from "react"

const Song = (props) => {
console.log(props.tracklist)
  // let track = 0
  let foo = 0
  if (props.tracklist !== null) {
  foo = props.tracklist.track.map (
   (track, index) => {
     return (
       <div>
       <p className="trackname">Song: {track.name}</p>
       <p className="artistname">Artist: {track.artist.name}</p>
       </div>
     )
   }
 )

}
 

  return (
    <div className="Song">
<h3> Top 50</h3>
{foo}
  </div>
  )
}

export default Song;







// import React from "react"

// const Song = (props) => {
// console.log(props.tracklist)
//   // let track = 0
//   let foo = 0
//   if (props.tracklist !== null) {
//   foo = props.tracklist.track.map (
//    (track, index) => {
//      return (
//        <div>
//        <p>{track.name}</p>
//        <p>{track.artist.name}</p>
//        </div>
//      )
//    }
//  )

// }
 

//   return (
//     <div className="Song">
// <p> dispaly me</p>
// {foo}
//   </div>
//   )
// }

// export default Song;












// import React, {useEffect, useState} from "react"
// function Song () {
//   const [songlist, setSongList] =useState ([])
   
//   const getSongList = async () => {
//     const response = await fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track&page_size=10&page=1&s_track_rating=desc&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f")
//     const data = await response.json()
//     setSongList(data.results)  
//   // console.log(data)
//   }
  
//   useEffect (() => {getSongList()}, [])

//   return (
//     <div className="Song" songlist={songlist}>
//      <form>
//      <input type="text"/>
//      <input type="submit" value="submit"/>
//    </form>
//   </div>
//   )
// };

// export default Song;