import React, {useEffect, useState} from "react"
// import Artist from "./Artist"
const Search = (props) => {
  //State to hold the data of our form
  const [formData, setFormData] = React.useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
     
      </form>
    </div>
  );
};

export default Search;






// import React, {useEffect} from "react"
// // form
// const Search =(props) => {
//   const [searchlist, setSearchList] =React.useState ({
//     searchtrack:"",
//   })
   
//   const getSearchList = async (searchTitle) => {
//     const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${searchTitle}&apikey=	a00d34315a09baefa2486f28ad78704f`)
//     const data = await response.json()
//     setSearchList(data.results)  
//   // console.log(data.message)
//   }
//   useEffect (() => {getSearchList()}, [])

//   const handleChange =(event) =>{
//     setSearchList({...searchlist, [event.target.name]: event.target.value })
//   }
// const handleSumbit = (event) => {
//   event.preventDefault();
//   props.search(searchlist.searchtrack)
// }

//   return (
//     <div>
//       <form on submit={handleSumbit}>
//      <input 
//      type="text" 
//      name="searchtitle"
//      onChange={handleChange}
//      vaule={searchlist.searchtrack}
//      />
//      <input type="submit" value="submit"/>
//    </form>
//   </div>
//   )
// };

// export default Search;