import {useEffect, useState} from "react"
// import Artist from "./Artist"
function Search () {
  const [searchlist, setSearchList] =useState ([])
   
  const getSearchList = async (searchTitle) => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${searchTitle}&apikey=9b0be27a6f92a80c6753a5b1a9227097")
    const data = await response.json()
    setSearchList(data.results)  
  console.log(data.message)
  }
  
  useEffect (() => {getSearchList()}, [])

  return (
    <div className="search" searchlist={searchlist}>
     <form>
     <input type="text" searchTitle={getSearchList}/>
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Search;