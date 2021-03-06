import React, {useState} from "react"

function Artist (props) {
 // state to hold the forms data
    const [form, setForm] = useState({
      searchTerm: "",
    });
  
    // handle change function
    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  
    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.search(form.searchTerm)
    }
  
    return( 
      <div>
 
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    onChange={handleChange} v
    alue={props.searchTerm} 
    name="searchTerm"/>
  <input type="submit" value="search"/>
    </form>
    </div>
   
    )
  }
  

  
export default Artist;




// import React, {useEffect, useState} from "react"
// // moviedisplay
// function Artist () {
//   const [artistlist, setArtistList] =useState ([])
//    const [searchartist,setSearchArtist] =useState(null)

//   const getArtistList = async (searchartist) => {
//     const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=sia&page_size=15&apikey=957f9a1275da5cf4ac3dc9b1ede9af7f`)
//     const data = await response.json()
//     setArtistList(data.message)  
//   // console.log(data.message)
//   }
// useEffect (() => {getArtistList()}, [])
// const handleChange =(event) =>{
//   setSearchArtist({...searchartist,[event.target.name]:event.target.value})
//   // console.log(searchartist)
//   return <h2></h2>
// }
// const handleSumbit =(event) =>{
//   event.preventDefault();
  
// }

// const loaded =() => {
//   return  <h2>{artistlist[0].body.artist_list[0].artist.artist_id} Artist goes here</h2>
// }
// const loading =() => {
//      return <h1>loading....</h1>
//      }
     
// return (
//  <div className="Artist">
//      <form onSumbit={handleSumbit}>
//        <input 
//        type="text" 
//        name="searchartist"
//         onChange={handleChange}
//         value={artistlist.searchartist}
      
//        />
//      <input type="submit" value="submit"/>
//    </form>
//   </div>
//   );
//   }
// export default Artist;