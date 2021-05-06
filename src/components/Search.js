import {useEffect, useState} from "react"
function Search () {
  const [searchlist, setSearchList] =useState ([])
   
  const getSearchList = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/q_track_artist&apikey=9b0be27a6f92a80c6753a5b1a9227097")
    const data = await response.json()
    setSearchList(data.results)  
  console.log(data)
  }
  
  useEffect (() => {getSearchList()}, [])

  return (
    <div className="search" searchlist={searchlist}>
     <form>
     <input type="text"/>
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Search;