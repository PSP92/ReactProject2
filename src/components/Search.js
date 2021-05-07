import React, {useEffect} from "react"
// form
const Search =(props) => {
  const [searchlist, setSearchList] =React.useState ({
    searchtrack:"",
  })
   
  const getSearchList = async (searchTitle) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${searchTitle}&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f`)
    const data = await response.json()
    setSearchList(data.results)  
  // console.log(data.message)
  }
  useEffect (() => {getSearchList()}, [])

  const handleChange =(event) =>{
    setSearchList({...searchlist, [event.target.name]: event.target.value })
  }
const handleSumbit = (event) => {
  event.preventDefault();
  props.search(searchlist.searchtrack)
}

  return (
    <div>
      <form on submit={handleSumbit}>
     <input 
     type="text" 
     name="searchtitle"
     onChange={handleChange}
     vaule={searchlist.searchtrack}
     />
     <input type="submit" value="submit"/>
   </form>
  </div>
  )
};

export default Search;