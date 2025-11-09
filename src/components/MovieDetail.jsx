import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const {id} = useParams();
  const [movie,SetMovie] = useState(null);

  // useEffect function
  useEffect(()=>{
    async function getMovie(){
        const res = await fetch(`https://www.omdbapi.com/?apikey=af9e3c3c&i=${id}`);
        const data = await res.json();
        console.log(data);
        SetMovie(data);
    }
    getMovie();
  },[id]);
  
  if(!movie) return <p className='movie-detail'>Loading...</p>

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  )
}

export default MovieDetail
