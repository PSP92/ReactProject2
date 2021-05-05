import {useEffect, useState} from "react"

function Main () {
  const [tracklist, setTrackList] =useState ([])
   
  const getTrackList = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=8&country=us&f_has_lyrics=1&apikey=9b0be27a6f92a80c6753a5b1a9227097")
    const data = await response.json()
    setTrackList(data.results)  
  // console.log(data)
  }
  
  useEffect (() => {getTrackList()}, [])
  return (
    <div className="Main" tracklist={tracklist}>
    <h2>Trending Songs Chart</h2>
  
    {/* used bootstrap to make cards  */}
    <div className="row"          >
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Artist</p>
          <a href="#" className="btn btn-primary">Lyrics</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Artist</p>
          <a href="#" className="btn btn-primary">Lyrics</a>
        </div>
      </div>
    </div>
    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Artist</p>
        <a href="#" className="btn btn-primary">Lyrics</a>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>

  )
};

export default Main;