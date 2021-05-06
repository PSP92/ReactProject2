import {useEffect, useState} from "react"
function Song () {
  const [songlist, setSongList] =useState ([])
   
  const getSongList = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track&page_size=10&page=1&s_track_rating=desc&apikey=9b0be27a6f92a80c6753a5b1a9227097")
    const data = await response.json()
    setSongList(data.results)  
  console.log(data)
  }
  
  useEffect (() => {getSongList()}, [])

  return (
    <div className="Song" songlist={songlist}>
     <form>
     <input type="text"/>
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Song;