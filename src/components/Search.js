import React, {useEffect, useState} from "react"
function Search () {
  const [searchlist, setSearchList] =useState ([])
   
  const getSearchList = async (searchtitle) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${searchtitle}&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f`)
    const data = await response.json()
    setSearchList(data.results)  
  // console.log(data.message)
  }
  
  useEffect (() => {getSearchList()}, [])

  return (
    <div className="search">
      {/* <form> */}
     <form searchlist={searchlist}>
     <input type="text" />
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Search;