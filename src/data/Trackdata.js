export default  [{
    title: 'Artist',
    url: 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=&page_size=15&apikey=9b0be27a6f92a80c6753a5b1a9227097',
},
{
    title:'Song',
    url:'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track&page_size=10&page=1&s_track_rating=desc&apikey=9b0be27a6f92a80c6753a5b1a9227097',
},
{
   title: 'Home',
   url:'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=8&country=us&f_has_lyrics=1&apikey=9b0be27a6f92a80c6753a5b1a9227097',
},
{
    title: 'Search',
    url:'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/q_track_artist&apikey=9b0be27a6f92a80c6753a5b1a9227097',
},

]