import {useEffect, useState} from "react"

function Artist () {
  const [artistlist, setArtistList] =useState ([])
   
  const getArtistList = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=prodigy&page_size=15&apikey=9b0be27a6f92a80c6753a5b1a9227097")
    const data = await response.json()
    setArtistList(data.results)  
  console.log(data)
  }
  
  useEffect (() => {getArtistList()}, [])

  return (
    <div className="Artist" artistlist={artistlist}>
     <form>
     <input type="text"/>
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Artist;