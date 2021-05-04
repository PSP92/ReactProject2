// import React from 'react';
import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { Route } from 'react-router-dom'

const Data= () => {[
  main:"https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=9b0be27a6f92a80c6753a5b1a9227097",
  artist:"http://api.musixmatch.com/ws/1.1/track.search?q_artist=&page_size=10&page=1&s_track_rating=desc&apikey=9b0be27a6f92a80c6753a5b1a9227097",
  song:"http://api.musixmatch.com/ws/1.1/track.search?q_track&page_size=10&page=1&s_track_rating=desc&apikey=9b0be27a6f92a80c6753a5b1a9227097",
]};




export const Data= (props) =>{
  const [data, setData]=React.useState(null)
    React.useEffect(()=>
    console.log(props)
)


  return <h1>This is the Data Component</h1>;
}

export default Data;